namespace Tripsters.Services.Trip
{
    using Microsoft.AspNetCore.Identity;
    using Tripsers.Data;
    using Tripsters.Models;
    using Tripsters.Services.Trip.Models;

    public class TripService : ITripService
    {
        private readonly TripstersDbContext dbContext;
        private readonly UserManager<User> userManager;


        public TripService(TripstersDbContext dbContext, UserManager<User> userManager)
        {
            this.dbContext = dbContext;
            this.userManager = userManager;
        }

        public async Task<int> Create(TripCreateRequestModel model, string userId)
        {
            var trip = new Trip
            {
                Name = model.Name,
                Description = model.Description,
                CreatorId = userId,
                CreatedOn = DateTime.UtcNow,
                Destination = new Destination
                {
                    CreatedOn = DateTime.UtcNow,
                    FromTown = model.FromTown,
                    ToTown = model.ToTown,
                }
            };

            await this.dbContext.Trips.AddAsync(trip);

            await this.dbContext.SaveChangesAsync();

            return trip.Id;
        }

        public async Task<IEnumerable<TripResponseModel>> All()
       => this.dbContext.Trips
                .Where(x => x.IsDeleted == false)
                .Select(trip => new TripResponseModel
                {
                    Id = trip.Id,
                    Name = trip.Name,
                    FromTown = trip.Destination.FromTown,
                    ToTown = trip.Destination.ToTown,
                    CreatorId = trip.CreatorId,
                })
                .ToList();

        public async Task<IEnumerable<TripResponseModel>> ByUser(string userId)
        {
            return this.dbContext.Trips
            .Where(x => x.CreatorId == userId)
            .Select(trip => new TripResponseModel
            {
                Id = trip.Id,
                Name = trip.Name,
                FromTown = trip.Destination.FromTown,
                ToTown = trip.Destination.ToTown,
                CreatorId = trip.CreatorId,

            })
                .ToList();
        }
    }
}
