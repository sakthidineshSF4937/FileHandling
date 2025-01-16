using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoodAPI.Models;
using Microsoft.AspNetCore.Mvc;
using FoodAPI.Controller;

namespace FoodAPI.Controller
{
    [ApiController]
    [Route("orders")]
    public class OrderControllers:ControllerBase
    {
        
        [HttpGet]
        public IActionResult GetOrders(){
            return Ok(AppData.orders);
        }
     [HttpPost]   
    public IActionResult AddOrders([FromBody] OrderDetails order ){
      
      order.OrderID=AppData.orders.Count+1;
      AppData.orders.Add(order);
      return Ok(order);

    }
    [HttpPut("{orderID}")]
    public IActionResult UpdateOrders(int orderID,[FromBody] OrderDetails order)
        {
            var orderOld=AppData.orders.Find(order=>order.OrderID==orderID && order.OrderStatus==OrderStatus.orderd);
            orderOld.OrderStatus=order.OrderStatus;
            foreach(var item in AppData.items)
            {
                if(item.OrderID==orderOld.OrderID )
                {
                    Console.WriteLine("Item found in order list");
                    foreach(var food in AppData.foods)
                    {
                        if(food.FoodID==item.FoodID)
                        {
                            food.QuantityAvailable+=item.PurchaseCount;
                            Console.WriteLine("Updated the quantity");
                        }
                    }
                }
            }
            return Ok();
        }
 
    

    }
}