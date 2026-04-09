using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ZonetyperApi.Migrations
{
    /// <inheritdoc />
    public partial class RenameModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "WPM",
                table: "TypingSessions",
                newName: "Wpm");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Wpm",
                table: "TypingSessions",
                newName: "WPM");
        }
    }
}
