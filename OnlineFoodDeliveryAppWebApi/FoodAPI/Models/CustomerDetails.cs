using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodAPI.Models
{
    public class CustomerDetails:PersonalDetails,IBalance
    {
        // private static int s_customerID=1000;
        private static int _balance;
        public int CustomerID{get;set;}
        public int WalletBalance { get; set; }

        // public CustomerDetails(double walletBalance,string name,string fathername,Gender gender,string mobile,DateTime dOB,string mailID,string location)
        // {
        //     CustomerID=$"CID{++s_customerID}";
        //     WalletBalance=walletBalance;
        //     Name=name;
        //     FatherName=fathername;
        //     Gender=gender;
        //     Mobile=mobile;
        //     DOB=dOB;
        //     MailID=mailID;
        //     Location=location;
        // }
// public CustomerDetails(){
//        CustomerID=$"CID{++s_customerID}";
// }

        public string WalletRecharge (int amount){
             WalletBalance+=amount;
             return $"Recharged Sucessfully. Current Balance is {WalletBalance}";
        }
        public string DeductBalance (int amount )

        {
         WalletBalance-=amount;
         return $"Amount Deducted.Current Balance is {WalletBalance}";

        }
        public string ShowWalletBalance(){
            return $"Current Balance is {WalletBalance}";
        }
    }
}