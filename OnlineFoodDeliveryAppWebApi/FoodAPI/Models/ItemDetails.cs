using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodAPI.Models
{
    public class ItemDetails
    {
        // private static int s_itemID=4000;
        public int ItemID{get;set;}
        public int OrderID{get;set;}
        public int FoodID{get;set;}
        public int PurchaseCount{get;set;}
        public int PriceOrder{get;set;}
        // public ItemDetails(){
        //    ItemID=$"ITID{++s_itemID}";  
        // }
        // public ItemDetails(string orderID, string foodID, double purchaseCount, double priceOrder)
        // {
        //     ItemID=$"ITID{++s_itemID}";
        //     OrderID = orderID;
        //     FoodID = foodID;
        //     PurchaseCount = purchaseCount;
        //     PriceOrder = priceOrder;
        // }
    }
}