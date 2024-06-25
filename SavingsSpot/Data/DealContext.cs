using Microsoft.EntityFrameworkCore;
using SavingsSpot.Entities;

namespace SavingsSpot.Data
{
    public class DealContext : DbContext
    {
        public DealContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Deal> Deals { get; set; }
    }
}
