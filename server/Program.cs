using ZonetyperApi.Models;

using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<ZonetyperDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString(
        "DefaultConnection")));

var app = builder.Build();

app.MapGet("/", () => "Zonetyper API is running!");

app.MapPost("/api/passages", async (Passage passage, ZonetyperDbContext db) =>
{
    passage.CreatedAt = DateTime.UtcNow;
    db.Passages.Add(passage);
    await db.SaveChangesAsync();
    return Results.Created($"/api/passage/{passage.Id}", passage);
});


app.UseAuthorization();
app.MapControllers();
app.Run();





