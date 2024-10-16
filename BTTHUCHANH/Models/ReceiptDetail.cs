﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace BTTHUCHANH.Models
{
    [Table("ReceiptDetail")]
    public class ReceiptDetail
    {
        [Key]
        public string id { get; set; }
        public string idProduct { get; set; }
        public string quantity { get; set; }
    }
}
