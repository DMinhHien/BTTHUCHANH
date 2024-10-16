﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BTTHUCHANH.DBContext;
using Newtonsoft.Json;
using BTTHUCHANH.Models;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Http.HttpResults;

namespace BTTHUCHANH.Controllers
{
    public class UserController : Controller
    {
        private readonly ProductDbContext _context;
        // GET: ProductController
        public UserController(ProductDbContext context)
        {
            _context = context;
        }

        // POST: ProductController/Create
        [HttpPost]
        public ActionResult Create([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<User>(json.GetValue("data").ToString());
            _context.Users.Add(model);
            _context.SaveChanges();
            return Json(model);
        }


        // POST: UserController/Edit/5
        [HttpPost]
        public ActionResult Edit([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<User>(json.GetValue("data").ToString());
            _context.Users.Update(model);
            _context.SaveChanges();
            return Json(model);
        }

        // POST: UserController/Delete/5
        [HttpPost]
        public ActionResult Delete([FromBody] JObject json)
        {
            var id = (json.GetValue("id").ToString());
            var result = _context.Users.SingleOrDefault(p => p.id == id);
            _context.Users.Remove(result);
            _context.SaveChanges();
            return Json(result);

        }
        public IActionResult getListUse()
        {
            var result = _context.Users.AsQueryable().
                 Select(d => new
                 {
                     id = d.id,
                     name = d.username
                 }).ToList();
            return Json(result);
        }
    }
}
