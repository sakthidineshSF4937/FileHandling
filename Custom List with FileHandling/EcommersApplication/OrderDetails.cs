using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommersApplication
{
    public class OrderDetails
    {
//         •	OrderID (Auto Increment – OID1001)
// •	CustomerID
// •	ProductID
// •	TotalPrice 
// •	PurchaseDate
// •	Quantity
// •	OrderStatus – (Enum- Default, Ordered, Cancelled)

        private static int s_orderID = 1001;
        public string OrderID{get; set;}
        public string ProductID{get;set;}
        public string CustomerID{get;set;}
        public double TotalPrice{get;set;}
        public DateTime PurchaseDate{get;set;}
        public int Quantity{get;set;}
        public OrderStatus Status{get;set;}

        //default Constructor
        public OrderDetails()
        {
             OrderID = $"OID {++s_orderID}";
        }

        //parameterized
        public OrderDetails(string productID, string customerID, double totalPrice, DateTime purchaseDate, int quantity, OrderStatus status)
        {
            OrderID = $"OID {++s_orderID}";
            ProductID = productID;
            CustomerID = customerID;
            TotalPrice = totalPrice;
            PurchaseDate = purchaseDate;
            Quantity = quantity;
            Status = status;
        }

    }
}