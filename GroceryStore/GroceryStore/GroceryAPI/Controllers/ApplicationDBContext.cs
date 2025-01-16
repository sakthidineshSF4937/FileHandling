using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroceryAPI.Models;
namespace GroceryAPI.Controllers
{
    public static class AppData
   {

        public static List<UserInfo> _usersList = new List<UserInfo>();  
        public static List<BookingDetails> _bookingsList = new List<BookingDetails>();
        public static List<OrderDetails> _ordersList = new List<OrderDetails>();
        public static List<ProductDetails> _productsList = new List<ProductDetails>();
    }
}