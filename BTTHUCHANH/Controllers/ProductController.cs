using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BTTHUCHANH.DBContext;
using Newtonsoft.Json;
using BTTHUCHANH.Models;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Http.HttpResults;
namespace BTTHUCHANH.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : Controller
    {
        private readonly ProductDbContext _context;
       
        public ProductController(ProductDbContext context)
        {
            _context = context;
        }

     
        [HttpPost("create")]
        public ActionResult Create([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Product>(json.GetValue("data").ToString());
            _context.Products.Add(model);
            _context.SaveChanges();
            return Json(model);
        }



        [HttpPost("edit")]
        public ActionResult Edit([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Product>(json.GetValue("data").ToString());
            _context.Products.Update(model);
            _context.SaveChanges();
            return Json(model);
        }


        [HttpPost("delete")]
        public ActionResult Delete([FromBody] JObject json)
        {
            var id = (json.GetValue("id").ToString());
            var result = _context.Products.SingleOrDefault(p => p.id == id);
            _context.Products.Remove(result);
            _context.SaveChanges();
            return Json(result);

        }
        [HttpGet("getListUse")]
        public IActionResult getListUse()
        {
            var result = _context.Products.AsQueryable().
                 Select(d => new
                 {
                     id = d.id,
                     name = d.ProductName
                 }).ToList();
            return Json(result);
        }
    }
}
