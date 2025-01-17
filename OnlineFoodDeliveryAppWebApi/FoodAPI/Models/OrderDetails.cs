using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodAPI.Models
{
   
   public enum OrderStatus{
    select,Initiated,orderd,cancelled
   }
   
    public class OrderDetails
    {
     
        public int OrderID{get;set;}
        public int CustomerID{get;set;}
        public int TotalPrice{get;set;}
        public string DateOfOrder{get;set;}
        public string OrderStatus{get;set;}
    }
}