// interface CustomerDetails {
//     customerId:number,
//     name: string,
//     fatherName:string;
//     gender:string,
//     mobile:string,
//     dob:Date,
//     email: string,
//     password: string
//     location:string,
//     walletbalance:number;
//   }
interface CustomerDetails {
    customerID: number; // Match backend's `CustomerID`
    name: string;
    fatherName: string;
    gender: string;
    mobile: string;
    dob: string; // Send as ISO-8601 string
    email: string;
    password: string;
    location: string;
    walletBalance: number;
}

  interface FoodDetails {
    foodID: any,
    foodName: string,
    pricePerQuantity: number,
    quantityAvailable: number

  }
  interface OrderDetails {
    orderID: any,
    CustomerID: number,
    TotalPrice: number,
    DateOfOrder: string,
    OrderStatus: string,
  }
  interface ItemDetails {
    ItemID: any,
    OrderID: number,
    FoodID: number,
    PurchaseCount: number,
    PriceOfOrder: number
  }

  var temporaryCart: Array<{ cartID: number, productID: number, productName: string, purchaseCount: number, priceOfOrder: number }> = new Array<{ cartID: number, productID: number, productName: string, purchaseCount: number, priceOfOrder: number }>();
//  var temporaryCart: Array<{productID: number, productName: string, purchaseCount: number, priceOfOrder: number }> = new Array<{ cartID: number, productID: number, productName: string, purchaseCount: number, priceOfOrder: number }>(); 
  var currentUser: CustomerDetails;
  var curIndex: number | null;
  var sign1 = document.getElementById("signin") as HTMLDivElement;
  var sign2 = document.getElementById("signup") as HTMLDivElement;
  var sign3 = document.getElementById("si") as HTMLDivElement
  var sign4 = document.getElementById("su") as HTMLDivElement;
  
  var homes = document.getElementById("home") as HTMLDivElement;
  var stocks = document.getElementById("stock") as HTMLDivElement;
  var purchases = document.getElementById("purchase") as HTMLDivElement;
  var historys = document.getElementById("history") as HTMLDivElement;
  var topp = document.getElementById("top") as HTMLDivElement;
  var showw = document.getElementById("show") as HTMLDivElement;
  var carts = document.getElementById("cart") as HTMLDivElement;
  var form1 = document.getElementById("form1") as HTMLDivElement;
  
  var foodID = document.getElementById("FoodID") as HTMLInputElement;
  var foodName = document.getElementById("FoodName") as HTMLInputElement;
  var pricePerQuantity = document.getElementById("PricePerQuantity") as HTMLInputElement;
  var purchaseDate = document.getElementById("QuantityAvailable") as HTMLInputElement;
