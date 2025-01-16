using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroceryAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GroceryAPI.Controllers
{
    [ApiController]
    [Route("Order")]
    public class OrderController : ControllerBase
    {
        
        [HttpGet]
        public IActionResult GetOrder(){
            return Ok(AppData._ordersList);
        }
        [HttpGet("{bookingID}")]
        public List<OrderDetails> GetOrdersByID(int bookingID){
            List<OrderDetails> temporary=new List<OrderDetails>();
            AppData._ordersList.ToList().ForEach((value)=>{
                if(value.BookingID==bookingID){
                    temporary.Add(value);
                }
                });
            return temporary;
        }
    
        [HttpPost]
        public IActionResult AddOrders([FromBody] OrderDetails order)
        {
            order.OrderID=AppData._ordersList.Count+1;
            AppData._ordersList.Add(order);
            return Ok();
        }
    }
}