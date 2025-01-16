using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroceryAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GroceryAPI.Controllers
{
    [ApiController]
    [Route("booking")]
    public class BookingController : ControllerBase
    {

        [HttpGet]
        public IActionResult GetBookings(){
            return Ok(AppData._bookingsList);
        }

    
        [HttpPost]
        public IActionResult AddBookings([FromBody] BookingDetails booking)
        {
            booking.BookingID=AppData._bookingsList.Count+1;
            AppData._bookingsList.Add(booking);
            return Ok(booking);
        }
        [HttpPut("{bookingID}")]
        public IActionResult UpdateBookings(int bookingID,[FromBody] BookingDetails booking)
        {
            var bookingOld=AppData._bookingsList.Find(booking=>booking.BookingID==bookingID && booking.BookingStatus=="Booked");
            bookingOld.BookingStatus=booking.BookingStatus;
            foreach(var item in AppData._ordersList)
            {
                if(item.BookingID==bookingOld.BookingID )
                {
                    Console.WriteLine("Item found in order list");
                    foreach(var product in AppData._productsList)
                    {
                        if(product.ProductID==item.ProductID)
                        {
                            product.QuantityAvailable+=item.PurchaseCount;
                            Console.WriteLine("Updated the quantity");
                        }
                    }
                }
            }
            return Ok();
        }
        
    }
}