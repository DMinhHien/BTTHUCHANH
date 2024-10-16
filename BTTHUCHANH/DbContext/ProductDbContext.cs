using BTTHUCHANH.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BTTHUCHANH.DBContext
{
    public class ProductDbContext : DbContext
    {

        public ProductDbContext(DbContextOptions dbContextOption): base (dbContextOption)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<UserrManage> Users { get; set; }
        public DbSet<Receipt> Receipts { get; set; }
        public DbSet<ReceiptDetail> ReceiptDetail {  get; set; }


    }
}
