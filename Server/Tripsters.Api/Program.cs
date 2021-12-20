using Tripsters.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddCors()
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
    .WithOrigins(new []{ "http://localhost:3000" })
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowCredentials())
    .UseAuthentication()
    .UseAuthorization()
    .UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            })
    .ApplyMigrations();

app.Run();
