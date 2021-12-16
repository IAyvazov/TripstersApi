namespace Tripsters.Services.Identity
{
    using Tripsters.Services.Identity.Models;

    public interface IIdentityService
    {
        Task<RegisterUserResponseModel> Register(RegisterUserRequestModel model);

        Task<LoginReturnModel> Login(LoginRequestModel model);
    }
}
