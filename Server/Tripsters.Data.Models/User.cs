namespace Tripsters.Models
{
    using Microsoft.AspNetCore.Identity;

    public class User : IdentityUser
    {
        public User()
        {
            this.Trips = new HashSet<Trip>();
            this.TripsMembers = new HashSet<TripsMembers>();
        }

        public ICollection<Trip> Trips { get; set; }

        public ICollection<TripsMembers> TripsMembers { get; set; }

    }
}
