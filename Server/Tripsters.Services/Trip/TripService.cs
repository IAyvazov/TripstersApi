namespace Tripsters.Services.Trip
{
    using System.Globalization;
    using Tripsers.Data;
    using Tripsters.Models;
    using Tripsters.Services.Trip.Models;
    using Tripsters.Services.User.Models;

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
                StartDate = model.StartDate,
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

        public async Task<TripDetailsResponseModel> Details(int tripId)
        => this.dbContext.Trips
            .Where(x => x.Id == tripId)
            .Select(trip => new TripDetailsResponseModel
            {
                Id = trip.Id,
                Name = trip.Name,
                FromTown = trip.Destination.FromTown,
                ToTown = trip.Destination.ToTown,
                Description = trip.Description,
                StartDate = trip.StartDate.ToString(CultureInfo.InvariantCulture.DateTimeFormat),
                CreatorName = trip.Creator.UserName,
                CreatorId = trip.CreatorId,
                Travelers = trip.Travelers
                    .Select(user => new UserResponseModel
                    {
                        Id = user.Id,
                        UserName = user.UserName,
                        Email = user.Email,
                    }).ToList(),
            })
            .FirstOrDefault();

        public async Task<bool> JoinTrip(int tripId, string userId)
        {
            var user = this.dbContext.Users.FirstOrDefault(x => x.Id == userId);

            if (user == null)
            {
                return false;
            }

            var trip = this.dbContext.Trips.FirstOrDefault(x => x.Id == tripId);

            if (trip == null)
            {
                return false;
            }

            if (trip.Travelers.Contains(user))
            {
                return false;
            }

            var travelers = new HashSet<User>
           {
               user,
           };

            trip.Travelers = travelers;

            this.dbContext.SaveChanges();

            return true;
        }
    }
}
