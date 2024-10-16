using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BTTHUCHANH.Models
{
    [Table("Receipt")]
    public class Cart
    {
        [Key]
        public string id { get; set; }
        public string userId { get; set; }
    }
}