var itemName = document.getElementById("itemName") as HTMLInputElement;
var itemCount = document.getElementById("itemCount") as HTMLInputElement;
var itemPrice = document.getElementById("itemPrice") as HTMLInputElement;
  function signIn(): void {

    sign1.style.display = "block";
    sign2.style.display = "none";
    sign3.style.background = "orange";
    sign4.style.background = "none";
  
  }
  
  function signUp(): void {
  
    sign1.style.display = "none";
    sign2.style.display = "block";
    sign3.style.background = "none";
    sign4.style.background = "orange";
  }
  
  async function signUpSubmit(e: Event) {
    alert("hello world");
    e.preventDefault();
    var name = document.getElementById("name") as HTMLInputElement;
    var fathername = document.getElementById("fatherName") as HTMLInputElement;
    var gender = document.getElementById("gender") as HTMLInputElement;
    var phone = document.getElementById("phone") as HTMLInputElement;
    var date=document.getElementById("dob") as HTMLInputElement;
    var email = document.getElementById("email") as HTMLInputElement;
    var cpassword = document.getElementById("cpassword") as HTMLInputElement;
    var password = document.getElementById("password") as HTMLInputElement;  
    var location = document.getElementById("location") as HTMLInputElement; 
    
    if (password.value == cpassword.value) {
      var isavail: boolean = true;
      var UserArrayList = await fetchUsers();
      UserArrayList.forEach((val) => {
        if (val.email.toLowerCase() == email.value.toLowerCase()) {
          alert("you already have an ID. Please Sign In");
          isavail = false;
        }
      })
       
          if (isavail) {

            addUser({customerID: 1,name:name.value,fatherName:fathername.value,gender:gender.value,mobile:phone.value,dob:new Date(date.value),email:email.value,password:password.value,location:location.value,walletBalance:0});
            addUser({
              customerID: 2,
              name: "John Doe",
              fatherName: "Richard Roe",
              gender: "Male",
              mobile: "1234567890",
              dob: new Date("2000-01-01").toISOString(),
              email: "john@example.com",
              password: "password123",
              location: "New York",
              walletBalance: 0,
          });
          
            alert("Form Submitted Sucessfully")
            signIn();
          }
  
      }
     else {
      var i = document.getElementById("signup") as HTMLDivElement;
      i.style.border = "2px solid red";
    }
  }
  
  var b = document.getElementById("menu") as HTMLDivElement;

  async function signInSubmit(e: Event): Promise<void> {
    e.preventDefault();
    const email = (document.getElementById("email1") as HTMLInputElement).value;
    const password = (document.getElementById("password2") as HTMLInputElement).value;

    try {
        const users = await fetchUsers();
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
        if (user) {
            alert('User login successful');
            var a = document.getElementById("box") as HTMLDivElement
           a.style.display = "none";
           var b = document.getElementById("menu") as HTMLDivElement;
          b.style.display = "block"
          currentUser = user;
          home();
                   
           
        } else {
            alert('Invalid email or password');
        }
    } catch (error) {
        console.error(error);
    }
}
async function fetchUsers(): Promise<CustomerDetails[]> {
  try {
      const response = await fetch('http://localhost:5103/users');
      if (!response.ok) {
          throw new Error('Failed to fetch users');
      }
      return await response.json();
  } catch (error) {
      console.error(error);
      alert('Error fetching users');
      return [];
  }
}

  // async function fetchUsers(): Promise<CustomerDetails[]> {
  //   const apiUrl = 'http://localhost:5103/users';
  //   const response = await fetch(apiUrl);
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch Data');
  //   }
  //   return await response.json();
  // }
  
  // async function addUser(user: CustomerDetails): Promise<void> {
  //   const response = await fetch('http://localhost:5103/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(user)
  //   });
  //   if (!response.ok) {
  //     throw new Error('failed to fetch Data');
  //   }
  //   // renderContacts();
  // }
  
  async function addUser(user: CustomerDetails): Promise<void> {
    const response = await fetch('http://localhost:5103/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        const error = await response.text();
        console.error(`Error: ${error}`);
        alert(`Failed to add user: ${error}`);
    }
}

function home() {
  displayNone();
  homes.style.display = "block";
   var a = document.getElementById("welcome") as HTMLHeadingElement;
 
  a.innerHTML = "Welcome " + currentUser.name;



  // b.src = currentUser.image[0];

}

function displayNone() {
  homes.style.display = "none";
  stocks.style.display = "none";
  purchases.style.display = "none";
  historys.style.display = "none";
  topp.style.display = "none";
  showw.style.display = "none";
  carts.style.display = "none";
  form1.style.display = "none";
}

function recharge() {
  displayNone();
  topp.style.display = "block";
  (document.getElementById("curBalance") as HTMLHeadingElement).innerHTML = `Available Balance :${currentUser.walletBalance}`;
}

function show() {
  displayNone();
  showw.style.display = "block";
  var a = document.getElementById("balance") as HTMLHeadingElement;
  a.innerHTML = "Your Balance is " + currentUser.walletBalance;

}

