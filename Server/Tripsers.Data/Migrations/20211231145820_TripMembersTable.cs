using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Tripsers.Data.Migrations
{
    public partial class TripMembersTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_Trips_TripId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_TripId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "TripId",
                table: "AspNetUsers");

            migrationBuilder.CreateTable(
                name: "TripsMembers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    TripId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TripsMembers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TripsMembers_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TripsMembers_Trips_TripId",
                        column: x => x.TripId,
                        principalTable: "Trips",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TripsMembers_TripId",
                table: "TripsMembers",
                column: "TripId");

            migrationBuilder.CreateIndex(
                name: "IX_TripsMembers_UserId",
                table: "TripsMembers",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TripsMembers");

            migrationBuilder.AddColumn<int>(
                name: "TripId",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_TripId",
                table: "AspNetUsers",
                column: "TripId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_Trips_TripId",
                table: "AspNetUsers",
                column: "TripId",
                principalTable: "Trips",
                principalColumn: "Id");
        }
    }
}
