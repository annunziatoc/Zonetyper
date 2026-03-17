using Microsoft.EntityFrameworkCore;
using ZonetyperApi.Models;

public class ZonetyperDbContext : DbContext
{
    public ZonetyperDbContext(DbContextOptions<ZonetyperDbContext> options) : base(options)
    {

    }

    public DbSet<TypingSession> TypingSessions { get; set; }
}