async function deposit() {
  var a = document.getElementById("amount") as HTMLInputElement;
  var amt: number = currentUser.walletBalance + Number(a.value);
  currentUser = await updateAmount(currentUser.customerID, amt);

  alert("Amount Deposited Successfully");
  a.value = "";
  (document.getElementById("curBalance") as HTMLHeadingElement).innerHTML = `Available Balance :${currentUser.walletBalance}`;

}
async function updateAmount(id: number, amount: number): Promise<CustomerDetails> {
  const response = await fetch(`http://localhost:5103/users/${id}/${amount}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('failed to fetch Data');
  }
  return await response.json();
}

function Logout() {
  displayNone();
  (document.getElementById("menu") as HTMLDivElement).style.display = "none";
  (document.getElementById("box") as HTMLDivElement).style.display = "block";
}
async function stock() {
  displayNone();
  stocks.style.display = "block";
  var tbody = document.getElementById("tbody1") as HTMLTableSectionElement;
  tbody.innerHTML = "";
  var foodlist = await fetchProducts();
  console.log(foodlist);
  foodlist.forEach((element) => {
    if (element.quantityAvailable > 0) {
      var row = document.createElement("tr") as HTMLTableRowElement;
      row.innerHTML = `
      <td>${element.foodID}</td>
      <td>${element.foodName}</td>
      <td>${element.pricePerQuantity}</td>
      <td>${element.quantityAvailable}</td>
      <td>
      <button onclick="Edit(${element.foodID},'${element.foodName}',${element.pricePerQuantity},${element.quantityAvailable})">Edit</button>
      <button onclick="deleteProduct(${element.foodID})">Delete</button>
      </td>
      `
      tbody.appendChild(row);
    }
  }
  );
}
function Edit(id: number, name: string, price: number, quan: number) {
  form1.style.display = "block";
  curIndex = id;
  itemName.value = name;
  itemCount.value = quan + "";
  itemPrice.value = price + "";
}
async function fetchProducts(): Promise<FoodDetails[]> {
  alert("helloworld")
  const apiUrl = 'http://localhost:5103/Food';
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('failed to fetch Data');
  }
  return await response.json();
}




function Delete(id: number) {
  deleteProduct(id);
}
async function deleteProduct(id: number): Promise<void> {
  const response = await fetch(`http://localhost:5103/Food/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Failed to delete contact');
  }
  // bookDetails();
  stock();
}
var itemBase64: string;
function addProductTo() {

  if (curIndex != null) {
          updateProduct(curIndex,
            {
              foodID: curIndex,
              foodName: itemName.value,
              quantityAvailable: +itemCount.value,
              pricePerQuantity: Number(itemPrice.value)
            })
        
            curIndex = null;
            itemName.value = "";
            itemCount.value = "";
            itemPrice.value = "";     
        
          }
           else {
            alert("else")
          postProduct({
          foodID: undefined,
          foodName: itemName.value,
          quantityAvailable: +itemCount.value,
          pricePerQuantity: Number(itemPrice.value)
        })
      }
    }

      async function postProduct(product: FoodDetails): Promise<void> {
        const response = await fetch('http://localhost:5103/Food', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
        });
        stock();
      }

async function updateProduct(id: number, book: FoodDetails): Promise<void> {
  const response = await fetch(`http://localhost:5103/Food/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  });
  if (!response.ok) {
    throw new Error('Failed to update contact');
  }
  stock();
}


//-----------------------

async function purchase() {
  displayNone();
  purchases.style.display = "block";
  var tbody = document.getElementById("product-cont") as HTMLDivElement;
  console.log(tbody);

  tbody.innerHTML = "";
  var bookList = await fetchProducts();
  bookList.forEach((element) => {
    if (element.quantityAvailable > 0) {
      var row = document.createElement("div");
      row.className = "product-card";
      row.innerHTML = `
      <div class="product-info">
          <h5>${element.foodName}</h2>
          <h5> Rs. ${element.pricePerQuantity}</h2>
      </div>
      <button onclick="AddCart(${element.foodID},'${element.foodName}',${element.pricePerQuantity},${element.quantityAvailable})"  >Add To Cart</button>
      `
      tbody.appendChild(row);
    }
  }
  );
}
function AddCart(productID1: number,productName1: string, price: number, c: number) {
  var count: number = Number(prompt("Enter Quantity"));
  if (count <= c) {
    temporaryCart.push({ cartID: temporaryCart.length + 1, productID: productID1, productName: productName1, purchaseCount: count, priceOfOrder: count * price });
  } else {
    alert(`Entered Qunatity Not Available \n Available Count:${c}`)
  }
}

async function cart() {
  displayNone();
  carts.style.display = "block";
  var tbody = document.getElementById("tbody3") as HTMLTableSectionElement;
  tbody.innerHTML = "";
  // var bookList= await fetchProducts();
  temporaryCart.forEach((element) => {
    var row = document.createElement("tr");
    row.innerHTML = `

      <td>${element.productName}</td>
      <td>${element.purchaseCount}</td>
      <td>${element.priceOfOrder}</td>
      <td>
      <button onclick="deleteID(${element.cartID})">Delete</button>
      </td>
      `
    tbody.appendChild(row);
  }
  );

}
async function postBooking(product: OrderDetails): Promise<void> {
  const response = await fetch('http://localhost:5103/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
}
async function buy() {
  var total = 0;
  temporaryCart.forEach((val) => {
    total += val.priceOfOrder;
  })
  if (total < currentUser.walletBalance) {

    // var book: OrderDetails = await postBooking({
    //   // orderID: undefined,
    //   // CustomerID: currentUser.customerID,
    //   // TotalPrice: total,
    //   // DateOfOrder: new Date().toISOString(),
    //   // OrderStatus: "Booked"
    // })
    temporaryCart.forEach((data) => {
      // postOrder(
      //   {
      //     orderID: undefined,
      //     TotalPrice:data.priceOfOrder,
      //     CustomerID:data.productID,
      //     productName: data.productName,
      //     purchaseCount: data.purchaseCount,
      //     priceOfOrder: data.priceOfOrder
      //   })
      //foodscount
      updateProductCount(data.productID, data.purchaseCount);
    })
    postOrder({orderID:0,CustomerID:currentUser.customerID,TotalPrice:total,DateOfOrder:new Date().toISOString(),OrderStatus:"ordered"})

    currentUser = await updateAmount(currentUser.customerID, currentUser.walletBalance - total);
    temporaryCart.splice(0, temporaryCart.length);
    cart();
    alert("Order placed successfully !");
  } else {
    alert("Insufficient Balance");
  }
}
async function postOrder(product: OrderDetails): Promise<void> {
  const response = await fetch('http://localhost:5103/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  if (!response.ok) {
    throw new Error('failed to fetch Data');
  }
}


async function cancelBooking(id: number) {
  var bookingList: BookingDetails[] = await fetchBooking();
  var booking = bookingList.find(value => value.bookingID == id);
  if (booking!=undefined && booking.customerID == currentUser.userID && booking.bookingStatus == "Booked") 
  {
    booking.bookingStatus = "Cancelled";
    currentUser = await updateAmount(currentUser.userID, currentUser.amount + booking.totalPrice);
    await updateBooking(id, booking);
    bookingHistory();
    stock();
    alert("Booking Cancelled");
  }
}
async function updateBooking(id: number, booking: OrderDetails): Promise<void> {
  const response = await fetch(`http://localhost:5288/booking/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(booking)
  });
  if (!response.ok) {
    throw new Error('failed to fetch Data');
    }
}
function deleteID(id: number) {
  var a = temporaryCart.findIndex(value => value.cartID == id);
  temporaryCart.splice(a, 1);
  cart();
}

