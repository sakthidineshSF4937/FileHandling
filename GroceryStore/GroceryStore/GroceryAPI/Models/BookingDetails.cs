using System;



namespace GroceryAPI.Models
{
    public class BookingDetails
    {

        public int BookingID {get;set;}
        public int CustomerID {get;set;}
        public int TotalPrice  {get;set;}
        public DateTime DateOfBooking  {get;set;}
        public string BookingStatus  {get;set;}

    }
}