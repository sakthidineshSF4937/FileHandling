using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using FoodAPI.Controller;
using FoodAPI.Models;

namespace FoodAPI.Controller
{
    [ApiController]
    [Route("item")]
    public class ItemController:ControllerBase
    {
        [HttpGet]
        public IActionResult GetOrder(){
            return Ok(AppData.orders);
        }


        [HttpPost]
        public IActionResult AddItem([FromBody] ItemDetails item)
       {
           item.ItemID=AppData.items.Count+1;
           AppData.items.Add(item);
           return Ok(item);
       }

    //    [HttpPut("{itemID}")]
    //    public IActionResult updateItem(int itemID,[FromBody] ItemDetails item)
    //    {
    //     var item1=AppData.items.Find(item1=>item1.ItemID==itemID);
    //     if(item1!=null){

    //     }

    //    }
       
        [HttpPut("{itemID}")]
        public IActionResult UpdateItem(int itemID,[FromBody] ItemDetails item)
        {
            var itemsOld=AppData.items.Find(item=>item.ItemID==itemID);
            if(itemsOld==null)
            {
                return NotFound();
            }
            itemsOld.ItemID=item.ItemID;
            itemsOld.FoodID=item.FoodID;
            itemsOld.PriceOrder=item.PriceOrder;
            itemsOld.PurchaseCount=item.PurchaseCount;
            itemsOld.OrderID=item.OrderID;
            return Ok();
        }

    }
}