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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var itemName = document.getElementById("itemName");
var itemCount = document.getElementById("itemCount");
var itemPrice = document.getElementById("itemPrice");
var purchaseDate = document.getElementById("purchaseDate");
var expiryDate = document.getElementById("expiryDate");
var itemImage = document.getElementById("itemImage");
var temporaryCart = new Array();
//------------------------------------------------
// ---------Async Functions---------------------
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5288/users';
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch Data');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function addUser(user) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5288/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
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
function updateAmount(id, amount) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5288/users/".concat(id, "/").concat(amount), {
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
function postProduct(product) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5288/product', {
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
                    stock();
                    return [2 /*return*/];
            }
        });
    });
}
function postBooking(product) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5288/booking', {
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
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5288/product';
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
function deleteProduct(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5288/product/".concat(id), {
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
function updateProduct(id, book) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5288/product/".concat(id), {
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
//----------------------------------------------------
//---------Functions
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
        var name, email, password, cpassword, fileElement, base64, file, passReg, isavail, UserArrayList, fileReader, i;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    name = document.getElementById("name");
                    email = document.getElementById("email");
                    password = document.getElementById("password");
                    cpassword = document.getElementById("cpassword");
                    fileElement = document.getElementById("fileElement");
                    fileElement.addEventListener('change', function () {
                        var _a;
                        file = (_a = fileElement.files) === null || _a === void 0 ? void 0 : _a[0];
                    });
                    file = (_a = fileElement.files) === null || _a === void 0 ? void 0 : _a[0];
                    passReg = /[a-zA-Z]{4,6}[@!#$%&*()]{1,2}[0-9]{1,4}/;
                    if (!(password.value == cpassword.value)) return [3 /*break*/, 2];
                    isavail = true;
                    return [4 /*yield*/, fetchUsers()];
                case 1:
                    UserArrayList = _b.sent();
                    UserArrayList.forEach(function (val) {
                        if (val.email.toLowerCase() == email.value.toLowerCase()) {
                            alert("you already have an ID. Please Sign In");
                            isavail = false;
                        }
                    });
                    if (file) {
                        fileReader = new FileReader();
                        fileReader.readAsDataURL(file);
                        fileReader.addEventListener('load', function (event) {
                            var _a;
                            base64 = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                            if (isavail) {
                                addUser({ userID: undefined, name: name.value, email: email.value, password: password.value, image: [base64], amount: 0 });
                                signIn();
                            }
                        });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    i = document.getElementById("signup");
                    i.style.border = "2px solid red";
                    _b.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function signInSubmit(e) {
    e.preventDefault();
    var isavail = true;
    var email = document.getElementById("email1");
    var password = document.getElementById("password2");
    fetchUsers().then(function (UserArrayList) {
        UserArrayList.forEach(function (val) {
            if (val.email.toLowerCase() == email.value.toLowerCase() && val.password == password.value) {
                var a = document.getElementById("box");
                a.style.display = "none";
                var b = document.getElementById("menu");
                b.style.display = "block";
                isavail = false;
                currentUser = val;
                home();
                email.value = "";
                password.value = "";
                if (isavail) {
                    alert("Invalid Email or Password");
                }
            }
        });
    });
}
function home() {
    displayNone();
    homes.style.display = "block";
    var a = document.getElementById("welcome");
    var b = document.getElementById("imgTag");
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
    document.getElementById("curBalance").innerHTML = "Available Balance :".concat(currentUser.amount);
}
function show() {
    displayNone();
    showw.style.display = "block";
    var a = document.getElementById("balance");
    a.innerHTML = "Your Balance is " + currentUser.amount;
}
function deposit() {
    return __awaiter(this, void 0, void 0, function () {
        var a, amt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    a = document.getElementById("amount");
                    amt = currentUser.amount + Number(a.value);
                    return [4 /*yield*/, updateAmount(currentUser.userID, amt)];
                case 1:
                    currentUser = _a.sent();
                    alert("Amount Deposited Successfully");
                    a.value = "";
                    document.getElementById("curBalance").innerHTML = "Available Balance :".concat(currentUser.amount);
                    return [2 /*return*/];
            }
        });
    });
}
function Logout() {
    displayNone();
    document.getElementById("menu").style.display = "none";
    document.getElementById("box").style.display = "block";
}
//---------------------
function stock() {
    return __awaiter(this, void 0, void 0, function () {
        var tbody, bookList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    displayNone();
                    stocks.style.display = "block";
                    tbody = document.getElementById("tbody1");
                    tbody.innerHTML = "";
                    return [4 /*yield*/, fetchProducts()];
                case 1:
                    bookList = _a.sent();
                    bookList.forEach(function (element) {
                        if (element.quantityAvailable > 0) {
                            var row = document.createElement("tr");
                            row.innerHTML = "\n\n      <td>".concat(element.productName, "</td>\n      <td>").concat(element.quantityAvailable, "</td>\n      <td>").concat(element.pricePerQuantity, "</td>\n      <td>").concat(element.purchaseDate.split("T")[0].split("-").reverse().join("/"), "</td>\n      <td>").concat(element.expiryDate.split("T")[0].split("-").reverse().join("/"), "</td>\n      <td><img src='").concat(element.image, "'></td>\n      <td>\n      <button onclick=\"Edit(").concat(element.productID, ",'").concat(element.productName, "',").concat(element.quantityAvailable, ",").concat(element.pricePerQuantity, ",'").concat(element.purchaseDate, "','").concat(element.expiryDate, "')\">Edit</button>\n      <button onclick=\"deleteProduct(").concat(element.productID, ")\">Delete</button>\n      </td>\n      ");
                            tbody.appendChild(row);
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function Edit(id, name, quan, price, pDate, eDate) {
    form1.style.display = "block";
    curIndex = id;
    itemName.value = name;
    itemCount.value = quan + "";
    itemPrice.value = price + "";
    purchaseDate.value = pDate.split("T")[0];
    expiryDate.value = eDate.split("T")[0];
}
function Delete(id) {
    deleteProduct(id);
}
var itemBase64;
function addProductTo() {
    var _a, _b;
    if (curIndex != null) {
        var itemFile = (_a = itemImage.files) === null || _a === void 0 ? void 0 : _a[0];
        if (itemFile) {
            var fileReader = new FileReader();
            fileReader.readAsDataURL(itemFile);
            fileReader.addEventListener('load', function (event) {
                var _a;
                itemBase64 = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                if (curIndex != null) {
                    updateProduct(curIndex, {
                        productID: curIndex,
                        productName: itemName.value,
                        quantityAvailable: +itemCount.value,
                        pricePerQuantity: Number(itemPrice.value),
                        image: [itemBase64],
                        purchaseDate: new Date(purchaseDate.value).toISOString(),
                        expiryDate: new Date(expiryDate.value).toISOString()
                    });
                }
                curIndex = null;
                itemName.value = "";
                itemCount.value = "";
                itemPrice.value = "";
                purchaseDate.value = "";
                expiryDate.value = "";
            });
        }
    }
    else {
        var itemFile = (_b = itemImage.files) === null || _b === void 0 ? void 0 : _b[0];
        if (itemFile) {
            var fileReader = new FileReader();
            fileReader.readAsDataURL(itemFile);
            fileReader.addEventListener('load', function (event) {
                var _a;
                itemBase64 = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                postProduct({
                    productID: undefined,
                    productName: itemName.value,
                    quantityAvailable: +itemCount.value,
                    pricePerQuantity: Number(itemPrice.value),
                    image: [itemBase64],
                    purchaseDate: new Date(purchaseDate.value).toISOString(),
                    expiryDate: new Date(expiryDate.value).toISOString()
                });
            });
        }
    }
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
                            row.innerHTML = "\n      \n      <img src='".concat(element.image, "' height=\"100px\" width=\"100px\" alt=\"\">\n      <div class=\"product-info\">\n          <h5>").concat(element.productName, "</h2>\n          <h5> Rs. ").concat(element.pricePerQuantity, "</h2>\n      </div>\n      <button onclick=\"AddCart('").concat(element.productName, "',").concat(element.pricePerQuantity, ",").concat(element.quantityAvailable, ",").concat(element.productID, ")\"  >Add To Cart</button>\n      ");
                            tbody.appendChild(row);
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function AddCart(productName1, price, c, productID1) {
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
function buy() {
    return __awaiter(this, void 0, void 0, function () {
        var total, book;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    total = 0;
                    temporaryCart.forEach(function (val) {
                        total += val.priceOfOrder;
                    });
                    if (!(total < currentUser.amount)) return [3 /*break*/, 3];
                    return [4 /*yield*/, postBooking({
                            bookingID: undefined,
                            customerID: currentUser.userID,
                            totalPrice: total,
                            dateOfBooking: new Date().toISOString(),
                            bookingStatus: "Booked"
                        })];
                case 1:
                    book = _a.sent();
                    temporaryCart.forEach(function (data) {
                        postOrder({
                            orderID: undefined,
                            productID: data.productID,
                            bookingID: book.bookingID,
                            productName: data.productName,
                            purchaseCount: data.purchaseCount,
                            priceOfOrder: data.priceOfOrder
                        });
                        updateProductCount(data.productID, data.purchaseCount);
                    });
                    return [4 /*yield*/, updateAmount(currentUser.userID, currentUser.amount - total)];
                case 2:
                    currentUser = _a.sent();
                    temporaryCart.splice(0, temporaryCart.length);
                    cart();
                    alert("Order placed successfully !");
                    return [3 /*break*/, 4];
                case 3:
                    alert("Insufficient Balance");
                    _a.label = 4;
                case 4: return [2 /*return*/];
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
function postOrder(product) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5288/order', {
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
function updateProductCount(id, count) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5288/product/".concat(id, "/").concat(count), {
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
                    apiUrl = 'http://localhost:5288/booking';
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
                    apiUrl = 'http://localhost:5288/order';
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
        var bookingList, orderList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    displayNone();
                    historys.style.display = "block";
                    tbody.innerHTML = "";
                    return [4 /*yield*/, fetchBooking()];
                case 1:
                    bookingList = _a.sent();
                    return [4 /*yield*/, fetchOrder()];
                case 2:
                    orderList = _a.sent();
                    bookingList.forEach(function (booking) {
                        if (booking.customerID == currentUser.userID) {
                            tbody.innerHTML += "\n    <div id=\"tab\">\n    ".concat(booking.bookingStatus == "Booked" ? "<td><button onclick=\"cancelBooking(".concat(booking.bookingID, ")\">Cancel </button></td>") : "", "\n          <button onclick=\"exportData(").concat(booking.bookingID, ")\">Export </button></td>\n    </div>\n    <table id=\"tb3\">\n      <thead>\n          <tr>\n              <th>BookingID</th>\n              <th>OrderID</th>\n              <th>Name</th>\n              <th>Quantity</th>\n              <th>Price</th>\n              <th>Date</th>\n              <th>Total Price</th>\n              <th>Status</th>\n          </tr>\n      </thead>\n      <tbody id=\"fs").concat(booking.bookingID, "\">\n      </tbody>\n    </table>\n    <br>\n    <hr>\n    <br>\n");
                            var d = document.getElementById("fs".concat(booking.bookingID));
                            var flag = true;
                            orderList.forEach(function (element) {
                                if (element.bookingID == booking.bookingID) {
                                    var row = document.createElement("tr");
                                    if (flag) {
                                        row.innerHTML = " \n          <td rowspan=\"".concat(orderList.length + 1, "\">").concat(booking.bookingID, "</td>\n          <td>").concat(element.orderID, "</td>\n          <td>").concat(element.productName, "</td>\n          <td>").concat(element.purchaseCount, "</td>\n          <td>").concat(element.priceOfOrder, "</td>\n          <td rowspan=\"").concat(orderList.length + 1, "\">").concat(booking.dateOfBooking.split("T")[0].split("-").reverse().join("/"), "</td>\n          <td rowspan=\"").concat(orderList.length + 1, "\">").concat(booking.totalPrice, "</td>\n          <td rowspan=\"").concat(orderList.length + 1, "\">").concat(booking.bookingStatus, "</td>\n          ");
                                        flag = false;
                                    }
                                    else {
                                        row.innerHTML = " \n          <td>".concat(element.orderID, "</td>\n          <td>").concat(element.productName, "</td>\n          <td>").concat(element.purchaseCount, "</td>\n          <td>").concat(element.priceOfOrder, "</td>\n          ");
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
function exportData(data) {
    return __awaiter(this, void 0, void 0, function () {
        var bookingList, bookList, csvdata, a, b, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchBooking()];
                case 1:
                    bookingList = _a.sent();
                    return [4 /*yield*/, fetchOrder()];
                case 2:
                    bookList = _a.sent();
                    csvdata = "BookingID,ProduuctName,Purchasecount,Price\n";
                    bookList.forEach(function (element) {
                        if (element.bookingID == data) {
                            csvdata += "".concat(element.bookingID, ",").concat(element.productName, ",").concat(element.purchaseCount, ",").concat(element.priceOfOrder, "\n");
                        }
                    });
                    a = new Blob([csvdata], { type: 'text/csv' });
                    b = document.createElement('a');
                    url = URL.createObjectURL(a);
                    b.href = url;
                    b.download = "Bill";
                    b.click();
                    return [2 /*return*/];
            }
        });
    });
}
