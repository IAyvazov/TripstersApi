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

            if(tripId == 0)
            {
                return BadRequest();
            }

            return Ok();
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
        [HttpGet("Details/{tripId}")]
        public async Task<IActionResult> GetAllByUser(int tripId)
        {
            var trip = await this.tripService.Details(tripId);

            return Ok(trip);
        }

        [Authorize]
        [HttpGet("Join/{tripId}/{userId}")]
        public async Task<IActionResult> JoinTrip(int tripId,string userId)
        {
            var isJoined = await this.tripService.JoinTrip(tripId,userId);

            if (!isJoined)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}
