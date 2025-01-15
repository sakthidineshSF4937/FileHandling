
let UserIdAutoIncrement = 1000;
let MedicineIdAutoIncrement = 100;
let OrderIdAutoIncrement = 2000;

class User {

    UserId: string;
    Name: string;
    Email: string;
    Password: string;
    UserPhoneNumber: string;
    Amount: number = 0;

    constructor(name: string, email: string, password: string, paramUserPhoneNumber: string) {

        this.UserId = "UID" + UserIdAutoIncrement++;
        this.Name = name;
        this.Email = email;
        this.Password = password;
        this.UserPhoneNumber = paramUserPhoneNumber;
    }

}
class MedicineInfo {

    MedicineId: string;
    MedicineName: string;
    MedicineCount: number;
    MedicinePrice: number;
    ExpiryDate: Date

    constructor(paramMedicineName: string, paramMedicineCount: number, paramMedicinePrice: number, expiryDate: Date) {

        this.MedicineId = "MD" + MedicineIdAutoIncrement++;
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
        this.ExpiryDate = expiryDate;
    }

}
enum orderStatus {
    purchased = 'Purchased',
    cancelled = 'Cancelled'
}

class Order {
    OrderId: string;
    MedicineId: string;
    UserId: string;
    Total: number;

    MedicineName: string;
    MedicineCount: number;
    PurchaseStatus: orderStatus;
    OrderDate: Date;

    constructor(userID: string, medicineID: string, Count: number, total: number, date: Date, order: orderStatus) {

        this.OrderId = "OID" + OrderIdAutoIncrement++;
        this.MedicineId = medicineID;
        this.UserId = userID;
        this.Total = total;
        this.OrderDate = date;
        this.MedicineCount = Count;
        this.PurchaseStatus = order;
    }
}

let UserArrayList: Array<User> = new Array<User>();

UserArrayList.push(new User("Ravi", "ravi@gmail.com", "Ravi@1", "9789011226"));
UserArrayList.push(new User("Baskaran", "baskaran@gmail.com", "Baskaran@1", "9445153060"));

let MedicineList: Array<MedicineInfo> = new Array<MedicineInfo>();

MedicineList.push(new MedicineInfo("Paracetomol", 5, 5, new Date(2024, 6, 30)));
MedicineList.push(new MedicineInfo("Colpal", 5, 5, new Date(2024, 5, 30)));
MedicineList.push(new MedicineInfo("Gelucil", 5, 40, new Date(2024, 4, 30)));
MedicineList.push(new MedicineInfo("Metrogel", 5, 50, new Date(2024, 12, 30)));
MedicineList.push(new MedicineInfo("Povidin Iodin", 5, 50, new Date(2024, 10, 30)));

let OrderList: Array<Order> = new Array<Order>();
OrderList.push(new Order("UID1001", "MD101", 3, 15, new Date(2022, 11, 13), orderStatus.purchased));
OrderList.push(new Order("UID1001", "MD102", 2, 10, new Date(2022, 11, 13), orderStatus.cancelled));
OrderList.push(new Order("UID1001", "MD104", 3, 100, new Date(2022, 11, 13), orderStatus.purchased));
OrderList.push(new Order("UID1002", "MD103", 3, 120, new Date(2022, 11, 13), orderStatus.cancelled));
OrderList.push(new Order("UID1002", "MD105", 5, 250, new Date(2022, 11, 13), orderStatus.purchased));
OrderList.push(new Order("UID1002", "MD102", 3, 15, new Date(2022, 11, 13), orderStatus.purchased));


var currentUser: User;
var homePage = document.getElementById("homePage") as HTMLDivElement;
var medicinePage = document.getElementById("medicinePage") as HTMLDivElement;
var purchasePage = document.getElementById("purchasePage") as HTMLDivElement;
var topPage = document.getElementById("topUpPage") as HTMLDivElement;
var orderPage = document.getElementById("orderPage") as HTMLDivElement;

var signInForm = document.getElementById("signIn") as HTMLDivElement;
var signUpForm = document.getElementById("signUp") as HTMLDivElement;
var signInButton = document.getElementById("signInButton") as HTMLDivElement;
var signUpButton = document.getElementById("signUpButton") as HTMLDivElement;

function signIn(): void {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
    signInButton.style.background = "orange";
    signUpButton.style.background = "none";
}

