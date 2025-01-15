let orderIDAutoIncrement=1001;
let productDetailsAutoIncrement=2001;
let CustomerIDAutoIncrement=3001;

enum orderStatus{
    Default='Default',
    Ordered='Ordered',
    Cancelled='Cancelled'
}

class OrderDetails{
    OrderID:string;
    CustomerID:string;
    ProductID:string;
    TotalPrice:number;
    PurchaseDate:Date;
    Quantity:number;
    Status:orderStatus;
    constructor(customerID:string,productID:string,totalPrice:number,purchaseDate:Date,quantity:number,status:orderStatus){
        this.OrderID="OID"+orderIDAutoIncrement++;
        this.CustomerID=customerID;
        this.ProductID=productID;
        this.TotalPrice=totalPrice;
        this.PurchaseDate=purchaseDate;
        this.Quantity=quantity;
        this.Status=status;
    }
}

class ProductDetails{

         ProductID:string;
         ProductName:string;
         Stock:number;
         Price:number;
         ShippingDuration:number;
         
         constructor(productName:string,stock:number,price:number,shippingDuration :number){
            this.ProductID="PID"+productDetailsAutoIncrement++;
            this.ProductName=productName;
            this.Stock=stock;
            this.Price=price;
            this.ShippingDuration=shippingDuration;

         }
        
}
class CustomerDetails{
 
    CustomerID:string;
    CustomerName:string;
    City:string;
    MobileNumber:string;
    WalletBalance:number=0;
    EmailID:string;
    Password:string;

    constructor(customerName:string,city:string,mobileNumber:string,emailID:string,password:string){
        this.CustomerID="CID"+CustomerIDAutoIncrement++;
        this.CustomerName=customerName;
        this.City=city;
        this.MobileNumber=mobileNumber;
        
        this.EmailID=emailID;
        this.Password=password;
    }

    public WalletRecharge(amount:number):void{
      this.WalletBalance+=amount;
    }

    public DeductBalance(amount:number):void{
        if(amount<=this.WalletBalance){
            this.WalletBalance-=amount;
    }
    else{
        alert("Insufficient Balance")
    }

}
}


let CustomerDetailsList:Array<CustomerDetails>=new Array<CustomerDetails>();
let ProductDetailsList:Array<ProductDetails>=new Array<ProductDetails>();
let OrderDetailsList:Array<OrderDetails>=new Array<OrderDetails>();



CustomerDetailsList.push(new CustomerDetails("Ravi","Chennai","938398398983","Ravi@gmail.com","ravi@123"));
CustomerDetailsList.push(new CustomerDetails("Baskaran","Chennai","9484984787","baskaran@gmail.com","bas@123"))


ProductDetailsList.push(new ProductDetails("Mobile(Samsung)",10,1000,3));
ProductDetailsList.push(new ProductDetails("Camera(Sony)",3,20000,4));
ProductDetailsList.push(new ProductDetails("Tablet(Lenovo)",5,15000,2));
ProductDetailsList.push(new ProductDetails("Iphone",5,50000,6));
ProductDetailsList.push(new ProductDetails("Laptop(LenovoI3)",3,40000,3));
ProductDetailsList.push(new ProductDetails("Headphone(Boat)",5,1000,2));
ProductDetailsList.push(new ProductDetails("Speakers(Boat)",4,500,2));





OrderDetailsList.push(new OrderDetails("CID3001","PID2001",20000,new Date(Date.now()),2,orderStatus.Ordered))
OrderDetailsList.push(new OrderDetails("CID3001","PID2001",20000,new Date(Date.now()),2,orderStatus.Ordered))

// OrderDetailsList.push(new OrderDetails("OID1001", "CID3001", "PID2001", 20000, new Date(Date.now()), 2, orderStatus.Ordered));
// OrderDetailsList.push(new OrderDetails("OID1002", "CID3002", "PID2002", 25000, new Date(Date.now()), 3, orderStatus.Cancelled));


var signInForm=document.getElementById("signIn") as HTMLDivElement;
var signUpForm=document.getElementById("signup") as HTMLDivElement;
var signInButton=document.getElementById("signInButton") as HTMLButtonElement;
var signUpButton=document.getElementById("signUpButton") as HTMLButtonElement;

function signIn():void{
      signInForm.style.display="block";
      signUpForm.style.display="none";
      signInButton.style.background="orange";
      signUpButton.style.background="none";   
}




function signUp():void{
  signInForm.style.display="none";
  signUpForm.style.display="block";
  signInButton.style.background="none";
  signUpButton.style.background="orange";

}


