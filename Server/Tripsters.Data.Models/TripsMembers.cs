namespace Tripsters.Models
{
    public class TripsMembers
    {
        public int Id { get; set; }

        public string UserId { get; set; }

        public User User { get; set; }

        public int TripId { get; set; }

        public Trip Trip { get; set; }
    }
}
