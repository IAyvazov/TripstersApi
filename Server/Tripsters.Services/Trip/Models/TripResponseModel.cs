namespace Tripsters.Services.Trip.Models
{
    public class TripResponseModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string FromTown { get; set; }

        public string ToTown { get; set; }

        public string CreatorId { get; set; }

        public string StartDate { get; set; }
    }
}
