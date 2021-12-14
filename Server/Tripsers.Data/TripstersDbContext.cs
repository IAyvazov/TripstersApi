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
            builder.Entity<Trip>()
             .HasOne(x => x.Creator)
             .WithMany(x => x.Trips)
             .HasForeignKey(x => x.CreatorId)
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
