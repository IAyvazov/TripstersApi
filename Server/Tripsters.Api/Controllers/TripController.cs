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

            var tripId = this.tripService.Create(model, userId);

            if(tripId == null)
            {
                return BadRequest();
            }

            return Ok();
        }

        [Authorize]
        [HttpGet("All")]
        public async Task<IActionResult> GetAll(TripCreateRequestModel model)
        {
            var trips = this.tripService.All();
            return Ok(trips);
        }
    }
}
