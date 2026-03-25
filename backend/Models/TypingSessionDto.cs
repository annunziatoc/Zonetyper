public record CreateTypingSessionDto(
    int SourceTextId,
    double Wpm,
    double Accuracy,
    int Duration,
    int ErrorCount,
    string SourceText
);