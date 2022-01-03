using Tripsters.Services.Trip.Models;

namespace Tripsters.Services.Trip
{
    public interface ITripService
    {
        Task<int> Create(TripCreateRequestModel model, string userId);

        Task<int> Edit(TripCreateRequestModel model, string userId, int tripId);

        Task<IEnumerable<TripResponseModel>> All();

        Task<IEnumerable<TripResponseModel>> ByUser(string userId);

        Task<TripDetailsResponseModel> Details(int tripId, string userId);

        Task<TripJoinResponseModel> JoinTrip(int tripId, string userId);

        Task<bool> DeleteTrip(int tripId, string userId);
        
        Task<TripResponseModel> GetById(int tripId);
    }
}
