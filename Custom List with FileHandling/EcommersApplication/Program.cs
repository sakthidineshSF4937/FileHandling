using System;
namespace EcommersApplication;

class Program
{
    public static void Main(string[] args)
    {
        Operations.FileCheck();
        Operations.DefaultVale();

        Operations.customers=ReadAndWrite<CustomerDetails>.ReadToCSV();
        Operations.orders=ReadAndWrite<OrderDetails>.ReadToCSV();
        Operations.products=ReadAndWrite<ProductDetails>.ReadToCSV();
        foreach(CustomerDetails customer in Operations.customers){
            System.Console.WriteLine(customer.CustomerID);
        }
        System.Console.WriteLine();
        Operations.MainMenu();


        
    }
}