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
        policy.WithOrigins("http://localhost:5173")
          .AllowAnyHeader()
          .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors();
app.UseAuthorization();
app.MapControllers();

app.MapGet("/", () => "Zonetyper API is running!");

app.MapPost("/api/sourceText", async (SourceText sourceText, ZonetyperDbContext db) =>
{
    sourceText.CreatedAt = DateTime.UtcNow;
    db.SourceTexts.Add(sourceText);
    await db.SaveChangesAsync();
    return Results.Created($"/api/sourceText/{sourceText.Id}", sourceText);
});





//deploy server
app.Run();





