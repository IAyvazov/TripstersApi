namespace Tripsters.Services.Identity.Models
{
    public class LoginReturnModel
    {
        public string Id { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }

        public string Token { get; set; }

        public bool IsUserValid { get; set; }

        public bool IsPasswordValid { get; set; }
    }
}
