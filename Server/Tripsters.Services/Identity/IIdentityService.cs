namespace Tripsters.Services.Identity
{
    using System.IdentityModel.Tokens.Jwt;
    using Tripsters.Services.Identity.Models;

    public interface IIdentityService
    {
        Task<RegisterUserResponseModel> Register(RegisterUserRequestModel model);

        Task<LoginReturnModel> Login(LoginRequestModel model);

        public JwtSecurityToken VerifyToken(string jwt);
    }
}
