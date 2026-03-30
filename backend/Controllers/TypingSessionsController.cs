using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZonetyperApi.Models;

[ApiController]
[Route("api/sessions")]
public class TypingSessionController(ZonetyperDbContext db, ILogger<TypingSessionController> logger) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Submit(CreateTypingSessionDto dto)
    {

        var session = new TypingSession
        {
            WPM = dto.Wpm,
            Accuracy = dto.Accuracy,
            CompletedAt = DateTime.UtcNow,
            Duration = dto.Duration,
            ErrorCount = dto.ErrorCount,
            SourceTextId = dto.SourceTextId,
            SourceText = dto.SourceText
        };

        try
        {
            db.TypingSessions.Add(session);
            await db.SaveChangesAsync();
            return Ok(session);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Failed to save session");
            return StatusCode(500, "Failed to save session");
        }
    }
    
    [HttpGet("stats")] 
     public async Task <IActionResult> GetStats()
    {

        var topSpeed = await db.TypingSessions.MaxAsync(s => (double?)s.WPM ?? 0);
        var recentStats = await db.TypingSessions
        .OrderByDescending(s => s.CompletedAt)
        .Take(5)
        .ToListAsync();

        return Ok(new { topSpeed, recentStats });
    }
}