function signUp(): void {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
    signInButton.style.background = "none";
    signUpButton.style.background = "orange";
}
async function signUpSubmit(e) {
    e.preventDefault();
    var name = document.getElementById("name") as HTMLInputElement;
    var email = document.getElementById("email") as HTMLInputElement;
    var password = document.getElementById("password") as HTMLInputElement;
    var cpassword = document.getElementById("cpassword") as HTMLInputElement;
    var phone = document.getElementById("phone") as HTMLInputElement;

    var isavail: boolean = true;
    UserArrayList.forEach((val) => {
        if (val.Email.toLowerCase() == email.value.toLowerCase()) {
            alert("you already have an ID. Please Sign In");
            isavail = false;
        }
    });
    
    if (isavail) {
        let user: User = new User(name.value, email.value, password.value, phone.value);
        UserArrayList.push(user);
        alert("Your User ID is " + user.UserId)
        isavail = false;
    }
    else {
        var i = document.getElementById("signup") as HTMLDivElement;
        i.style.border = "2px solid red";
    }
}

async function signInSubmit(e) {
    e.preventDefault();
    var isavail: boolean = true;
    var email = document.getElementById("email1") as HTMLInputElement;
    var password = document.getElementById("password2") as HTMLInputElement;

    UserArrayList.forEach((val) => {
        if (val.Email.toLowerCase() == email.value.toLowerCase() && val.Password == password.value) {
            var a = document.getElementById("box") as HTMLDivElement
            a.style.display = "none";
            var b = document.getElementById("menu") as HTMLDivElement;
            b.style.display = "block";
            isavail = false;
            currentUser = val;
            home();
            email.value = "";
            password.value = "";
        }
    })
    if (isavail) {
        alert("Invalid Email or Password");
    }

}

async function home() {
    displayNone();
    homePage.style.display = "block";
    var welcome = document.getElementById("welcome") as HTMLHeadingElement;
    welcome.innerHTML = "Welcome " + currentUser.Name;
}

async function displayNone() {
    homePage.style.display = "none";
    medicinePage.style.display = "none";
    purchasePage.style.display = "none";
    topPage.style.display = "none";
    orderPage.style.display = "none";
    (document.getElementById("addEditMedicineForm") as HTMLDivElement).style.display = "none";
}

async function showmedicine() {
    displayNone();
    medicinePage.style.display = "block";
    var table = document.getElementById("medicineTable") as HTMLTableElement;
    var len = table.getElementsByTagName("tr").length;
    if (table.hasChildNodes()) {
        for (var i = len - 1; i >= 1; i--) {
            table.removeChild(table.children[i]);
        }
    }
    MedicineList.forEach((medicine) => {
        var row = document.createElement("tr") as HTMLTableRowElement;
        row.innerHTML = `<td>${medicine.MedicineId} </td>  <td> ${medicine.MedicineName} </td> <td> ${medicine.MedicinePrice} </td> <td>${medicine.MedicineCount} </td> 
        <td>${medicine.ExpiryDate.toLocaleDateString()} </td>
        <td>
            <button onclick="editMedicine('${medicine.MedicineId}')">Edit</button>
            <button onclick="deleteMedicine('${medicine.MedicineId}')">Delete</button>
        </td>`;
        table.appendChild(row);
    });
}

let editMedicineID :string;
async function deleteMedicine(medicineID: string) {
    var index = MedicineList.findIndex((val) => val.MedicineId == medicineID);
    MedicineList.splice(index, 1);
    showmedicine();
}
async function addMedicine() {
    (document.getElementById("addEditMedicineForm") as HTMLDivElement).style.display = "block";
    editMedicineID = "";
}
async function editMedicine(medicineID: string) {
    (document.getElementById("addEditMedicineForm") as HTMLDivElement).style.display = "block";
     var medicine = MedicineList.find((val) => val.MedicineId == medicineID);
     if (medicine) {
        var name = document.getElementById("medicineName") as HTMLInputElement;
        var count = document.getElementById("medicineCount") as HTMLInputElement;
        var price = document.getElementById("medicinePrice") as HTMLInputElement;
        var expiryDate = document.getElementById("expiryDate") as HTMLInputElement;
        name.value = medicine.MedicineName;
        count.value = medicine.MedicineCount.toString();
        price.value = medicine.MedicinePrice.toString();
        expiryDate.value = medicine.ExpiryDate.toISOString().split('T')[0];
        editMedicineID = medicine.MedicineId;
    }
}

async function addEditMedicine() {
    var name = document.getElementById("medicineName") as HTMLInputElement;
    var count = document.getElementById("medicineCount") as HTMLInputElement;
    var price = document.getElementById("medicinePrice") as HTMLInputElement;
    var expiryDate = document.getElementById("expiryDate") as HTMLInputElement;
    var dateSplit: string[] = expiryDate.value.split("-");

    var medicineData = MedicineList.find(val => val.MedicineId == editMedicineID);
    if(medicineData)
    {
        medicineData.MedicineName = name.value;
        medicineData.MedicineCount = Number(count.value);
        medicineData.MedicinePrice = Number(price.value);
        medicineData.ExpiryDate = new Date(Number(dateSplit[0]), (Number(dateSplit[1]) - 1), (Number(dateSplit[2])));
        alert("Medicine details updated successfully");
        editMedicineID="";
    }
    else 
    {
        if (name.value.trim() != "") {
            MedicineList.push(new MedicineInfo(name.value, Number(count.value), Number(price.value), new Date(Number(dateSplit[0]), (Number(dateSplit[1]) - 1), Number(dateSplit[2]))));
            alert("Medicine details added successfully");
            editMedicineID="";
        }
    }
    name.value = "";
    count.value = "";
    price.value = "";
    expiryDate.value = "";
    showmedicine();
}


