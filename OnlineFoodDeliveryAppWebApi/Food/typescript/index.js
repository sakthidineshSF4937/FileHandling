var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var temporaryCart = new Array();
//  var temporaryCart: Array<{productID: number, productName: string, purchaseCount: number, priceOfOrder: number }> = new Array<{ cartID: number, productID: number, productName: string, purchaseCount: number, priceOfOrder: number }>(); 
var currentUser;
var curIndex;
var sign1 = document.getElementById("signin");
var sign2 = document.getElementById("signup");
var sign3 = document.getElementById("si");
var sign4 = document.getElementById("su");
var homes = document.getElementById("home");
var stocks = document.getElementById("stock");
var purchases = document.getElementById("purchase");
var historys = document.getElementById("history");
var topp = document.getElementById("top");
var showw = document.getElementById("show");
var carts = document.getElementById("cart");
var form1 = document.getElementById("form1");
var foodID = document.getElementById("FoodID");
var foodName = document.getElementById("FoodName");
var pricePerQuantity = document.getElementById("PricePerQuantity");
var purchaseDate = document.getElementById("QuantityAvailable");
var itemName = document.getElementById("itemName");
var itemCount = document.getElementById("itemCount");
var itemPrice = document.getElementById("itemPrice");
function signIn() {
    sign1.style.display = "block";
    sign2.style.display = "none";
    sign3.style.background = "orange";
    sign4.style.background = "none";
}
function signUp() {
    sign1.style.display = "none";
    sign2.style.display = "block";
    sign3.style.background = "none";
    sign4.style.background = "orange";
}
function signUpSubmit(e) {
    return __awaiter(this, void 0, void 0, function () {
        var name, fathername, gender, phone, date, email, cpassword, password, location, isavail, UserArrayList, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    alert("hello world");
                    e.preventDefault();
                    name = document.getElementById("name");
                    fathername = document.getElementById("fatherName");
                    gender = document.getElementById("gender");
                    phone = document.getElementById("phone");
                    date = document.getElementById("dob");
                    email = document.getElementById("email");
                    cpassword = document.getElementById("cpassword");
                    password = document.getElementById("password");
                    location = document.getElementById("location");
                    if (!(password.value == cpassword.value)) return [3 /*break*/, 2];
                    isavail = true;
                    return [4 /*yield*/, fetchUsers()];
                case 1:
                    UserArrayList = _a.sent();
                    UserArrayList.forEach(function (val) {
                        if (val.email.toLowerCase() == email.value.toLowerCase()) {
                            alert("you already have an ID. Please Sign In");
                            isavail = false;
                        }
                    });
                    if (isavail) {
                        addUser({ customerID: 1, name: name.value, fatherName: fathername.value, gender: gender.value, mobile: phone.value, dob: new Date(date.value), email: email.value, password: password.value, location: location.value, walletBalance: 0 });
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
                        alert("Form Submitted Sucessfully");
                        signIn();
                    }
                    return [3 /*break*/, 3];
                case 2:
                    i = document.getElementById("signup");
                    i.style.border = "2px solid red";
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
var b = document.getElementById("menu");
function signInSubmit(e) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, users, user, a, b, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    email = document.getElementById("email1").value;
                    password = document.getElementById("password2").value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetchUsers()];
                case 2:
                    users = _a.sent();
                    user = users.find(function (u) { return u.email.toLowerCase() === email.toLowerCase() && u.password === password; });
                    if (user) {
                        alert('User login successful');
                        a = document.getElementById("box");
                        a.style.display = "none";
                        b = document.getElementById("menu");
                        b.style.display = "block";
                        currentUser = user;
                        home();
                    }
                    else {
                        alert('Invalid email or password');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:5103/users')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch users');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    alert('Error fetching users');
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
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
function addUser(user) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5103/users', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(user),
                    })];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.text()];
                case 2:
                    error = _a.sent();
                    console.error("Error: ".concat(error));
                    alert("Failed to add user: ".concat(error));
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function home() {
    displayNone();
    homes.style.display = "block";
    var a = document.getElementById("welcome");
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
    document.getElementById("curBalance").innerHTML = "Available Balance :".concat(currentUser.walletBalance);
}
function show() {
    displayNone();
    showw.style.display = "block";
    var a = document.getElementById("balance");
    a.innerHTML = "Your Balance is " + currentUser.walletBalance;
}
function deposit() {
    return __awaiter(this, void 0, void 0, function () {
        var a, amt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    a = document.getElementById("amount");
                    amt = currentUser.walletBalance + Number(a.value);
                    return [4 /*yield*/, updateAmount(currentUser.customerID, amt)];
                case 1:
                    currentUser = _a.sent();
                    alert("Amount Deposited Successfully");
                    a.value = "";
                    document.getElementById("curBalance").innerHTML = "Available Balance :".concat(currentUser.walletBalance);
                    return [2 /*return*/];
            }
        });
    });
}
function updateAmount(id, amount) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5103/users/".concat(id, "/").concat(amount), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('failed to fetch Data');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function Logout() {
    displayNone();
    document.getElementById("menu").style.display = "none";
    document.getElementById("box").style.display = "block";
}
function stock() {
    return __awaiter(this, void 0, void 0, function () {
        var tbody, foodlist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    displayNone();
                    stocks.style.display = "block";
                    tbody = document.getElementById("tbody1");
                    tbody.innerHTML = "";
                    return [4 /*yield*/, fetchProducts()];
                case 1:
                    foodlist = _a.sent();
                    console.log(foodlist);
                    foodlist.forEach(function (element) {
                        if (element.quantityAvailable > 0) {
                            var row = document.createElement("tr");
                            row.innerHTML = "\n      <td>".concat(element.foodID, "</td>\n      <td>").concat(element.foodName, "</td>\n      <td>").concat(element.pricePerQuantity, "</td>\n      <td>").concat(element.quantityAvailable, "</td>\n      <td>\n      <button onclick=\"Edit(").concat(element.foodID, ",'").concat(element.foodName, "',").concat(element.pricePerQuantity, ",").concat(element.quantityAvailable, ")\">Edit</button>\n      <button onclick=\"deleteProduct(").concat(element.foodID, ")\">Delete</button>\n      </td>\n      ");
                            tbody.appendChild(row);
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function Edit(id, name, price, quan) {
    form1.style.display = "block";
    curIndex = id;
    itemName.value = name;
    itemCount.value = quan + "";
    itemPrice.value = price + "";
}
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    alert("helloworld");
                    apiUrl = 'http://localhost:5103/Food';
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('failed to fetch Data');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function Delete(id) {
    deleteProduct(id);
}
function deleteProduct(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5103/Food/".concat(id), {
                        method: 'DELETE'
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to delete contact');
                    }
                    // bookDetails();
                    stock();
                    return [2 /*return*/];
            }
        });
    });
}
var itemBase64;
function addProductTo() {
    if (curIndex != null) {
        updateProduct(curIndex, {
            foodID: curIndex,
            foodName: itemName.value,
            quantityAvailable: +itemCount.value,
            pricePerQuantity: Number(itemPrice.value)
        });
        curIndex = null;
        itemName.value = "";
        itemCount.value = "";
        itemPrice.value = "";
    }
    else {
        alert("else");
        postProduct({
            foodID: undefined,
            foodName: itemName.value,
            quantityAvailable: +itemCount.value,
            pricePerQuantity: Number(itemPrice.value)
        });
    }
}
function postProduct(product) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5103/Food', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })];
                case 1:
                    response = _a.sent();
                    stock();
                    return [2 /*return*/];
            }
        });
    });
}
function updateProduct(id, book) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5103/Food/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(book)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to update contact');
                    }
                    stock();
                    return [2 /*return*/];
            }
        });
    });
}
//-----------------------
function purchase() {
    return __awaiter(this, void 0, void 0, function () {
        var tbody, bookList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    displayNone();
                    purchases.style.display = "block";
                    tbody = document.getElementById("product-cont");
                    console.log(tbody);
                    tbody.innerHTML = "";
                    return [4 /*yield*/, fetchProducts()];
                case 1:
                    bookList = _a.sent();
                    bookList.forEach(function (element) {
                        if (element.quantityAvailable > 0) {
                            var row = document.createElement("div");
                            row.className = "product-card";
                            row.innerHTML = "\n      <div class=\"product-info\">\n          <h5>".concat(element.foodName, "</h2>\n          <h5> Rs. ").concat(element.pricePerQuantity, "</h2>\n      </div>\n      <button onclick=\"AddCart(").concat(element.foodID, ",'").concat(element.foodName, "',").concat(element.pricePerQuantity, ",").concat(element.quantityAvailable, ")\"  >Add To Cart</button>\n      ");
                            tbody.appendChild(row);
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function AddCart(productID1, productName1, price, c) {
    var count = Number(prompt("Enter Quantity"));
    if (count <= c) {
        temporaryCart.push({ cartID: temporaryCart.length + 1, productID: productID1, productName: productName1, purchaseCount: count, priceOfOrder: count * price });
    }
    else {
        alert("Entered Qunatity Not Available \n Available Count:".concat(c));
    }
}
function cart() {
    return __awaiter(this, void 0, void 0, function () {
        var tbody;
        return __generator(this, function (_a) {
            displayNone();
            carts.style.display = "block";
            tbody = document.getElementById("tbody3");
            tbody.innerHTML = "";
            // var bookList= await fetchProducts();
            temporaryCart.forEach(function (element) {
                var row = document.createElement("tr");
                row.innerHTML = "\n\n      <td>".concat(element.productName, "</td>\n      <td>").concat(element.purchaseCount, "</td>\n      <td>").concat(element.priceOfOrder, "</td>\n      <td>\n      <button onclick=\"deleteID(").concat(element.cartID, ")\">Delete</button>\n      </td>\n      ");
                tbody.appendChild(row);
            });
            return [2 /*return*/];
        });
    });
}
function postBooking(product) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5103/orders', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function buy() {
    return __awaiter(this, void 0, void 0, function () {
        var total;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    total = 0;
                    temporaryCart.forEach(function (val) {
                        total += val.priceOfOrder;
                    });
                    if (!(total < currentUser.walletBalance)) return [3 /*break*/, 2];
                    // var book: OrderDetails = await postBooking({
                    //   // orderID: undefined,
                    //   // CustomerID: currentUser.customerID,
                    //   // TotalPrice: total,
                    //   // DateOfOrder: new Date().toISOString(),
                    //   // OrderStatus: "Booked"
                    // })
                    temporaryCart.forEach(function (data) {
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
                    });
                    postOrder({ orderID: 0, CustomerID: currentUser.customerID, TotalPrice: total, DateOfOrder: new Date().toISOString(), OrderStatus: "ordered" });
                    return [4 /*yield*/, updateAmount(currentUser.customerID, currentUser.walletBalance - total)];
                case 1:
                    currentUser = _a.sent();
                    temporaryCart.splice(0, temporaryCart.length);
                    cart();
                    alert("Order placed successfully !");
                    return [3 /*break*/, 3];
                case 2:
                    alert("Insufficient Balance");
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function postOrder(product) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5103/order', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('failed to fetch Data');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function cancelBooking(id) {
    return __awaiter(this, void 0, void 0, function () {
        var bookingList, booking;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchBooking()];
                case 1:
                    bookingList = _a.sent();
                    booking = bookingList.find(function (value) { return value.bookingID == id; });
                    if (!(booking != undefined && booking.customerID == currentUser.userID && booking.bookingStatus == "Booked")) return [3 /*break*/, 4];
                    booking.bookingStatus = "Cancelled";
                    return [4 /*yield*/, updateAmount(currentUser.userID, currentUser.amount + booking.totalPrice)];
                case 2:
                    currentUser = _a.sent();
                    return [4 /*yield*/, updateBooking(id, booking)];
                case 3:
                    _a.sent();
                    bookingHistory();
                    stock();
                    alert("Booking Cancelled");
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function updateBooking(id, booking) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5288/booking/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(booking)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('failed to fetch Data');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function deleteID(id) {
    var a = temporaryCart.findIndex(function (value) { return value.cartID == id; });
    temporaryCart.splice(a, 1);
    cart();
}
function addGrocery() {
    form1.style.display = "block";
}
//------------------
function updateProductCount(id, count) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5103/product/".concat(id, "/").concat(count), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('failed to fetch Data');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function fetchBooking() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5103/orders';
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('failed to fetch Data');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function fetchOrder() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5103/order';
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('failed to fetch Data');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//order history
var tbody = document.getElementById("history");
function bookingHistory() {
    return __awaiter(this, void 0, void 0, function () {
        var tbody, orderList, headingRow;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    displayNone();
                    historys.style.display = "block";
                    tbody = document.getElementById("tbody2");
                    tbody.innerHTML = "";
                    return [4 /*yield*/, fetchBooking()];
                case 1:
                    orderList = _a.sent();
                    displayNone();
                    historys.style.display = "block";
                    console.log("fetched history" + JSON.stringify(orderList));
                    headingRow = document.createElement("tr");
                    // var orderList = await fetchOrder();
                    orderList.forEach(function (booking) {
                        if (booking.CustomerID == currentUser.customerID) {
                            tbody.innerHTML += "<div id=\"tab\">\n    ".concat(booking.OrderStatus == "Booked" ? "<td><button onclick=\"cancelBooking(".concat(booking.orderID, ")\">Cancel </button></td>") : "", "\n          <button onclick=\"exportData(").concat(booking.orderID, ")\">Export </button></td>\n    </div>\n    <table id=\"tb3\">\n      <thead>\n          <tr>\n              <th>BookingID</th>\n              <th>OrderID</th>\n              <th>Name</th>\n              <th>Quantity</th>\n              <th>Price</th>\n              <th>Date</th>\n              <th>Total Price</th>\n              <th>Status</th>\n          </tr>\n      </thead>\n      <tbody id=\"fs").concat(booking.orderID, "\">\n      </tbody>\n    </table>\n    <br>\n    <hr>\n    <br>\n");
                            var d = document.getElementById("fs".concat(booking.orderID));
                            var flag = true;
                            orderList.forEach(function (element) {
                                if (element.orderID == booking.orderID) {
                                    var row = document.createElement("tr");
                                    if (flag) {
                                        row.innerHTML = " \n          <td rowspan=\"".concat(orderList.length + 1, "\">").concat(booking.orderID, "</td>\n          <td>").concat(element.orderID, "</td>\n          <td>").concat(element.CustomerID, "</td>\n          <td rowspan=\"").concat(orderList.length + 1, "\">").concat(element.DateOfOrder.split("T")[0].split("-").reverse().join("/"), "</td>\n          <td rowspan=\"").concat(orderList.length + 1, "\">").concat(element.OrderStatus, "</td>\n          <td rowspan=\"").concat(orderList.length + 1, "\">").concat(element.TotalPrice, "</td>\n          ");
                                        flag = false;
                                    }
                                    else {
                                        row.innerHTML = " \n          <td>".concat(element.orderID, "</td>\n          <td>").concat(element.CustomerID, "</td>\n          <td>").concat(element.DateOfOrder, "</td>\n          <td>").concat(element.OrderStatus, "</td>\n           <td>").concat(element.TotalPrice, "</td>\n          ");
                                    }
                                    d.appendChild(row);
                                }
                            });
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
