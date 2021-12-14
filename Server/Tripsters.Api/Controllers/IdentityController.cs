namespace Tripsters.Api.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Tripsters.Services.Identity;
    using Tripsters.Services.Identity.Models;

    public class IdentityController : ApiController
    {
        private readonly IIdentityService identityService;

        public IdentityController(IIdentityService identityService)
            => this.identityService = identityService;

        [Route(nameof(Register))]
        [HttpPost]
        public async Task<ActionResult> Register(RegisterUserRequestModel model)
        {

            var result = await this.identityService.Register(model);

            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }
            
            return Ok();
        }

        [Route(nameof(Login))]
        [HttpPost]
        public async Task<ActionResult<object>> Login(LoginRequestModel model)
        {
            var result = await this.identityService.Login(model);

            if (!result.IsUserValid)
            {
                return NotFound();
            }

            if (!result.IsPasswordValid)
            {
                return BadRequest();
            }

            return new
            {
                Token = result.EncryptedToken
            };
        }
    }
}
