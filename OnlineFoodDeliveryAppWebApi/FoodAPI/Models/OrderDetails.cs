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
     
        // private static int s_orderID=3000;
        public int OrderID{get;set;}
        public int CustomerID{get;set;}
        public int TotalPrice{get;set;}
        public DateTime DateOfOrder{get;set;}
        public OrderStatus OrderStatus{get;set;}
    
//         public OrderDetails(){

//  OrderID=$"OID{++s_orderID}";
//         }
// //parameterized Constructor
//         public OrderDetails(string customerID, double totalPrice, DateTime dateOfOrder, OrderStatus orderStatus)
//         {
//             OrderID=$"OID{++s_orderID}";
//             CustomerID = customerID;
//             TotalPrice = totalPrice;
//             DateOfOrder = dateOfOrder;
//             OrderStatus = orderStatus;
//         }


    }
}