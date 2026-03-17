namespace ZonetyperApi.Models;

public class TypingSession
{
    public int Id { get; set; }
    public int SourceTextId { get; set; } //leaderboards later
    public string? Source { get; set; }
    public double WPM { get; set; }
    public double Accuracy { get; set; }
    public int Duration { get; set; }
    public int ErrorCount { get; set; }
    public DateTime CompletedAt { get; set; }
}


