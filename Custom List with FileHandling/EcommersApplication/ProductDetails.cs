using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommersApplication
{
    public class ProductDetails
    {
//         •	ProductID (Auto Increment – PID2001)
// •	ProductName
// •	Stock
// •	Price 
// •	ShippingDuration

        private static int s_productID = 2001;
        public string ProductID{get; set;}
        public string ProductName{get; set;}
        public int Stock{get; set;}
        public int Price{get;set;}
        public double ShippingDuration{get;set;}

        //default Constructor
        public ProductDetails()
        {
        ProductID = $"PID{++s_productID}";
        }

        //Parameterized constructor
        public ProductDetails(string productName, int stock, int price, double shippingDuration)
        {
            ProductID = $"PID{++s_productID}";
            ProductName = productName;
            Stock = stock;
            Price = price;
            ShippingDuration = shippingDuration;
        }
    }
}