using System.Security.Claims;

namespace Tripsters.Infrastructure
{
    public static class IdentityExtentios
    {
        public static string? GetId(this ClaimsPrincipal user)
            => user.Claims
            .FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)
            ?.Value;
    }
}
