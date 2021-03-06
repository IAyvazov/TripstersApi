using Tripsters.Common;

namespace Tripsters.Models
{
    using System.ComponentModel.DataAnnotations;
    using Tripsters.Data.Models.Common;

    using static GlobalConstant.Trip;

    public class Trip : BaseModel<int>
    {
        public Trip()
        {
            this.Travelers = new HashSet<TripsMembers>();
        }

        [Required]
        [MaxLength(NameMaxLenght)]
        public string Name { get; set; }

        [MaxLength(DescriptionMaxLenght)]
        public string Description { get; set; }

        [Required]
        public string StartDate { get; set; }

        public int DestinationId { get; set; }

        public Destination Destination { get; set; }

        [Required]
        public string CreatorId { get; set; }

        public User Creator { get; set; }

        public ICollection<TripsMembers> Travelers { get; set; } 
    }
}
