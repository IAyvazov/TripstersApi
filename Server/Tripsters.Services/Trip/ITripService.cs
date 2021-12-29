using Tripsters.Services.Trip.Models;

namespace Tripsters.Services.Trip
{
    public interface ITripService
    {
        Task<int> Create(TripCreateRequestModel model, string userId);

        Task<IEnumerable<TripResponseModel>> All();

        Task<IEnumerable<TripResponseModel>> ByUser(string userId);

        Task<TripDetailsResponseModel> Details(int tripId);
    }
}
