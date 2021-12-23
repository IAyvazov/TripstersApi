namespace Tripsters.Services.Trip
{
    using Tripsers.Data;
    using Tripsters.Models;
    using Tripsters.Services.Trip.Models;

    public class TripService : ITripService
    {
        private readonly TripstersDbContext dbContext;

        public TripService(TripstersDbContext dbContext)
        {
            this.dbContext = dbContext;
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
                    Description = trip.Description,
                    FromTown = trip.Destination.FromTown,
                    ToTown = trip.Destination.ToTown,
                    CreatedOn= trip.CreatedOn.ToString(),
                })
                .ToList();
    }
}
