

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

var app = builder.Build();
app.MapGet("/", () => "Zonetyper API is running!");
app.UseAuthorization();
app.MapControllers();
app.Run();



