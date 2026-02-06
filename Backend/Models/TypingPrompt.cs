namespace ZonetyperApi.Models;

public class TypingPrompt
{
     public int Id { get; set; }
     public string Text { get; set; } = string.Empty;
     public int DifficultyLevel { get; set; }
     public string? Category { get; set; }
     public DateTime CreatedAt { get; set; }
}
