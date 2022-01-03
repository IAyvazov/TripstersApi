namespace Tripsters.Api.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Tripsters.Infrastructure;
    using Tripsters.Services.Trip;
    using Tripsters.Services.Trip.Models;

    public class TripController : ApiController
    {
        private readonly ITripService tripService;

        public TripController(ITripService tripService)
        {
            this.tripService = tripService;
        }

        [Authorize]
        [HttpPost(nameof(Create))]
        public async Task<IActionResult> Create(TripCreateRequestModel model)
        {
            var userId = this.User.GetId();

            if (userId == null)
            {
                return Unauthorized();
            }

            var tripId = await this.tripService.Create(model, userId);

            if (tripId == 0)
            {
                return BadRequest();
            }

            return Ok();
        }

        [Authorize]
        [HttpPut("Edit/{tripId}")]
        public async Task<IActionResult> Edit([FromRoute] int tripId, [FromBody] TripCreateRequestModel model)
        {
            var userId = this.User.GetId();

            if (userId == null)
            {
                return Unauthorized();
            }

            var trip = await this.tripService.Edit(model, userId, tripId);

            if (trip == 0)
            {
                return NotFound();
            }

            return Ok(trip);
        }

        [Authorize]
        [HttpGet("All")]
        public async Task<IActionResult> GetAll()
        {
            var trips = await this.tripService.All();
            return Ok(trips);
        }

        [Authorize]
        [HttpGet("ByUser/{userId}")]
        public async Task<IActionResult> GetAllByUser(string userId)
        {
            var trips = await this.tripService.ByUser(userId);

            return Ok(trips);
        }

        [Authorize]
        [HttpGet("Details/{tripId}/{userId}")]
        public async Task<IActionResult> GetAllByUser(int tripId, string userId)
        {
            var trip = await this.tripService.Details(tripId, userId);

            return Ok(trip);
        }

        [Authorize]
        [HttpGet("Get/{tripId}")]
        public async Task<IActionResult> GetById(int tripId)
        {
            var trip = await this.tripService.GetById(tripId);

            if (trip == null)
            {
                return BadRequest();
            }

            return Ok(trip);
        }

        [Authorize]
        [HttpPatch("Join/{tripId}/{userId}")]
        public async Task<IActionResult> JoinTrip(int tripId, string userId)
        {
            var response = await this.tripService.JoinTrip(tripId, userId);

            return Ok(response);
        }

        [Authorize]
        [HttpDelete("Delete/{tripId}/{userId}")]
        public async Task<IActionResult> DeleteTrip(int tripId, string userId)
        {
            var response = await this.tripService.DeleteTrip(tripId, userId);

            if (!response)
            {
                return BadRequest();
            }

            return Ok(response);
        }
    }
}
