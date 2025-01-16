//Global Variables
interface UserInfo {
  userID: any,
  name: string,
  email: string,
  password: string,
  image: string[],
  amount: number
}
interface ProductDetails {
  productID: any,
  productName: string,
  quantityAvailable: number,
  pricePerQuantity: number,
  image: string[],
  purchaseDate: string,
  expiryDate: string
}
interface OrderDetails {
  orderID: any,
  bookingID: number,
  productID: number,
  productName: string,
  purchaseCount: number,
  priceOfOrder: number
}
interface BookingDetails {
  bookingID: any,
  customerID: number,
  totalPrice: number,
  dateOfBooking: string,
  bookingStatus: string
}
var currentUser: UserInfo;
var curIndex: number | null;
var sign1 = document.getElementById("signin") as HTMLDivElement;
var sign2 = document.getElementById("signup") as HTMLDivElement;
var sign3 = document.getElementById("si") as HTMLDivElement;
var sign4 = document.getElementById("su") as HTMLDivElement;

var homes = document.getElementById("home") as HTMLDivElement;
var stocks = document.getElementById("stock") as HTMLDivElement;
var purchases = document.getElementById("purchase") as HTMLDivElement;
var historys = document.getElementById("history") as HTMLDivElement;
var topp = document.getElementById("top") as HTMLDivElement;
var showw = document.getElementById("show") as HTMLDivElement;
var carts = document.getElementById("cart") as HTMLDivElement;
var form1 = document.getElementById("form1") as HTMLDivElement;

var itemName = document.getElementById("itemName") as HTMLInputElement;
var itemCount = document.getElementById("itemCount") as HTMLInputElement;
var itemPrice = document.getElementById("itemPrice") as HTMLInputElement;
var purchaseDate = document.getElementById("purchaseDate") as HTMLInputElement;
var expiryDate = document.getElementById("expiryDate") as HTMLInputElement;
var itemImage = document.getElementById("itemImage") as HTMLInputElement;

var temporaryCart: Array<{ cartID: number, productID: number, productName: string, purchaseCount: number, priceOfOrder: number }> = new Array<{ cartID: number, productID: number, productName: string, purchaseCount: number, priceOfOrder: number }>();

//------------------------------------------------
// ---------Async Functions---------------------
async function fetchUsers(): Promise<UserInfo[]> {
  const apiUrl = 'http://localhost:5288/users';
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch Data');
  }
  return await response.json();
}

