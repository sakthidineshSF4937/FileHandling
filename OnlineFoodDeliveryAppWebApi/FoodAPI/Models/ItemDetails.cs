using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodAPI.Models
{
    public class ItemDetails
    {

        public int ItemID{get;set;}
        public int OrderID{get;set;}
        public int FoodID{get;set;}
        public int PurchaseCount{get;set;}
        public int PriceOrder{get;set;}

    }
}