using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace HeatedGearShopAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private static readonly List<Product> _products = new List<Product>
        {
            new() { Id = 1, Name = "Heated Jacket - Black", Price = 199.99m, Description = "Stay warm in style with our advanced heated jacket. Features adjustable temperature settings and long-lasting battery life.", Image = "/images/heated-jacket-black.jpg", Variants = ["Small", "Medium", "Large"] },
            new() { Id = 2, Name = "Heated Jacket - Blue", Price = 199.99m, Description = "Stay warm in style with our advanced heated jacket. Features adjustable temperature settings and long-lasting battery life.", Image = "/images/heated-jacket-blue.jpg", Variants = ["Small", "Medium", "Large"] },
            new() { Id = 3, Name = "Power Bank", Price = 49.99m, Description = "High-capacity power bank to keep your devices charged on the go. Compatible with various USB devices.", Image = "/images/power-bank.jpg", Variants = ["5000mAh", "10000mAh", "20000mAh"] }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            return Ok(_products);
        }

        [HttpGet("{id}")]
        public ActionResult<Product> Get(int id)
        {
            var product = _products.Find(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
    }

    public class Product
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public decimal Price { get; set; }
        public required string Description { get; set; }
        public required string Image { get; set; }
        public required List<string> Variants { get; set; }
    }
}