async function addUser(user: UserInfo): Promise<void> {
  const response = await fetch('http://localhost:5288/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  if (!response.ok) {
    throw new Error('failed to fetch Data');
  }
  // renderContacts();
}
async function updateAmount(id: number, amount: number): Promise<UserInfo> {
  const response = await fetch(`http://localhost:5288/users/${id}/${amount}`, {
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

async function postProduct(product: ProductDetails): Promise<void> {
  const response = await fetch('http://localhost:5288/product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  if (!response.ok) {
    throw new Error('failed to fetch Data');
  }
  stock();
}
async function postBooking(product: BookingDetails): Promise<BookingDetails> {
  const response = await fetch('http://localhost:5288/booking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  if (!response.ok) {
    throw new Error('failed to fetch Data');
  }
  return await response.json();

}

async function fetchProducts(): Promise<ProductDetails[]> {
  const apiUrl = 'http://localhost:5288/product';
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('failed to fetch Data');
  }
  return await response.json();
}

async function deleteProduct(id: number): Promise<void> {
  const response = await fetch(`http://localhost:5288/product/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Failed to delete contact');
  }
  // bookDetails();
  stock();
}

async function updateProduct(id: number, book: ProductDetails): Promise<void> {
  const response = await fetch(`http://localhost:5288/product/${id}`, {
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

//----------------------------------------------------
//---------Functions

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
  e.preventDefault();
  var name = document.getElementById("name") as HTMLInputElement;
  var email = document.getElementById("email") as HTMLInputElement;
  var password = document.getElementById("password") as HTMLInputElement;
  var cpassword = document.getElementById("cpassword") as HTMLInputElement;
  var fileElement = document.getElementById("fileElement") as HTMLInputElement;

  var base64: string;
  var file;
  fileElement.addEventListener('change', () => {
    file = fileElement.files?.[0];
  })
  file = fileElement.files?.[0];
  // var phoneReg=/^[0-9]{10,10}$/;
  var passReg = /[a-zA-Z]{4,6}[@!#$%&*()]{1,2}[0-9]{1,4}/;

  if (password.value == cpassword.value) {
    var isavail: boolean = true;

    var UserArrayList = await fetchUsers();

    UserArrayList.forEach((val) => {
      if (val.email.toLowerCase() == email.value.toLowerCase()) {
        alert("you already have an ID. Please Sign In");
        isavail = false;
      }
    })
    if (file) {
      var fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener('load', (event) => {
        base64 = event.target?.result as string;
        if (isavail) {
          addUser({ userID: undefined, name: name.value, email: email.value, password: password.value, image: [base64], amount: 0 })
          
          signIn();
        }
      })

    }
  } else {
    var i = document.getElementById("signup") as HTMLDivElement;
    i.style.border = "2px solid red";
  }
}

function signInSubmit(e: Event) {
  e.preventDefault();
  var isavail: boolean = true;
  var email = document.getElementById("email1") as HTMLInputElement;

  var password = document.getElementById("password2") as HTMLInputElement;

  fetchUsers().then(UserArrayList => {
    UserArrayList.forEach((val) => {
      if (val.email.toLowerCase() == email.value.toLowerCase() && val.password == password.value) {
        var a = document.getElementById("box") as HTMLDivElement
        a.style.display = "none";
        var b = document.getElementById("menu") as HTMLDivElement;
        b.style.display = "block"
        isavail = false;
        currentUser = val;
        home();
        email.value = "";
        password.value = ""
        if (isavail) {
          alert("Invalid Email or Password");
        }
      }
    })
  })
}

function home() {
  displayNone();
  homes.style.display = "block";
  var a = document.getElementById("welcome") as HTMLHeadingElement;
  var b = document.getElementById("imgTag") as HTMLImageElement;
  a.innerHTML = "Welcome " + currentUser.name;

  b.src = currentUser.image[0];

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
  (document.getElementById("curBalance") as HTMLHeadingElement).innerHTML = `Available Balance :${currentUser.amount}`;
}

function show() {
  displayNone();
  showw.style.display = "block";
  var a = document.getElementById("balance") as HTMLHeadingElement;
  a.innerHTML = "Your Balance is " + currentUser.amount;

}

async function deposit() {
  var a = document.getElementById("amount") as HTMLInputElement;
  var amt: number = currentUser.amount + Number(a.value);
  currentUser = await updateAmount(currentUser.userID, amt);

  alert("Amount Deposited Successfully");
  a.value = "";
  (document.getElementById("curBalance") as HTMLHeadingElement).innerHTML = `Available Balance :${currentUser.amount}`;

}

function Logout() {
  displayNone();
  (document.getElementById("menu") as HTMLDivElement).style.display = "none";
  (document.getElementById("box") as HTMLDivElement).style.display = "block";
}
//---------------------
async function stock() {
  displayNone();
  stocks.style.display = "block";
  var tbody = document.getElementById("tbody1") as HTMLTableSectionElement;
  tbody.innerHTML = "";
  var bookList = await fetchProducts();
  bookList.forEach((element) => {
    if (element.quantityAvailable > 0) {
      var row = document.createElement("tr");
      row.innerHTML = `

      <td>${element.productName}</td>
      <td>${element.quantityAvailable}</td>
      <td>${element.pricePerQuantity}</td>
      <td>${element.purchaseDate.split("T")[0].split("-").reverse().join("/")}</td>
      <td>${element.expiryDate.split("T")[0].split("-").reverse().join("/")}</td>
      <td><img src='${element.image}'></td>
      <td>
      <button onclick="Edit(${element.productID},'${element.productName}',${element.quantityAvailable},${element.pricePerQuantity},'${element.purchaseDate}','${element.expiryDate}')">Edit</button>
      <button onclick="deleteProduct(${element.productID})">Delete</button>
      </td>
      `
      tbody.appendChild(row);
    }
  }
  );
}

function Edit(id: number, name: string, quan: number, price: number, pDate: string, eDate: string) {
  form1.style.display = "block";
  curIndex = id;
  itemName.value = name;
  itemCount.value = quan + "";
  itemPrice.value = price + "";
  purchaseDate.value = pDate.split("T")[0];
  expiryDate.value = eDate.split("T")[0];
}

function Delete(id: number) {
  deleteProduct(id);
}
var itemBase64: string;
function addProductTo() {

  if (curIndex != null) {
    var itemFile = itemImage.files?.[0];
    if (itemFile) {
      var fileReader = new FileReader();
      fileReader.readAsDataURL(itemFile);
      fileReader.addEventListener('load', (event) => {
        itemBase64 = event.target?.result as string;
        if (curIndex != null) {

          updateProduct(curIndex,
            {
              productID: curIndex,
              productName: itemName.value,
              quantityAvailable: +itemCount.value,
              pricePerQuantity: Number(itemPrice.value),
              image: [itemBase64],
              purchaseDate: new Date(purchaseDate.value).toISOString(),
              expiryDate: new Date(expiryDate.value).toISOString()

            })
        }


        curIndex = null;
        itemName.value = "";
        itemCount.value = "";
        itemPrice.value = "";
        purchaseDate.value = "";
        expiryDate.value = "";
      })

    }

  } else {
    var itemFile = itemImage.files?.[0];
    if (itemFile) {
      var fileReader = new FileReader();
      fileReader.readAsDataURL(itemFile);
      fileReader.addEventListener('load', (event) => {
        itemBase64 = event.target?.result as string;


        postProduct({
          productID: undefined,
          productName: itemName.value,
          quantityAvailable: +itemCount.value,
          pricePerQuantity: Number(itemPrice.value),
          image: [itemBase64],
          purchaseDate: new Date(purchaseDate.value).toISOString(),
          expiryDate: new Date(expiryDate.value).toISOString()
        })
      })

    }

  }

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
      
      <img src='${element.image}' height="100px" width="100px" alt="">
      <div class="product-info">
          <h5>${element.productName}</h2>
          <h5> Rs. ${element.pricePerQuantity}</h2>
      </div>
      <button onclick="AddCart('${element.productName}',${element.pricePerQuantity},${element.quantityAvailable},${element.productID})"  >Add To Cart</button>
      `
      tbody.appendChild(row);
    }
  }
  );
}
function AddCart(productName1: string, price: number, c: number, productID1: number) {
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
async function buy() {
  var total = 0;
  temporaryCart.forEach((val) => {
    total += val.priceOfOrder;
  })
  if (total < currentUser.amount) {
    var book: BookingDetails = await postBooking({
      bookingID: undefined,
      customerID: currentUser.userID,
      totalPrice: total,
      dateOfBooking: new Date().toISOString(),
      bookingStatus: "Booked"
    })
    temporaryCart.forEach((data) => {
      postOrder(
        {
          orderID: undefined,
          productID: data.productID,
          bookingID: book.bookingID,
          productName: data.productName,
          purchaseCount: data.purchaseCount,
          priceOfOrder: data.priceOfOrder
        })
      updateProductCount(data.productID, data.purchaseCount);
    })
    currentUser = await updateAmount(currentUser.userID, currentUser.amount - total);
    temporaryCart.splice(0, temporaryCart.length);
    cart();
    alert("Order placed successfully !");
  } else {
    alert("Insufficient Balance");
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
async function updateBooking(id: number, booking: BookingDetails): Promise<void> {
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
async function postOrder(product: OrderDetails): Promise<void> {
  const response = await fetch('http://localhost:5288/order', {
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

async function updateProductCount(id: number, count: number): Promise<void> {
  const response = await fetch(`http://localhost:5288/product/${id}/${count}`, {
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
async function fetchBooking(): Promise<BookingDetails[]> {
  const apiUrl = 'http://localhost:5288/booking';
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('failed to fetch Data');
  }
  return await response.json();
}
async function fetchOrder(): Promise<OrderDetails[]> {
  const apiUrl = 'http://localhost:5288/order';
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
  tbody.innerHTML = "";
  var bookingList: BookingDetails[] = await fetchBooking();
  var orderList = await fetchOrder();
  bookingList.forEach((booking) => {

    if (booking.customerID == currentUser.userID) {
      tbody.innerHTML += `
    <div id="tab">
    ${booking.bookingStatus == "Booked" ? `<td><button onclick="cancelBooking(${booking.bookingID})">Cancel </button></td>` : ""}
          <button onclick="exportData(${booking.bookingID})">Export </button></td>
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
      <tbody id="fs${booking.bookingID}">
      </tbody>
    </table>
    <br>
    <hr>
    <br>
`;
      var d = document.getElementById(`fs${booking.bookingID}`) as HTMLTableSectionElement;
      var flag:boolean = true;
      orderList.forEach((element) => {
        if (element.bookingID == booking.bookingID) {
          var row = document.createElement("tr");
          if (flag) 
          {
            row.innerHTML = ` 
          <td rowspan="${orderList.length+1}">${booking.bookingID}</td>
          <td>${element.orderID}</td>
          <td>${element.productName}</td>
          <td>${element.purchaseCount}</td>
          <td>${element.priceOfOrder}</td>
          <td rowspan="${orderList.length+1}">${booking.dateOfBooking.split("T")[0].split("-").reverse().join("/")}</td>
          <td rowspan="${orderList.length+1}">${booking.totalPrice}</td>
          <td rowspan="${orderList.length+1}">${booking.bookingStatus}</td>
          `;
            flag = false;
          }
          else
          {
            row.innerHTML = ` 
          <td>${element.orderID}</td>
          <td>${element.productName}</td>
          <td>${element.purchaseCount}</td>
          <td>${element.priceOfOrder}</td>
          `;
          }
          d.appendChild(row);
        }
      }
      );
    }
  })
}
async function exportData(data: number) {
  var bookingList: BookingDetails[] = await fetchBooking();
  var bookList = await fetchOrder();
  var csvdata = "BookingID,ProduuctName,Purchasecount,Price\n";
  bookList.forEach((element) => {
    if (element.bookingID == data) {
      csvdata += `${element.bookingID},${element.productName},${element.purchaseCount},${element.priceOfOrder}\n`;
    }
  }
  )
  var a = new Blob([csvdata], { type: 'text/csv' });
  var b = document.createElement('a');
  var url = URL.createObjectURL(a);
  b.href = url;
  b.download = "Bill"
  b.click();
}