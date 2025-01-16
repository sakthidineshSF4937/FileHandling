using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GroceryAPI.Models
{
    public class OrderDetails
    {
        public int OrderID {get;set;}
        public int BookingID {get;set;}
        public int ProductID  {get;set;}
        public string ProductName  {get;set;}
        public int PurchaseCount  {get;set;}
        public int PriceOfOrder  {get;set;}
    }
}