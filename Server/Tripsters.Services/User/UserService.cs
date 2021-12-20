namespace Tripsters.Services.User
{
    using System.Linq;

    using Tripsers.Data;
    using Tripsters.Services.User.Models;

    public class UserService : IUserService
    {
        private readonly TripstersDbContext tripstersDbContext;

        public UserService(TripstersDbContext tripstersDbContext)
        {
            this.tripstersDbContext = tripstersDbContext;
        }

        public UserResponseModel GetUserById(string id)
        {
            var user = tripstersDbContext.Users.FirstOrDefault(u=>u.Id == id);

            return new UserResponseModel
            {
                UserName = user.UserName,
                Email = user.Email,
                Id = user.Id,
            };
        }
    }
}
