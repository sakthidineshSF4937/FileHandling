using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Intrinsics.Arm;
using System.Threading.Tasks;
using System.Reflection;
using System.ComponentModel.DataAnnotations;
using System.IO;
using Microsoft.VisualBasic;


namespace EcommersApplication
{
    public class Operations
    {
        //create a database model
        public static CustomList<ProductDetails> products = new CustomList<ProductDetails>();
        public static CustomList<CustomerDetails> customers = new CustomList<CustomerDetails>();
        public static CustomList<OrderDetails> orders = new CustomList<OrderDetails>();
        public  static Grid<ProductDetails> productGrid=new Grid<ProductDetails>();
        public static Grid<CustomerDetails> customerGrid=new Grid<CustomerDetails>();
        public static Grid<OrderDetails> orderGrid=new Grid<OrderDetails>();

        static CustomerDetails currentLoggedInCustomer;

        public static void DefaultVale()
        {
            products.Add(new ProductDetails("Mobile(Samsung)", 10, 10000, 3));
            products.Add(new ProductDetails("Tablet (Lenovo)", 5, 15000, 2));
            products.Add(new ProductDetails("Camara (Sony)", 3, 20000, 4));
            products.Add(new ProductDetails("iPhone", 5, 50000, 6));
            products.Add(new ProductDetails("Laptop (Lenovo I3)", 3, 40000, 3));
            products.Add(new ProductDetails("HeadPhone (Boat)", 5, 1000, 2));
            products.Add(new ProductDetails("Speakers (Boat)", 4, 500, 2));

            // customers.Add(new CustomerDetails("Ravi", "Chennai", "9885858588", 50000, "ravi@mail.com"));
            // customers.Add(new CustomerDetails("Baskaran", "Chennai", "9888475757", 60000, "baskaran@mail.com"));

            orders.Add(new OrderDetails("CID3001", "PID2001", 20000, DateTime.Now, 2, OrderStatus.Ordered));
            orders.Add(new OrderDetails("CID3002", "PID2003", 40000, DateTime.Now, 2, OrderStatus.Ordered));
             ReadAndWrite<CustomerDetails>.WriteToCSV(orders);
             ReadAndWrite<CustomerDetails>.WriteToCSV(products);
              
            // customers.Add(ReadAndWrite.ReadToCSV<CustomerDetails>());
            // orders.AddRange(ReadAndWrite.ReadToCSV<OrderDetails>());
            // products.AddRange(ReadAndWrite.ReadToCSV<ProductDetails>());
        }
        public static void MainMenu()
        {
            bool flag = true;
            do
            {
                System.Console.WriteLine("*** MAin Menu***");
                //show options 1.Registration 2.Login 3.Exit
                System.Console.WriteLine($"1.Registration \n2.Login \n3.Exit");
                int option = int.Parse(Console.ReadLine());
                switch (option)
                {
                    //get option
                    //call methods
                    case 1:
                        {
                            Registration();
                            break;
                        }
                    case 2:
                        {
                            Login();
                            break;
                        }
                    case 3:
                        {
                            flag = false;
                            System.Console.WriteLine("Exit to Main Menu....");
                            break;
                        }
                }

            } while (flag);

        }

        public static void Registration()
        {
            //get name, city, mobile number, balance
            System.Console.WriteLine("Enter Name:");
            string name = Console.ReadLine();
            System.Console.WriteLine("Enter City");
            string city = Console.ReadLine();
            System.Console.WriteLine("Enter Mobile Number:");
            string mobileNumber = Console.ReadLine();
            System.Console.WriteLine("Enter Ballance");
            double balance = double.Parse(Console.ReadLine());
            System.Console.WriteLine("Enter EmailID");
            string emailID = Console.ReadLine();
            //creat object
            CustomerDetails customer = new(name, city, mobileNumber, balance, emailID);
            //show registration successfull and registration id
            System.Console.WriteLine($"Registration Successful..... ID:{customer.CustomerID}");
            //add the object to list
            customers.Add(customer);
            ReadAndWrite<CustomerDetails>.WriteToCSV(customers);
        }

 

        public static void Login()

        {
            System.Console.WriteLine("*** Login MEnu***");
            //get customer ID
            System.Console.WriteLine("Enter Your customer ID:");
            string customerID = Console.ReadLine().ToUpper();
            //check customer id is present
            bool flag = true;
            // foreach (CustomerDetails customer in customers)        
            // {
            //     if (customer.CustomerID.Equals(customerID))
            //     {
            //         //if present put customer object in globally 
            //         currentLoggedInCustomer = customer;
            //         //call Sub menu
            //         SubMenu();
            //         flag = false;
            //         break;
            //     }
            // }
            if(flag){
             CustomerDetails searchID=Search.BinarySearch(customers,customerID,"CustomerID");
             if(searchID!=null){
             currentLoggedInCustomer = (CustomerDetails)searchID;
             System.Console.WriteLine(currentLoggedInCustomer.CustomerID +"has beeen found ");
            SubMenu();
            flag=false;
            }
            }
            if (flag)
            {
                System.Console.WriteLine("Customer ID not present");
            }
            //if customer id is not present - then show it
        }