function addGrocery() {
  form1.style.display = "block";
}

//------------------
async function updateProductCount(id: number, count: number): Promise<void> {
  const response = await fetch(`http://localhost:5103/product/${id}/${count}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('failed to fetch Data');
  }
  // return await response.json();
}
async function fetchBooking(): Promise<OrderDetails[]> {
  const apiUrl = 'http://localhost:5103/orders';
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('failed to fetch Data');
  }
  return await response.json();
}
async function fetchOrder(): Promise<OrderDetails[]> {
  const apiUrl = 'http://localhost:5103/order';
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('failed to fetch Data');
  }
  return await response.json();
}

//order history

var tbody = document.getElementById("history") as HTMLDivElement;
 async function bookingHistory() {
  displayNone();
  historys.style.display = "block";
  var tbody = document.getElementById("tbody2") as HTMLTableSectionElement;
  tbody.innerHTML = "";
  var orderList: OrderDetails[] = await fetchBooking();
  displayNone();
  historys.style.display = "block";
  console.log("fetched history"+JSON.stringify(orderList));
  var headingRow=document.createElement("tr");
  // var orderList = await fetchOrder();
  orderList.forEach((booking) => {
    if (booking.CustomerID == currentUser.customerID) {     
      tbody.innerHTML += `<div id="tab">
    ${booking.OrderStatus == "Booked" ? `<td><button onclick="cancelBooking(${booking.orderID})">Cancel </button></td>` : ""}
          <button onclick="exportData(${booking.orderID})">Export </button></td>
    </div>
    <table id="tb3">
      <thead>
          <tr>
              <th>BookingID</th>
              <th>OrderID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Date</th>
              <th>Total Price</th>
              <th>Status</th>
          </tr>
      </thead>
      <tbody id="fs${booking.orderID}">
      </tbody>
    </table>
    <br>
    <hr>
    <br>
`;
      var d = document.getElementById(`fs${booking.orderID}`) as HTMLTableSectionElement;
      var flag:boolean = true;
      orderList.forEach((element) => {
        if (element.orderID == booking.orderID) {
          var row = document.createElement("tr");
          if (flag) 
          {
            row.innerHTML = ` 
          <td rowspan="${orderList.length+1}">${booking.orderID}</td>
          <td>${element.orderID}</td>
          <td>${element.CustomerID}</td>
          <td rowspan="${orderList.length+1}">${element.DateOfOrder.split("T")[0].split("-").reverse().join("/")}</td>
          <td rowspan="${orderList.length+1}">${element.OrderStatus}</td>
          <td rowspan="${orderList.length+1}">${element.TotalPrice}</td>
          `;
            flag = false;
          }
          else
          {
            row.innerHTML = ` 
          <td>${element.orderID}</td>
          <td>${element.CustomerID}</td>
          <td>${element.DateOfOrder}</td>
          <td>${element.OrderStatus}</td>
           <td>${element.TotalPrice}</td>
          `;
          }
          d.appendChild(row);
        }
      }
      );
    }
  })
}

