

using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<ZonetyperDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString(
        "DefaultConnection")));

var app = builder.Build();
app.MapGet("/", () => "Zonetyper API is running!");
app.UseAuthorization();
app.MapControllers();
app.Run();





