using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroceryAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GroceryAPI.Controllers
{
    [ApiController]
    [Route("product")]
    public class ProductController : ControllerBase
    {
        
        [HttpGet]
        public IActionResult Getproducts(){
            return Ok(AppData._productsList);
        }
        [HttpGet("{productID}")]
        public IActionResult GetIndividualProduct(int productID)
        {
            var product=AppData._productsList.FirstOrDefault(product=>product.ProductID==productID);
            if(product==null)
            {
                return NotFound();
            }
            return Ok(product);
        }
        [HttpPost]
        public IActionResult AddProduct([FromBody] ProductDetails product)
        {
            product.ProductID=AppData._productsList.Count+1;
            AppData._productsList.Add(product);
            return Ok();
        }
        [HttpPut("{productID}")]
        public IActionResult UpdateProduct(int productID,[FromBody] ProductDetails product)
        {
            var productOld=AppData._productsList.Find(product=>product.ProductID==productID);
            if(productOld==null)
            {
                return NotFound();
            }
            productOld.ProductID=product.ProductID;
            productOld.ProductName=product.ProductName;
            productOld.PricePerQuantity=product.PricePerQuantity;
            productOld.QuantityAvailable=product.QuantityAvailable;
            productOld.PurchaseDate=product.PurchaseDate;
            productOld.ExpiryDate=product.ExpiryDate;
            product.Image=product.Image;
            return Ok();
        }
        [HttpPut("{productID}/{count}")]
        public IActionResult UpdateCount(int productID,int count)
        {
            var product=AppData._productsList.Find(product=>product.ProductID==productID);
            if(product==null)
            {
                return NotFound();
            }
            product.QuantityAvailable-=count;
            return Ok();
        }
        [HttpDelete("{productID}")]
        public IActionResult DeleteBook(int productID)
        {
        var product=AppData._productsList.FirstOrDefault(product=>product.ProductID==productID);
            if(product==null)
            {
                return NotFound();
            }
            AppData._productsList.Remove(product);
            return Ok();
        }
        
    }
}