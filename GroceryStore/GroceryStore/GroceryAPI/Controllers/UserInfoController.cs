using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroceryAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GroceryAPI.Controllers
{
    [ApiController]
    [Route("users")]
    public class UserInfoController : ControllerBase
    {
        
        [HttpGet]
        public IActionResult GetUser(){
            return Ok(AppData._usersList);
        }

        [HttpGet("{userID}")]
        public IActionResult GetIndividualUser(int userID)
        {
            var user=AppData._usersList.FirstOrDefault(user=>user.UserID==userID);
            if(user==null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult AddUserDetails([FromBody] UserInfo user)
        {
            user.UserID=AppData._usersList.Count+1;
            AppData._usersList.Add(user);
            return Ok();
        }
        
        [HttpPut("{userID}/{amount}")]
        public IActionResult UpdateCount(int userID,int amount)
        {
            var user=AppData._usersList.FirstOrDefault(user=>user.UserID==userID);
            if(user==null)
            {
                return NotFound();
            }
            user.Amount=amount;
            return Ok(user);
        }
        
    }
}