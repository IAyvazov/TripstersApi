namespace Tripsters.Api.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Tripsters.Services.Identity;
    using Tripsters.Services.Identity.Models;
    using Tripsters.Services.User;

    public class IdentityController : ApiController
    {
        private readonly IIdentityService identityService;
        private readonly IUserService userService;

        public IdentityController(
            IIdentityService identityService,
            IUserService userService
            )
        {
            this.identityService = identityService;
            this.userService = userService;
        }

        [HttpPost(nameof(Register))]
        public async Task<ActionResult> Register(RegisterUserRequestModel model)
        {
            var result = await this.identityService.Register(model);

            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            return Created(nameof(Register), result);
        }

        [HttpPost(nameof(Login))]
        public async Task<IActionResult> Login(LoginRequestModel model)
        {
            var result = await this.identityService.Login(model);

            if (!result.IsUserValid)
            {
                return NotFound("Invalid Credentials");
            }

            if (!result.IsPasswordValid)
            {
                return BadRequest("Invalid Credentials");
            }
            var jwt = result.EncryptedToken;

            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true,
                SameSite = SameSiteMode.None,
                Secure = true,
            }) ;

            return Ok(result);
        
        }

        [HttpPost(nameof(Logout))]
        public async Task<ActionResult> Logout()
        {
            Response.Cookies.Delete("jwt",new CookieOptions
            {
                HttpOnly = true,
                SameSite = SameSiteMode.None,
                Secure = true,

            });

            return Ok();
        }


        [HttpGet(nameof(User))]
        public async Task<IActionResult> User()
        {
            var jwt = Request.Cookies["jwt"];

            if (jwt == null)
            {
                return Unauthorized();
            }

            var token = identityService.VerifyToken(jwt);

            string userId = token.Payload.Values.FirstOrDefault().ToString();

            var user = this.userService.GetUserById(userId);

            if (user == null)
            {
                return Unauthorized(user);
            }

            return Ok(user);
        }
    }
}
