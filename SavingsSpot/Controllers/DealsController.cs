using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SavingsSpot.Data;
using SavingsSpot.Entities;
using System.Diagnostics.CodeAnalysis;

namespace SavingsSpot.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DealsController : ControllerBase
    {
        private readonly DealContext _context;
        public DealsController(DealContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Deal>>> GetDeals()
        {
           return await _context.Deals.ToListAsync();
        }

        [HttpGet("{dealid}")]
        public async Task<ActionResult<Deal>> GetDeals(int dealId)
        {
            return await _context.Deals.FindAsync(dealId);
        }
    }
}