async function purchase() {
    displayNone();
    purchasePage.style.display = "block";
    var purchaseTable = document.getElementById("purchaseTable") as HTMLTableElement;
    var len = purchaseTable.getElementsByTagName("tr").length;
    if (purchaseTable.hasChildNodes()) {
        for (var i = len - 1; i >= 1; i--) {
            purchaseTable.removeChild(purchaseTable.children[i]);
        }
    }

    MedicineList.forEach((medicine) => {
        var row = document.createElement("tr") as HTMLTableRowElement;
        row.innerHTML = `<td>${medicine.MedicineId} </td>  <td> ${medicine.MedicineName} </td> <td> ${medicine.MedicinePrice} </td> <td>${medicine.MedicineCount} </td> 
        <td>${medicine.ExpiryDate.toLocaleDateString()} </td>
        <td>
            <button onclick="buy('${medicine.MedicineId}')">Buy</button>
        </td>`;
        purchaseTable.appendChild(row);
    });
}

async function buy(medicineID: string) {
    const medicine = MedicineList.find(med => med.MedicineId === medicineID);
    if (medicine) 
    {
        let countValue = prompt("Please enter your name:", "0");
        var count:number = Number(countValue);
        if(medicine.MedicineCount>count)
        {
            if(medicine.ExpiryDate > new Date())
            {
                
                if (currentUser.Amount >= medicine.MedicinePrice) 
                {
                    
                    medicine.MedicineCount -= Number(count);
                    currentUser.Amount -= medicine.MedicinePrice;
                    OrderList.push(new Order(currentUser.UserId, medicine.MedicineId, count, medicine.MedicinePrice, new Date(), orderStatus.purchased));
                    alert(`You have successfully purchased ${medicine.MedicineName}. Order ID is ${OrderList[OrderList.length - 1].OrderId}`);
                    order();
                }
                else 
                {
                    alert("Insufficient balance to make this purchase.");
                }
            }
            else
            {
                alert("Medicine is expired.");
            }
        }
        else
        {
            alert("Medicine is out of stock.");
        }
    } 
    else 
    {
        alert("Medicine not found.");
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

    OrderList.forEach((order) => {
        if (order.UserId == currentUser.UserId) {
            var row = document.createElement("tr") as HTMLTableRowElement;
            row.innerHTML= `<td>${order.OrderId} <td>${order.UserId}</td> <td>${order.MedicineId}</td> <td>${order.MedicineCount}</td> <td>${order.Total}</td> 
            <td>${order.OrderDate.toLocaleDateString()}</td> <td>${order.PurchaseStatus}</td>
            <td><button id="cancelbtn" onclick="cancelOrder('${order.OrderId}')">Cancel</button></td>`;
            orderTable.appendChild(row);
        }
    })
}

async function cancelOrder(orderID: string) {
    var orderData = OrderList.find(o => o.OrderId == orderID && o.UserId == currentUser.UserId && o.PurchaseStatus == orderStatus.purchased);
    if (orderData) {
   
        orderData.PurchaseStatus = orderStatus.cancelled;
            currentUser.Amount += orderData.Total;
            var medicineID = orderData.MedicineId;
            var medicine = MedicineList.find(med => med.MedicineId == medicineID);
            if (medicine) {
                medicine.MedicineCount += orderData.MedicineCount;
            }
            alert("Order Cancelled successfully");
            order();
        }
        else {
            alert("Order not found");
        }
}


async function topup() {
    displayNone();
    topPage.style.display = "block";
    (document.getElementById("currentBalance") as HTMLHeadingElement).innerHTML = `Available Balance :${currentUser.Amount}`;
}

async function deposit() {
    var amount = document.getElementById("amount") as HTMLInputElement;
    currentUser.Amount += Number(amount.value);
    alert("Amount Dposited Successfully");
    amount.value = "";
    (document.getElementById("currentBalance") as HTMLHeadingElement).innerHTML = `Available Balance :${currentUser.Amount}`;

}


async function logout() {
    displayNone();
    (document.getElementById("menu") as HTMLDivElement).style.display = "none";
    (document.getElementById("box") as HTMLDivElement).style.display = "block";
    //currentUser = null;
}