namespace Tripsers.Data
{
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;
    using Tripsters.Models;

    public class TripstersDbContext : IdentityDbContext<User>
    {
        public TripstersDbContext(DbContextOptions<TripstersDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Trip> Trips { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>()
             .HasMany(x => x.Trips)
             .WithOne(x => x.Creator)
             .HasForeignKey(x => x.CreatorId)
             .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Trip>()
            .HasMany(x => x.Travelers)
            .WithOne(x => x.Trip)
            .HasForeignKey(x => x.TripId)
            .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Trip>()
                .HasOne(x => x.Destination)
                .WithMany(x => x.Trips)
                .HasForeignKey(x => x.DestinationId)
                .OnDelete(DeleteBehavior.Restrict);

            base.OnModelCreating(builder);
        }
    }
}
