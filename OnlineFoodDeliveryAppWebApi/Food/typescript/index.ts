interface CustomerDetails {
    userID: any,
    name: string,
    fatherName:string;
    gender:string,
    mobile:string,
    dob:Date,
    email: string,
    password: string
  }
  interface FoodDetails {
    FoodID: any,
    FoodName: string,
    PricePerQuantity: number,
    QuantityAvailable: number

  }

  enum orderstatus{
    select,Inititated,Ordered,Cancelled
  }
  interface OrderDetails {
    orderID: any,
    CustomerID: number,
    TotalPrice: number,
    DateOfOrder: string,
    OrderStatus: orderstatus,
  }
  interface ItemDetails {
    ItemID: any,
    OrderID: number,
    FoodID: number,
    PurchaseCount: number,
    PriceOfOrder: number
  }
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
  
  var itemName = document.getElementById("itemName") as HTMLInputElement;
  var itemCount = document.getElementById("itemCount") as HTMLInputElement;
  var itemPrice = document.getElementById("itemPrice") as HTMLInputElement;
  var purchaseDate = document.getElementById("purchaseDate") as HTMLInputElement;
  var expiryDate = document.getElementById("expiryDate") as HTMLInputElement;
  var itemImage = document.getElementById("itemImage") as HTMLInputElement;
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
            addUser({userID: 1000,name:name.value,fatherName:fathername.value,gender:gender.value,mobile:phone.value,dob:new Date(date.value),email:email.value,password:password.value});
            alert("Form Submitted Sucessfully")
            signIn();
          }
  
      }
     else {
      var i = document.getElementById("signup") as HTMLDivElement;
      i.style.border = "2px solid red";
    }
  }
  
  function signInSubmit(e: Event) {
    e.preventDefault();
    var isavail: boolean = true;
    alert("signin page")
    var email = document.getElementById("email1") as HTMLInputElement;
  
    var password = document.getElementById("password2") as HTMLInputElement;
     
    fetchUsers().then(UserArrayList => {
      UserArrayList.forEach((val) => {
        if (val.email.toLowerCase() == email.value.toLowerCase() && val.password == password.value) {
          alert("user login sucessfull....")
          var a = document.getElementById("box") as HTMLDivElement
          a.style.display = "none";
          var b = document.getElementById("menu") as HTMLDivElement;
          b.style.display = "block"
          isavail = false;
          currentUser = val;
          // home();
          email.value = "";
          password.value = ""
          if (isavail) {
            alert("Invalid Email or Password");
          }
        }
      })
    })
  }

  async function fetchUsers(): Promise<CustomerDetails[]> {
    const apiUrl = 'http://localhost:5103/users';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch Data');
    }
    return await response.json();
  }
  
  async function addUser(user: CustomerDetails): Promise<void> {
    const response = await fetch('http://localhost:5103/users', {
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
  

  