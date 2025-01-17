using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FoodAPI.Models;

namespace FoodAPI.Controller
{
    [ApiController]
    [Route("users")]
    public class CustomerController:ControllerBase
    {
        
       [HttpGet]
        public IActionResult GetUser(){
            return Ok(AppData.customers);
        }

        [HttpGet("{customerID}")]
        public IActionResult GetIndividualUser(int customerID)
        {
            var customer=AppData.customers.FirstOrDefault(customer=>customer.CustomerID==customerID);
            if(customer==null)
            {
                return NotFound();
            }
            return Ok(customer);
        }
            
[HttpPost]
public IActionResult AddUserDetails([FromBody] CustomerDetails customer)
{
    customer.CustomerID = AppData.customers.Count + 1;
    AppData.customers.Add(customer);
    return Ok();
}

        
        // public IActionResult AddUserDetails([FromBody] CustomerDetails customer)
        // {
        //     customer.CustomerID=AppData.customers.Count+1;
        //     AppData.customers.Add(customer);
        //     return Ok();
        // }
        
        [HttpPut("{customerID}/{amount}")]
        public IActionResult updateAmount(int customerID,int amount)
        {
            var user=AppData.customers.FirstOrDefault(user=>user.CustomerID==customerID);
            if(user==null)
            {
                return NotFound();
            }
            user.WalletBalance=amount;
            return Ok(user);
        }
    }
}