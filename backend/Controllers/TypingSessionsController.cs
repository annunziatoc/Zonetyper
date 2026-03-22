using Microsoft.AspNetCore.Mvc;
using ZonetyperApi.Models;

[ApiController]
[Route("api/sessions")]
public class TypingSessionController(ZonetyperDbContext db) : ControllerBase
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
        }

        db.TypingSessions.Add(session);
        await db.SaveChangesAsync();
        return Ok(session);
    }
}