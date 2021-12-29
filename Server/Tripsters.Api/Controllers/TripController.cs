namespace Tripsters.Api.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Security.Claims;
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

            if(tripId == null)
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
    }
}
