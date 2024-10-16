using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace BTTHUCHANH.Models
{
    [Table("Product")]
    public class Product
    {
        [Key]
        public string id { get; set; }
        public string CatalogId {  get; set; }
        public string ProductCode {  get; set; }
        public string ProductName {  get; set; }
        public string Picture {  get; set; }
        public double UnitPrice { get; set; }
    }
}
