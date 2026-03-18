using ZonetyperApi.Models;

using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddHttpClient();
builder.Services.AddDbContext<ZonetyperDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString(
        "DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:5173", "https://www.zonetyper.com", "https://zonetyper.com")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors();
app.UseAuthorization();
app.MapControllers();
app.MapGet("/", () => "Zonetyper API is running!");
app.Run();