        public static void SubMenu()
        {

            bool flag = true;
            do
            {
                System.Console.WriteLine("*** Sub MEnu***");
                /*a.Purchaseb.	OrderHistoryc.	CancelOrderd.	WalletBalancee.	WalletRechargef.	Exit*/
                System.Console.WriteLine("1.Purchase \n2.Order History \n3.Cancel Order \n4.WalletBalance \n5.WalletRecharge \n6.Exit");
                int option = int.Parse(Console.ReadLine());
                switch (option)
                {
                    case 1:
                        {
                            Purchase();
                            break;
                        }
                    case 2:
                        {
                            OrderHistory(OrderStatus.Default);
                            break;
                        }
                    case 3:
                        {
                            CancelOrder();
                            break;
                        }
                    case 4:
                        {
                            WalletBalance();
                            break;
                        }
                    case 5:
                        {
                            WalletRecharge();
                            break;
                        }
                    case 6:
                        {
                            flag = false;
                            System.Console.WriteLine("Exit from sub menu....");
                            break;
                        }
                }



            } while (flag);


        }
        public static void Purchase()
        {
            //System.Console.WriteLine("Purchase");
            //show product list
           productGrid.ShowTable(products);
            // foreach (ProductDetails product in products)
            // {
            //     System.Console.WriteLine($"{product.ProductID} {product.ProductName} {product.Stock} {product.Price} {product.ShippingDuration}");
            // }


            //get product ID
            System.Console.WriteLine("Enter product ID : ");
            string productID = Console.ReadLine().ToUpper();
            //get quantity needed
            System.Console.WriteLine("Enter quantity : ");
            int quantity = Convert.ToInt32(Console.ReadLine());
            //check product ID is valid, If no - show invalid product Id
            bool flag = true;
            ProductDetails ProductObject=(ProductDetails)Search.BinarySearch(products,productID,"ProductID");
              if (ProductObject.ProductID.Equals(productID)){
                 if (ProductObject.Stock >= quantity){
                    //find total amount and add with delivery charge
                       double total = (quantity * ProductObject.Price) + 50;
                       if (total <= currentLoggedInCustomer.WalletBalance){
                        currentLoggedInCustomer.DeductBalance(total);
                        ProductObject.Stock -= quantity;
                         OrderDetails order = new OrderDetails(ProductObject.ProductID, currentLoggedInCustomer.CustomerID,
                           total, DateTime.Now, quantity, OrderStatus.Ordered);
                           System.Console.WriteLine($"Ordered successfully.\nOrder ID : {order.OrderID}");
                           orders.Add(order);
                       }
                         else
                       {
                             System.Console.WriteLine("Insufficient balance");
                      }

                 }else
                   {
                         System.Console.WriteLine("Insufficient quantity");
                    }
                    flag=false;
              }
                     if (flag)
            {
                System.Console.WriteLine("Invalid product ID");
            }
            // foreach (ProductDetails product1 in products)
            // {
            //     if (product1.ProductID.Equals(productID))
            //     {
                    
            //         //if valid ID, then check quantity is available, If no - insufficient quantity
            //         if (product1.Stock >= quantity)
            //         {
            //             //find total amount and add with delivery charge
            //             double total = (quantity * product1.Price) + 50;
            //             //check the user has available balance - If no , show insufficient balance
            //             if (total <= currentLoggedInCustomer.WalletBalance)
            //             {
            //                 //if he has balance, deduct amount from his balance 
            //                 currentLoggedInCustomer.DeductBalance(total);
            //                 //reduce product count
            //                 product1.Stock -= quantity;
            //                 //create order object
            //                 OrderDetails order = new OrderDetails(product1.ProductID, currentLoggedInCustomer.CustomerID,
            //                 total, DateTime.Now, quantity, OrderStatus.Ordered);
            //                 //show order created successfully and order ID
            //                 System.Console.WriteLine($"Ordered successfully.\nOrder ID : {order.OrderID}");
            //                 //add to list
            //                 orders.Add(order);
            //             }
            //             else
            //             {
            //                 System.Console.WriteLine("Insufficient balance");
            //             }

            //         }
            //         else
            //         {
            //             System.Console.WriteLine("Insufficient quantity");
            //         }
            //         flag = false;
            //         break;
            //     }
            // }

        }
        public static bool OrderHistory(OrderStatus orderStatus)
        {
            //System.Console.WriteLine("Order history");
            //show the current logged in users ordered details - if present
            CustomList<OrderDetails> orderHistory=new CustomList<OrderDetails>();
            CustomList<OrderDetails> cancelOrderHistory=new CustomList<OrderDetails>();
            bool flag = true;
            foreach (OrderDetails order in orders)
            {
                // if (order.CustomerID.Equals(currentLoggedInCustomer.CustomerID) && order.Status.Equals(OrderStatus.Ordered)){
                
                 if (order.CustomerID.Equals(currentLoggedInCustomer.CustomerID)){
                    flag = false;
                     //System.Console.WriteLine($"{order.OrderID} {order.ProductID} {order.CustomerID} {order.TotalPrice} {order.PurchaseDate} {order.Quantity} {order.Status}");
                     orderHistory.Add(order);             
                }

            }
            orderGrid.ShowTable(orderHistory);
            // bool flag1=true;
            // foreach (OrderDetails order in orders)
            // {
            //     if (order.CustomerID.Equals(currentLoggedInCustomer.CustomerID) && order.Status.Equals(OrderStatus.Cancelled)){
                
                
            //         flag1 = false;
            //         //System.Console.WriteLine($"{order.OrderID} {order.ProductID} {order.CustomerID} {order.TotalPrice} {order.PurchaseDate} {order.Quantity} {order.Status}");
            //         cancelOrderHistory.Add(order);             
            //     }

            // }
            // orderGrid.ShowTable(cancelOrderHistory);
            if (flag)
            {
                System.Console.WriteLine("No order history...");
            }
            //else show no order history
            return flag;
        }
        public static void CancelOrder()
        {
            //System.Console.WriteLine("Cancel order");
            //show order details of current customer whose order status is ordered. If not present - show no order is history found
           
            if (OrderHistory(OrderStatus.Ordered))
            {
                System.Console.WriteLine("No order available");
            }
            else
            {
                //if present then get order ID
                System.Console.WriteLine("Enter order ID : ");
                string orderID = Console.ReadLine();
                //validate order ID .If not present show invalid order ID
                bool orderCheck = true;

            OrderDetails OrderObject=(OrderDetails)Search.BinarySearch(orders,orderID,"OrderID");
             if(OrderObject!=null){   
             System.Console.WriteLine(orderID+"has beeen found ");
                 if (currentLoggedInCustomer.CustomerID.Equals(OrderObject.CustomerID) && OrderObject.Status.Equals(OrderStatus.Ordered) && OrderObject.OrderID.Equals(orderID))
                    {
                        orderCheck = false;
                        //return order amount to current user wallet balance
                        currentLoggedInCustomer.WalletRecharge(OrderObject.TotalPrice - 50);
                        //change the order status to cancelled
                        OrderObject.Status = OrderStatus.Cancelled;
                      }

                  ProductDetails ProductObject=(ProductDetails)Search.BinarySearch(products,OrderObject.ProductID,"ProductID");
                  ProductObject.Stock+=OrderObject.Quantity;

                       //return the ordered quantity to product stock
                        // foreach(ProductDetails product in products)
                        // // {
                        //     if(OrderObject.ProductID.Equals(product.ProductID))
                        //     {
                        //         product.Stock += OrderObject.Quantity;
                        //         break;
                        //     }
                        // }
                        //show order cancelled successfully
                        System.Console.WriteLine("Order cancelled successfully.");
                     
                    }
                
                if (orderCheck)
                {
                    System.Console.WriteLine("Invalid Order ID");
                }

            }
        }
        public static void WalletBalance()
        {
            //System.Console.WriteLine("Balance details");
            System.Console.WriteLine($"Your current balance is {currentLoggedInCustomer.WalletBalance}");
        }
        public static void WalletRecharge()
        {
            //System.Console.WriteLine("Wallet Recharge");
            //get the amount to be recharged
            System.Console.WriteLine("Enter the amount to be reccharged:");
            double amount = double.Parse(Console.ReadLine());
            //if it is valid amount then add to users current balance and show the balance
            if (amount > 0)
            {
                currentLoggedInCustomer.WalletRecharge(amount);
                System.Console.WriteLine($"Current Balance: {currentLoggedInCustomer.WalletBalance}");

            }
            else
            {
                System.Console.WriteLine("Entered amount is Invalid Amount");
            }
            //else show invalid amount

        }

      public static void FileCheck(){
            if(!Directory.Exists("SavedData")){
                System.Console.WriteLine("Creating Folder");
                Directory.CreateDirectory("SavedData");
            }
            else{
                System.Console.WriteLine("Folder Exists");
            }
            if(!File.Exists("SavedData/Data.csv")){
                System.Console.WriteLine("Creating File");
                File.Create("SavedData/Data.csv");
            }
            else{
                System.Console.WriteLine("File Exists.");
            }
            

      }
      
     
    }

}