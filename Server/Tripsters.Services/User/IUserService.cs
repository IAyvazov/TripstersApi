namespace Tripsters.Services.User
{
    using Tripsters.Services.User.Models;

    public interface IUserService
    {
        UserResponseModel GetUserById(string id);
    }
}
