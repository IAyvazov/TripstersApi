namespace Tripsters.Infrastructure
{
    using Microsoft.AspNetCore.Builder;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.DependencyInjection;
    using Tripsers.Data;

    public static class ApplicationBuilderExtensions
    {

        public static IApplicationBuilder UseSwaggerUI(this IApplicationBuilder app)
        {
           return app.UseSwagger()
                 .UseSwaggerUI(c =>
                 {
                     c.SwaggerEndpoint("/swagger/v1/swagger.json", "Tripsters Api");
                     c.RoutePrefix = string.Empty;
                 });
        }

        public static void ApplyMigrations(this IApplicationBuilder app)
        {
            using var services = app.ApplicationServices.CreateScope();

            var dbContext = services.ServiceProvider.GetService<TripstersDbContext>();

            dbContext.Database.Migrate();
        }
    }
}
