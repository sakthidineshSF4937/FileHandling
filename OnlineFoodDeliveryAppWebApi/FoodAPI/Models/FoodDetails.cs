using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodAPI.Models
{
    public class FoodDetails
    {
    //   private static int s_foodID=2000;
        public int FoodID{get;set;}
        public string FoodName{get;set;}
        public int PricePerQuantity{get;set;}
        public int QuantityAvailable{get;set;}

        // public FoodDetails(){
        //     FoodID=$"FID{++s_foodID}";
        // }

        // public FoodDetails(string foodName, double pricePerQuantity,double quantityAvailable)
        // {
        //     FoodID=$"FID{++s_foodID}";
        //     FoodName = foodName;
        //     PricePerQuantity = pricePerQuantity;
        //     QuantityAvailable = quantityAvailable;
        // }
        

               

    }
}