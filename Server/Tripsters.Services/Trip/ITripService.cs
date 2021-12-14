using Tripsters.Services.Trip.Models;

namespace Tripsters.Services.Trip
{
    public interface ITripService
    {
        Task<int> Create(TripCreateRequestModel model, string userId);

    }
}
