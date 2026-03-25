using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ZonetyperApi.Migrations
{
    /// <inheritdoc />
    public partial class RenameSourceAsSourceText : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Source",
                table: "TypingSessions",
                newName: "SourceText");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SourceText",
                table: "TypingSessions",
                newName: "Source");
        }
    }
}
