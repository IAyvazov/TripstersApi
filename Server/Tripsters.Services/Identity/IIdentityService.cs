namespace Tripsters.Services.Identity
{
    using Microsoft.AspNetCore.Identity;
    using Tripsters.Data.Models;
    using Tripsters.Services.Identity.Models;

    public interface IIdentityService
    {
        Task<IdentityResult> Register(RegisterUserRequestModel model);

        Task<LoginReturnModel> Login(LoginRequestModel model);
    }
}
