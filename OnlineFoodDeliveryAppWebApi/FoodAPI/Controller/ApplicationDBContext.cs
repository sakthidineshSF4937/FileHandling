using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoodAPI.Controller;
using FoodAPI.Models;

namespace FoodAPI.Controller
{
    public class AppData
    {
        public static int count=2000;
        public static int ordercount=3000;

        public static List<CustomerDetails> customers = new List<CustomerDetails>();

        public static List<FoodDetails> foods = new List<FoodDetails>{
          new FoodDetails{
           FoodID= count++,
           FoodName="Chicken Briyani 1kg",
           PricePerQuantity=100,
           QuantityAvailable=12},
        new FoodDetails{
           FoodID= count++,
           FoodName="MuttonBriyani 1kg",
           PricePerQuantity=150,
           QuantityAvailable=12},
           new FoodDetails{
           FoodID= count++,
           FoodName="Veg Full Meals",
           PricePerQuantity=80,
           QuantityAvailable=30},
           new FoodDetails{
           FoodID= count++,
           FoodName="Noodles",
           PricePerQuantity=100,
           QuantityAvailable=40},
           new FoodDetails{
            FoodID=count++,
            FoodName="DOSA",
            PricePerQuantity=40,
            QuantityAvailable=40
           },
           new FoodDetails{
            FoodID=count++,
            FoodName="Idly(2peices)",
            PricePerQuantity=20,
            QuantityAvailable=50
           },
            new FoodDetails{
            FoodID=count++,
            FoodName="Pongal",
            PricePerQuantity=40,
            QuantityAvailable=20
           },
            new FoodDetails{
            FoodID=count++,
            FoodName="LemonRice",
            PricePerQuantity=50,
            QuantityAvailable=30
           },
            new FoodDetails{
            FoodID=count++,
            FoodName="VegPulav",
            PricePerQuantity=120,
            QuantityAvailable=30
           },
           new FoodDetails{
            FoodID=count++,
            FoodName="Chicken65(200gms)",
            PricePerQuantity=75,
            QuantityAvailable=30
           },

        };

        public static List<OrderDetails> orders = new List<OrderDetails>{
           new OrderDetails
           {
            OrderID=ordercount++,
            CustomerID=1001,
            TotalPrice=580,
            DateOfOrder="26/11/2022",
            OrderStatus="booked"
           },
            new OrderDetails
           {
            OrderID=ordercount++,
            CustomerID=1002,
            TotalPrice=870,
            DateOfOrder="26/11/2022",
            OrderStatus="booked"
           },
            new OrderDetails
           {
            OrderID=ordercount++,
            CustomerID=1001,
            TotalPrice=820,
            DateOfOrder="26/11/2022",
            OrderStatus="Cancelled"
           }
        };

        public static List<ItemDetails> items = new List<ItemDetails>();
  
         
       
    }


}