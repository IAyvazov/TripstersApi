namespace Tripsters.Services.Trip.Models
{
    public class TripJoinResponseModel
    {
        public bool isMember { get; set; } = true;

        public string ErrorMessage { get; set; }
    }
}
