namespace Tripsters.Services.Identity
{
    using Microsoft.AspNetCore.Identity;
    using Microsoft.Extensions.Options;
    using Microsoft.IdentityModel.Tokens;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Text;
    using Tripsters.Common.Settings;
    using Tripsters.Models;
    using Tripsters.Services.Identity.Models;

    public class IdentityService : IIdentityService
    {
        private readonly UserManager<User> userManager;
        private readonly ApplicationSettings appSettings;

        public IdentityService(
            UserManager<User> userManager,
            IOptions<ApplicationSettings> appSettings)
        {
            this.userManager = userManager;
            this.appSettings = appSettings.Value;
        }


        public async Task<LoginReturnModel> Login(LoginRequestModel model)
        {
            var user = await this.userManager.FindByNameAsync(model.UserName);

            var isUserValid = true;
            var isPasswordValid = true;

            if (user == null)
            {
                isUserValid = false;
            }

            var passwordValid = await this.userManager.CheckPasswordAsync(user, model.Password);

            if (!passwordValid)
            {
                isPasswordValid = false;
            }

            var encryptedToken = await this.GenerateJwtToken(user);

            return new LoginReturnModel
            {
                EncryptedToken = encryptedToken,
                IsUserValid = isUserValid,
                IsPasswordValid = isPasswordValid,
            };
        }

        public async Task<RegisterUserResponseModel> Register(RegisterUserRequestModel model)
        {
            var userExist = await this.userManager.FindByNameAsync(model.UserName);

            if (userExist != null)
            {
                return new RegisterUserResponseModel
                {
                    Succeeded = false,
                    Description= "User with this name already exist."
                };
            }

            var user = new User
            {
                Email = model.Email,
                UserName = model.UserName,
            };

            var result = await this.userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                return new RegisterUserResponseModel
                {
                    Succeeded = false,
                    Description = result.Errors.FirstOrDefault().ToString()
                };
            }

            return  new RegisterUserResponseModel
            {
                Succeeded = true,
                Description = "User is created."
            };
        }

        private async Task<string> GenerateJwtToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Name, user.UserName)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256),
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var encryptedToken = tokenHandler.WriteToken(token);

            return encryptedToken;
        }

    }
}
