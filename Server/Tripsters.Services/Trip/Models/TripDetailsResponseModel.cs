namespace Tripsters.Services.Trip.Models
{
    using Tripsters.Services.User.Models;

    public class TripDetailsResponseModel
    {
        public TripDetailsResponseModel()
        {
            this.Travelers = new HashSet<UserResponseModel>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string StartDate { get; set; }

        public string FromTown { get; set; }

        public string ToTown { get; set; }

        public string CreatorName { get; set; }

        public string CreatorId { get; set; }

        public bool IsMember { get; set; }

        public bool IsCreator { get; set; }

        public IEnumerable<UserResponseModel> Travelers { get; set; }
    }
}
