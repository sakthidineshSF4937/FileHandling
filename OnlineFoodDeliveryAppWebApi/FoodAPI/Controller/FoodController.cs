using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoodAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace FoodAPI.Controller
{
    [ApiController]
    [Route("Food")]
    public class FoodController:ControllerBase
    {
      

      [HttpGet]
      public IActionResult GetFoods(){
        System.Console.WriteLine("hello from getfoods");
        return Ok(AppData.foods);
      }

      [HttpGet("{foodID}")]
      public IActionResult GetIndividualFoods(int foodID)
      {
        var food=AppData.foods.FirstOrDefault(food=>food.FoodID==foodID);
        if(food==null)
        {
        return NotFound();
        }
        return Ok();
      }


      [HttpPost]
      public IActionResult AddFood([FromBody] FoodDetails food)
      {
          food.FoodID=2000+AppData.foods.Count;
            AppData.foods.Add(food);
            return Ok();

      }
 [HttpPut("{foodID}")]
public IActionResult UpdateFood(int foodID,[FromBody] FoodDetails food)
        {
            var foodOld=AppData.foods.Find(food=>food.FoodID==foodID);
            if(foodOld==null)
            {
                return NotFound();
            }
            foodOld.FoodID=food.FoodID;
            foodOld.FoodName=food.FoodName;
            foodOld.PricePerQuantity=food.PricePerQuantity;
            foodOld.QuantityAvailable=food.QuantityAvailable;
            return Ok();
        }
        

     [HttpPut("{foodID}/{count}")]
        public IActionResult UpdateCount(int foodID,int count)
        {
            var food=AppData.foods.Find(food=>food.FoodID==foodID);
            if(food==null)
            {
                return NotFound();
            }
            food.QuantityAvailable-=count;
            return Ok();
        }
        [HttpDelete("{foodID}")]
        public IActionResult Deletefood(int foodID)
        {
        var food=AppData.foods.FirstOrDefault(product=>product.FoodID==foodID);
            if(food==null)
            {
                return NotFound();
            }
            AppData.foods.Remove(food);
            return Ok();
        }       
    }
}