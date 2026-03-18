using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ZonetyperApi.Migrations
{
    /// <inheritdoc />
    public partial class UpdateSchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Keystrokes");

            migrationBuilder.DropTable(
                name: "SourceTexts");

            migrationBuilder.DropColumn(
                name: "RawWPM",
                table: "TypingSessions");

            migrationBuilder.DropColumn(
                name: "SessionGuid",
                table: "TypingSessions");

            migrationBuilder.RenameColumn(
                name: "PromptId",
                table: "TypingSessions",
                newName: "SourceTextId");

            migrationBuilder.AddColumn<string>(
                name: "Source",
                table: "TypingSessions",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Source",
                table: "TypingSessions");

            migrationBuilder.RenameColumn(
                name: "SourceTextId",
                table: "TypingSessions",
                newName: "PromptId");

            migrationBuilder.AddColumn<double>(
                name: "RawWPM",
                table: "TypingSessions",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<Guid>(
                name: "SessionGuid",
                table: "TypingSessions",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateTable(
                name: "Keystrokes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CharacterTyped = table.Column<char>(type: "character(1)", nullable: false),
                    ExpectedCharacter = table.Column<char>(type: "character(1)", nullable: false),
                    IsCorrect = table.Column<bool>(type: "boolean", nullable: false),
                    Position = table.Column<int>(type: "integer", nullable: false),
                    SessionId = table.Column<int>(type: "integer", nullable: false),
                    TimestampMs = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Keystrokes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SourceTexts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Text = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SourceTexts", x => x.Id);
                });
        }
    }
}