async function signUpSubmit(event){
   event.preventDefault();

   var name=document.getElementById("name") as HTMLInputElement;
   var email=document.getElementById("email") as HTMLInputElement;
   var password=document.getElementById("password") as HTMLInputElement;
   var confirmPassword=document.getElementById("cpassword") as HTMLInputElement;
   var phone=document.getElementById("phone") as HTMLInputElement;
   var city=document.getElementById("city") as HTMLInputElement;
   var wallletBalance=document.getElementById("walletbalance") as HTMLInputElement;

   var isvalid:boolean=true;
   CustomerDetailsList.forEach((val)=>{
    if(val.EmailID.toLowerCase()==email.value.toLowerCase()){
            alert("you already have an ID.please sign in")
            isvalid=false;
    }
    
});

    if(isvalid){
        let customer:CustomerDetails=new CustomerDetails(name.value,city.value,phone.value,email.value,password.value);
        CustomerDetailsList.push(customer);
        alert("Your CustomerID is:"+customer.CustomerID);
        isvalid=false;
    }
    else{
        var i=document.getElementById("signup") as HTMLDivElement;
        i.style.border="2px solid red"
    }


}





let currentUser:CustomerDetails;


async function signInSubmit(event) {
    event.preventDefault();
    var email = document.getElementById("email1") as HTMLInputElement;
    var password = document.getElementById("password2") as HTMLInputElement; // Corrected to password2
    var isvalid: boolean = false;

    CustomerDetailsList.forEach((val) => {
        if (
            val.EmailID.toLowerCase() === email.value.toLowerCase() &&
            val.Password === password.value // Password case sensitivity retained
        ) {
            var a = document.getElementById("box") as HTMLDivElement;
            a.style.display = "none";
            // Optionally show a new menu or welcome screen
            alert("Sign-in successful!");
            isvalid = true;
            var b = document.getElementById("menu") as HTMLDivElement;
            b.style.display = "block";
            isvalid = false;
            currentUser = val;
            home();
            email.value = "";
            password.value = "";
        }
    });

    if (isvalid) {
        alert("Invalid Email or Password");
    }
}
var homePage = document.getElementById("homepage") as HTMLDivElement;
var itemPage = document.getElementById("itemPage") as HTMLDivElement;
var purchasePage = document.getElementById("purchasePage") as HTMLDivElement;
var WalletRechargePage = document.getElementById("walletRechargePage") as HTMLDivElement;
var orderPage = document.getElementById("orderHistoryPage") as HTMLDivElement;
var walletBalancePage=document.getElementById("walletBalancePage") as HTMLDivElement;
async function home() {
     displayNone();
    homePage.style.display = "block";
    var welcome = document.getElementById("welcome") as HTMLHeadingElement;
    welcome.innerHTML = "Welcome " + currentUser.CustomerName;
}
async function displayNone() {
    homePage.style.display = "none";
    itemPage.style.display = "none";
    purchasePage.style.display = "none";
    WalletRechargePage.style.display = "none";
    orderPage.style.display = "none";
    walletBalancePage.style.display="none";
    (document.getElementById("addEditProductForm") as HTMLDivElement).style.display = "none";
}

async function showitems() {
    displayNone();
    itemPage.style.display = "block";
    var table = document.getElementById("itemTable") as HTMLTableElement;
    var len = table.getElementsByTagName("tr").length;
    if (table.hasChildNodes()) {
        for (var i = len - 1; i >= 1; i--) {
            table.removeChild(table.children[i]);
        }
    }
    ProductDetailsList.forEach((product) => {
        var row = document.createElement("tr") as HTMLTableRowElement;
        row.innerHTML = `<td>${product.ProductID} </td>  <td> ${product.ProductName} </td> <td> ${product.Stock} </td> <td>${product.Price} </td> 
        <td>${product.ShippingDuration} </td>
        <td>
            <button onclick="editProduct('${product.ProductID}')">Edit</button>
            <button onclick="deleteItem('${product.ProductID}')">Delete</button>
        </td>`;
        table.appendChild(row);
    });
}

async function Purchase() {
    displayNone();
    purchasePage.style.display = "block";
    var purchaseTable = document.getElementById("purchaseTable") as HTMLTableElement;
    var len = purchaseTable.getElementsByTagName("tr").length;
    if (purchaseTable.hasChildNodes()) {
        for (var i = len - 1; i >= 1; i--) {
            purchaseTable.removeChild(purchaseTable.children[i]);
        }
    }

    ProductDetailsList.forEach((product) => {
        var row = document.createElement("tr") as HTMLTableRowElement;
        row.innerHTML = `<td>${product.ProductID} </td>  <td> ${product.ProductName} </td> <td> ${product.Stock} </td> <td>${product.Price} </td> 
        <td>${product.Price} </td>
        <td>
            <button onclick="buy('${product.ProductID}')">Buy</button>
        </td>`;
        purchaseTable.appendChild(row);
    });
}

