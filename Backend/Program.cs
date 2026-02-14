

using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<ZonetyperDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString(
        "DefaultConnection")));

var app = builder.Build();
app.MapGet("/", () => "Zonetyper API is running!");
app.MapGet("/api/passages", async (Passage passage, ZonetyperDbContext db) =>
{
    db.Passages.Add(passage);
    await db.SaveChangesAsync();
})
app.UseAuthorization();
app.MapControllers();
app.Run();





