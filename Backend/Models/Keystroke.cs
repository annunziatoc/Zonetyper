namespace ZonetyperApi.Models;

public class Keystroke
{
    public int Id { get; set; }
    public int SessionId { get; set; }
    public char CharacterTyped { get; set; }
    public char ExpectedCharacter { get; set; }
    public bool IsCorrect { get; set; }
    public int TimestampMs { get; set; }
    public int Position { get; set; }
}