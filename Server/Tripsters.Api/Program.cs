using Tripsters.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddDatabase(builder.Configuration)
    .AddIdentity()
    .AddJwtAuthentication(builder.Services.GetAppSettings(builder.Configuration))
    .AddServices()
    .AddSwagger()
    .AddControllers();


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app
    .UseSwaggerUI()
    .UseRouting()
    .UseCors(options => options
    .AllowAnyOrigin()
    .AllowAnyHeader()
    .AllowAnyMethod())
    .UseAuthentication()
    .UseAuthorization()
    .UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            })
    .ApplyMigrations();

app.Run();