async function buy(productID: string) {
    const product = ProductDetailsList.find(product => product.ProductID === productID);
    if (product) 
    {
        let countValue = prompt("Please enter your count:", "0");
        var count:number = Number(countValue);
        if(product.Stock>count)
        {                
                if (currentUser.WalletBalance >= product.Price) 
                {               
                    product.Stock -= Number(count);
                    currentUser.WalletBalance -= product.Price;
                    OrderDetailsList.push(new OrderDetails(currentUser.CustomerID,product.ProductID,product.Price, new Date(Date.now()),count,orderStatus.Ordered));
                    alert(`You have successfully purchased ${product.ProductName}. Order ID is ${OrderDetailsList[OrderDetailsList.length - 1].OrderID}`);
                    // order();
                }
                else 
                {
                    alert("Insufficient balance to make this purchase.");
                }
        }
        else
        {
            alert("Product is out of stock.");
        }
    } 
    else 
    {
        alert("Product not found.");
    }
}
async function order() {
    displayNone();
    orderPage.style.display = "block";
    var orderTable = document.getElementById("orderTable") as HTMLTableElement;
    var len = orderTable.getElementsByTagName("tr").length;
    if (orderTable.hasChildNodes()) {
        for (var i = len - 1; i >= 1; i--) {
            orderTable.removeChild(orderTable.children[i]);
        }
    }

    OrderDetailsList.forEach((order) => {
        if (order.CustomerID == currentUser.CustomerID) {
            var row = document.createElement("tr") as HTMLTableRowElement;
            row.innerHTML= `<td>${order.OrderID} <td>${order.CustomerID}</td> <td>${order.ProductID}</td> <td>${order.TotalPrice}</td> <td>${order.PurchaseDate}</td> 
            <td>${order.Quantity}</td> <td>${order.Status}</td>
            <td><button id="cancelbtn" onclick="cancelOrder('${order.OrderID}')">Cancel</button></td>`;
            orderTable.appendChild(row);
        }
    })
}

async function showBalance() {
   
    displayNone();
    walletBalancePage.style.display = "block";
    (document.getElementById("currentBalance1") as HTMLHeadingElement).innerHTML = `Available Balance :${currentUser.WalletBalance}`;
}


async function WalletRecharge() {
    displayNone();
    WalletRechargePage.style.display = "block";
    (document.getElementById("currentBalance") as HTMLHeadingElement).innerHTML = `Available Balance :${currentUser.WalletBalance}`;
}
async function deposit() {
    var amount = document.getElementById("amount") as HTMLInputElement;
    currentUser.WalletBalance += Number(amount.value);
    alert("Amount Dposited Successfully");
    amount.value = "";
    (document.getElementById("currentBalance") as HTMLHeadingElement).innerHTML = `Available Balance :${currentUser.WalletBalance}`;

}

async function cancelOrder(orderID: string) {
    var orderData = OrderDetailsList.find(o => o.OrderID == orderID && o.CustomerID == currentUser.CustomerID && o.Status == orderStatus.Ordered);
    if (orderData) {
   
        orderData.Status = orderStatus.Cancelled;
            currentUser.WalletBalance += orderData.TotalPrice;
            var ProductID = orderData.ProductID;
            var product = ProductDetailsList.find(p => p.ProductID == ProductID);
            if (product) {
                product.Stock += orderData.Quantity;
            }
            alert("Order Cancelled successfully");
            order();
        }
        else {
            alert("Order not found");
        }
}

let editProductID :string;
async function deleteItem(ProductID: string) {
    var index = ProductDetailsList.findIndex((val) => val.ProductID ==ProductID );
    ProductDetailsList.splice(index, 1);
    showitems();
}
async function addProduct() {
    (document.getElementById("addEditProductForm") as HTMLDivElement).style.display = "block";
    editProductID = "";
}
async function editProduct(ProductID: string) {
    (document.getElementById("addEditProductForm") as HTMLDivElement).style.display = "block";
     var Product = ProductDetailsList.find((val) => val.ProductID == ProductID);
     if (Product) {
        var ProductName = document.getElementById("ProductName") as HTMLInputElement;
        var Stock = document.getElementById("Stock") as HTMLInputElement;
        var Price = document.getElementById("Price") as HTMLInputElement;
        var ShippingDuration = document.getElementById("ShippingDuration") as HTMLInputElement;

        ProductName.value = Product.ProductName;
        Stock.value = Product.Stock.toString();
        Price.value = Product.Price.toString();
        ShippingDuration.value = Product.ShippingDuration.toString();
        
    }
}

async function addEditProduct() {
    var ProductName = document.getElementById("ProductName") as HTMLInputElement;
    var Stock = document.getElementById("Stock") as HTMLInputElement;
    var Price = document.getElementById("Price") as HTMLInputElement;
    var ShippingDuration = document.getElementById("ShippingDuration") as HTMLInputElement;
  

    var ProductData = ProductDetailsList.find(val => val.ProductID == editProductID);
    if(ProductData)
    {
        ProductData.ProductName = ProductName.value;
        ProductData.Stock = Number(Stock.value);
        ProductData.Price = Number(Price.value);
        ProductData.ShippingDuration =Number(ShippingDuration.value)
        alert("Product Details updated successfully");
        editProductID="";
    }
    else 
    {
        if (ProductName.value.trim() != "") {
            ProductDetailsList.push(new ProductDetails(ProductName.value, Number(Stock.value), Number(Price.value),Number(ShippingDuration.value)));
            alert("Product Details added successfully");
            editProductID="";
        }
    }
    ProductName.value = "";
    Stock.value = "";
    Price.value = "";
    ShippingDuration.value = "";
    showitems();
}

