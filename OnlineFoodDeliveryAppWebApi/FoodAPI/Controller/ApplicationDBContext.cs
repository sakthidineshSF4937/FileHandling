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
        
        public static List<CustomerDetails> customers = new List<CustomerDetails>();

        public static List<FoodDetails> foods = new List<FoodDetails>();

        public static List<OrderDetails> orders = new List<OrderDetails>();

        public static List<ItemDetails> items = new List<ItemDetails>();
  
       
    }


}