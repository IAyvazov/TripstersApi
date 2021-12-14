namespace Tripsters.Models
{
    using Microsoft.AspNetCore.Identity;

    public class User : IdentityUser
    {
        public User()
        {
            this.Trips = new HashSet<Trip>();
        }

        public IEnumerable<Trip> Trips { get; set; }
    }
}
