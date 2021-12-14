using Tripsters.Common;

namespace Tripsters.Models
{
    using System.ComponentModel.DataAnnotations;
    using Tripsters.Data.Models.Common;

    using static GlobalConstant.Destination;

    public class Destination : BaseModel<int>
    {
        public Destination()
        {
            this.Trips = new HashSet<Trip>();
        }

        [Required]
        [MaxLength(TownMaxLenght)]
        public string FromTown { get; set; }

        [Required]
        [MaxLength(TownMaxLenght)]
        public string ToTown { get; set; }

        public IEnumerable<Trip> Trips { get; set; }
    }
}
