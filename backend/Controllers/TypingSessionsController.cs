using Microsoft.AspNetCore.Mvc;
using ZonetyperApi.Models;

[ApiController]
[Route("api/sessions")]
public class TypingSessionController(ZonetyperDbContext db, ILogger<TypingSessionController> logger) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Submit(CreateTypingSessionDto dto)
    {

        var session = new TypingSession();
        {
            session.WPM = dto.Wpm;
            session.Accuracy = dto.Accuracy;
            session.CompletedAt = DateTime.UtcNow;
            session.Duration = dto.Duration;
            session.ErrorCount = dto.ErrorCount;
            session.SourceTextId = dto.SourceTextId;
            session.SourceText = dto.SourceText;
        }

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
}