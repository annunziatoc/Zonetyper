using Microsoft.EntityFrameworkCore;
using ZonetyperApi.Models;

public class ZonetyperDbContext : DbContext
{
    public ZonetyperDbContext(DbContextOptions<ZonetyperDbContext> options) : base(options)
    {

    }

    public DbSet<TypingSession> TypingSessions { get; set; }
    public DbSet<Keystroke> Keystrokes { get; set; }
    public DbSet<SourceText> SourceTexts { get; set; }

}