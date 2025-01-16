using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodAPI.Models
{
    public interface IBalance
    {
        public  int WalletBalance{get;set;}

        public string WalletRecharge(int amount);

        public string DeductBalance(int amount);
    }
}