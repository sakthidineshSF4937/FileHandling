using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EcommersApplication
{
    public class CustomerDetails
    {
//         •	CustomerID (Auto Increment -CID3001)
// •	CustomerName
// •	City
// •	MobileNumber
// •	WalletBalance
// •	EmailID

        private static int s_customerID = 3000;
        public string CustomerID{get;set;}
        public string Name{get;set;}
        public string City{get;set;}
        public string MobileNumber{get;set;}
        private double _walletBalance=0;
        public double WalletBalance{get{return _walletBalance;}set{
            _walletBalance=value;
        }} 
        public string EmailID{get;set;}

        //default Constructor
        public CustomerDetails()
        {
            CustomerID = $"CID{++s_customerID}";
            Name = "";
            EmailID = "";
        }

        //parameterized Constructor
        public CustomerDetails(string name, string city, string mobileNumber, double walletBalance, string emailID)
        {
            CustomerID = $"CID{++s_customerID}";
            Name = name;
            City = city;
            MobileNumber = mobileNumber;
            _walletBalance = walletBalance;
            EmailID = emailID;
        }

        public void WalletRecharge(double amount)
        {
            _walletBalance += amount;
        }
        public void DeductBalance(double amount)
        {
            _walletBalance -= amount;
        }


    }
}