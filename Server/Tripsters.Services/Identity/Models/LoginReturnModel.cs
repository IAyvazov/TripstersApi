namespace Tripsters.Services.Identity.Models
{
    public class LoginReturnModel
    {
        public string EncryptedToken { get; set; }

        public bool IsUserValid { get; set; }

        public bool IsPasswordValid { get; set; }
    }
}
