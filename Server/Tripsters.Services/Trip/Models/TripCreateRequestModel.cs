using Tripsters.Common;

namespace Tripsters.Services.Trip.Models
{
    using System.ComponentModel.DataAnnotations;

    using static GlobalConstant.Trip;
    using static GlobalConstant.Destination;

    public class TripCreateRequestModel
    {
        [Required]
        [MaxLength(NameMaxLenght)]
        public string Name { get; set; }

        [MaxLength(DescriptionMaxLenght)]
        public string Description { get; set; }

        [Required]
        [MaxLength(TownMaxLenght)]
        [MinLength(TownMinLenght)]
        public string FromTown { get; set; }

        [Required]
        [MaxLength(TownMaxLenght)]
        [MinLength(TownMinLenght)]
        public string ToTown { get; set; }
    }
}
