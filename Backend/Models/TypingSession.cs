namespace ZonetyperApi.Models;

public class TypingSession
{
    public int Id { get; set; }
    public int PromptId { get; set; }
    public Guid SessionGuid { get; set; }
    public double WPM { get; set; }
    public double RawWPM { get; set; }
    public double Accuracy { get; set; }
    public int Duration { get; set; }
    public int ErrorCount { get; set; }
    public DateTime CompletedAt { get; set; }
}