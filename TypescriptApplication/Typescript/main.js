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
var orderIDAutoIncrement = 1001;
var productDetailsAutoIncrement = 2001;
var CustomerIDAutoIncrement = 3001;
var orderStatus;
(function (orderStatus) {
    orderStatus["Default"] = "Default";
    orderStatus["Ordered"] = "Ordered";
    orderStatus["Cancelled"] = "Cancelled";
})(orderStatus || (orderStatus = {}));
var OrderDetails = /** @class */ (function () {
    function OrderDetails(customerID, productID, totalPrice, purchaseDate, quantity, status) {
        this.OrderID = "OID" + orderIDAutoIncrement++;
        this.CustomerID = customerID;
        this.ProductID = productID;
        this.TotalPrice = totalPrice;
        this.PurchaseDate = purchaseDate;
        this.Quantity = quantity;
        this.Status = status;
    }
    return OrderDetails;
}());
var ProductDetails = /** @class */ (function () {
    function ProductDetails(productName, stock, price, shippingDuration) {
        this.ProductID = "PID" + productDetailsAutoIncrement++;
        this.ProductName = productName;
        this.Stock = stock;
        this.Price = price;
        this.ShippingDuration = shippingDuration;
    }
    return ProductDetails;
}());
var CustomerDetails = /** @class */ (function () {
    function CustomerDetails(customerName, city, mobileNumber, emailID, password) {
        this.WalletBalance = 0;
        this.CustomerID = "CID" + CustomerIDAutoIncrement++;
        this.CustomerName = customerName;
        this.City = city;
        this.MobileNumber = mobileNumber;
        this.EmailID = emailID;
        this.Password = password;
    }
    CustomerDetails.prototype.WalletRecharge = function (amount) {
        this.WalletBalance += amount;
    };
    CustomerDetails.prototype.DeductBalance = function (amount) {
        if (amount <= this.WalletBalance) {
            this.WalletBalance -= amount;
        }
        else {
            alert("Insufficient Balance");
        }
    };
    return CustomerDetails;
}());
var CustomerDetailsList = new Array();
var ProductDetailsList = new Array();
var OrderDetailsList = new Array();
CustomerDetailsList.push(new CustomerDetails("Ravi", "Chennai", "938398398983", "Ravi@gmail.com", "ravi@123"));
CustomerDetailsList.push(new CustomerDetails("Baskaran", "Chennai", "9484984787", "baskaran@gmail.com", "bas@123"));
ProductDetailsList.push(new ProductDetails("Mobile(Samsung)", 10, 1000, 3));
ProductDetailsList.push(new ProductDetails("Camera(Sony)", 3, 20000, 4));
ProductDetailsList.push(new ProductDetails("Tablet(Lenovo)", 5, 15000, 2));
ProductDetailsList.push(new ProductDetails("Iphone", 5, 50000, 6));
ProductDetailsList.push(new ProductDetails("Laptop(LenovoI3)", 3, 40000, 3));
ProductDetailsList.push(new ProductDetails("Headphone(Boat)", 5, 1000, 2));
ProductDetailsList.push(new ProductDetails("Speakers(Boat)", 4, 500, 2));
OrderDetailsList.push(new OrderDetails("CID3001", "PID2001", 20000, new Date(Date.now()), 2, orderStatus.Ordered));
OrderDetailsList.push(new OrderDetails("CID3001", "PID2001", 20000, new Date(Date.now()), 2, orderStatus.Ordered));
// OrderDetailsList.push(new OrderDetails("OID1001", "CID3001", "PID2001", 20000, new Date(Date.now()), 2, orderStatus.Ordered));
// OrderDetailsList.push(new OrderDetails("OID1002", "CID3002", "PID2002", 25000, new Date(Date.now()), 3, orderStatus.Cancelled));
var signInForm = document.getElementById("signIn");
var signUpForm = document.getElementById("signup");
var signInButton = document.getElementById("signInButton");
var signUpButton = document.getElementById("signUpButton");
function signIn() {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
    signInButton.style.background = "orange";
    signUpButton.style.background = "none";
}
function signUp() {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
    signInButton.style.background = "none";
    signUpButton.style.background = "orange";
}
function signUpSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var name, email, password, confirmPassword, phone, city, wallletBalance, isvalid, customer, i;
        return __generator(this, function (_a) {
            event.preventDefault();
            name = document.getElementById("name");
            email = document.getElementById("email");
            password = document.getElementById("password");
            confirmPassword = document.getElementById("cpassword");
            phone = document.getElementById("phone");
            city = document.getElementById("city");
            wallletBalance = document.getElementById("walletbalance");
            isvalid = true;
            CustomerDetailsList.forEach(function (val) {
                if (val.EmailID.toLowerCase() == email.value.toLowerCase()) {
                    alert("you already have an ID.please sign in");
                    isvalid = false;
                }
            });
            if (isvalid) {
                customer = new CustomerDetails(name.value, city.value, phone.value, email.value, password.value);
                CustomerDetailsList.push(customer);
                alert("Your CustomerID is:" + customer.CustomerID);
                isvalid = false;
            }
            else {
                i = document.getElementById("signup");
                i.style.border = "2px solid red";
            }
            return [2 /*return*/];
        });
    });
}
var currentUser;
function signInSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, isvalid;
        return __generator(this, function (_a) {
            event.preventDefault();
            email = document.getElementById("email1");
            password = document.getElementById("password2");
            isvalid = false;
            CustomerDetailsList.forEach(function (val) {
                if (val.EmailID.toLowerCase() === email.value.toLowerCase() &&
                    val.Password === password.value // Password case sensitivity retained
                ) {
                    var a = document.getElementById("box");
                    a.style.display = "none";
                    // Optionally show a new menu or welcome screen
                    alert("Sign-in successful!");
                    isvalid = true;
                    var b = document.getElementById("menu");
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
            return [2 /*return*/];
        });
    });
}
var homePage = document.getElementById("homepage");
var itemPage = document.getElementById("itemPage");
var purchasePage = document.getElementById("purchasePage");
var WalletRechargePage = document.getElementById("walletRechargePage");
var orderPage = document.getElementById("orderHistoryPage");
var walletBalancePage = document.getElementById("walletBalancePage");
function home() {
    return __awaiter(this, void 0, void 0, function () {
        var welcome;
        return __generator(this, function (_a) {
            displayNone();
            homePage.style.display = "block";
            welcome = document.getElementById("welcome");
            welcome.innerHTML = "Welcome " + currentUser.CustomerName;
            return [2 /*return*/];
        });
    });
}
function displayNone() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homePage.style.display = "none";
            itemPage.style.display = "none";
            purchasePage.style.display = "none";
            WalletRechargePage.style.display = "none";
            orderPage.style.display = "none";
            walletBalancePage.style.display = "none";
            document.getElementById("addEditProductForm").style.display = "none";
            return [2 /*return*/];
        });
    });
}
function showitems() {
    return __awaiter(this, void 0, void 0, function () {
        var table, len, i;
        return __generator(this, function (_a) {
            displayNone();
            itemPage.style.display = "block";
            table = document.getElementById("itemTable");
            len = table.getElementsByTagName("tr").length;
            if (table.hasChildNodes()) {
                for (i = len - 1; i >= 1; i--) {
                    table.removeChild(table.children[i]);
                }
            }
            ProductDetailsList.forEach(function (product) {
                var row = document.createElement("tr");
                row.innerHTML = "<td>".concat(product.ProductID, " </td>  <td> ").concat(product.ProductName, " </td> <td> ").concat(product.Stock, " </td> <td>").concat(product.Price, " </td> \n        <td>").concat(product.ShippingDuration, " </td>\n        <td>\n            <button onclick=\"editProduct('").concat(product.ProductID, "')\">Edit</button>\n            <button onclick=\"deleteItem('").concat(product.ProductID, "')\">Delete</button>\n        </td>");
                table.appendChild(row);
            });
            return [2 /*return*/];
        });
    });
}
function Purchase() {
    return __awaiter(this, void 0, void 0, function () {
        var purchaseTable, len, i;
        return __generator(this, function (_a) {
            displayNone();
            purchasePage.style.display = "block";
            purchaseTable = document.getElementById("purchaseTable");
            len = purchaseTable.getElementsByTagName("tr").length;
            if (purchaseTable.hasChildNodes()) {
                for (i = len - 1; i >= 1; i--) {
                    purchaseTable.removeChild(purchaseTable.children[i]);
                }
            }
            ProductDetailsList.forEach(function (product) {
                var row = document.createElement("tr");
                row.innerHTML = "<td>".concat(product.ProductID, " </td>  <td> ").concat(product.ProductName, " </td> <td> ").concat(product.Stock, " </td> <td>").concat(product.Price, " </td> \n        <td>").concat(product.Price, " </td>\n        <td>\n            <button onclick=\"buy('").concat(product.ProductID, "')\">Buy</button>\n        </td>");
                purchaseTable.appendChild(row);
            });
            return [2 /*return*/];
        });
    });
}
function buy(productID) {
    return __awaiter(this, void 0, void 0, function () {
        var product, countValue, count;
        return __generator(this, function (_a) {
            product = ProductDetailsList.find(function (product) { return product.ProductID === productID; });
            if (product) {
                countValue = prompt("Please enter your count:", "0");
                count = Number(countValue);
                if (product.Stock > count) {
                    if (currentUser.WalletBalance >= product.Price) {
                        product.Stock -= Number(count);
                        currentUser.WalletBalance -= product.Price;
                        OrderDetailsList.push(new OrderDetails(currentUser.CustomerID, product.ProductID, product.Price, new Date(Date.now()), count, orderStatus.Ordered));
                        alert("You have successfully purchased ".concat(product.ProductName, ". Order ID is ").concat(OrderDetailsList[OrderDetailsList.length - 1].OrderID));
                        // order();
                    }
                    else {
                        alert("Insufficient balance to make this purchase.");
                    }
                }
                else {
                    alert("Product is out of stock.");
                }
            }
            else {
                alert("Product not found.");
            }
            return [2 /*return*/];
        });
    });
}
function order() {
    return __awaiter(this, void 0, void 0, function () {
        var orderTable, len, i;
        return __generator(this, function (_a) {
            displayNone();
            orderPage.style.display = "block";
            orderTable = document.getElementById("orderTable");
            len = orderTable.getElementsByTagName("tr").length;
            if (orderTable.hasChildNodes()) {
                for (i = len - 1; i >= 1; i--) {
                    orderTable.removeChild(orderTable.children[i]);
                }
            }
            OrderDetailsList.forEach(function (order) {
                if (order.CustomerID == currentUser.CustomerID) {
                    var row = document.createElement("tr");
                    row.innerHTML = "<td>".concat(order.OrderID, " <td>").concat(order.CustomerID, "</td> <td>").concat(order.ProductID, "</td> <td>").concat(order.TotalPrice, "</td> <td>").concat(order.PurchaseDate, "</td> \n            <td>").concat(order.Quantity, "</td> <td>").concat(order.Status, "</td>\n            <td><button id=\"cancelbtn\" onclick=\"cancelOrder('").concat(order.OrderID, "')\">Cancel</button></td>");
                    orderTable.appendChild(row);
                }
            });
            return [2 /*return*/];
        });
    });
}
function showBalance() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            displayNone();
            walletBalancePage.style.display = "block";
            document.getElementById("currentBalance1").innerHTML = "Available Balance :".concat(currentUser.WalletBalance);
            return [2 /*return*/];
        });
    });
}
function WalletRecharge() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            displayNone();
            WalletRechargePage.style.display = "block";
            document.getElementById("currentBalance").innerHTML = "Available Balance :".concat(currentUser.WalletBalance);
            return [2 /*return*/];
        });
    });
}
function deposit() {
    return __awaiter(this, void 0, void 0, function () {
        var amount;
        return __generator(this, function (_a) {
            amount = document.getElementById("amount");
            currentUser.WalletBalance += Number(amount.value);
            alert("Amount Dposited Successfully");
            amount.value = "";
            document.getElementById("currentBalance").innerHTML = "Available Balance :".concat(currentUser.WalletBalance);
            return [2 /*return*/];
        });
    });
}
function cancelOrder(orderID) {
    return __awaiter(this, void 0, void 0, function () {
        var orderData, ProductID, product;
        return __generator(this, function (_a) {
            orderData = OrderDetailsList.find(function (o) { return o.OrderID == orderID && o.CustomerID == currentUser.CustomerID && o.Status == orderStatus.Ordered; });
            if (orderData) {
                orderData.Status = orderStatus.Cancelled;
                currentUser.WalletBalance += orderData.TotalPrice;
                ProductID = orderData.ProductID;
                product = ProductDetailsList.find(function (p) { return p.ProductID == ProductID; });
                if (product) {
                    product.Stock += orderData.Quantity;
                }
                alert("Order Cancelled successfully");
                order();
            }
            else {
                alert("Order not found");
            }
            return [2 /*return*/];
        });
    });
}
var editProductID;
function deleteItem(ProductID) {
    return __awaiter(this, void 0, void 0, function () {
        var index;
        return __generator(this, function (_a) {
            index = ProductDetailsList.findIndex(function (val) { return val.ProductID == ProductID; });
            ProductDetailsList.splice(index, 1);
            showitems();
            return [2 /*return*/];
        });
    });
}
function addProduct() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            document.getElementById("addEditProductForm").style.display = "block";
            editProductID = "";
            return [2 /*return*/];
        });
    });
}
function editProduct(ProductID) {
    return __awaiter(this, void 0, void 0, function () {
        var Product, ProductName, Stock, Price, ShippingDuration;
        return __generator(this, function (_a) {
            document.getElementById("addEditProductForm").style.display = "block";
            Product = ProductDetailsList.find(function (val) { return val.ProductID == ProductID; });
            if (Product) {
                ProductName = document.getElementById("ProductName");
                Stock = document.getElementById("Stock");
                Price = document.getElementById("Price");
                ShippingDuration = document.getElementById("ShippingDuration");
                ProductName.value = Product.ProductName;
                Stock.value = Product.Stock.toString();
                Price.value = Product.Price.toString();
                ShippingDuration.value = Product.ShippingDuration.toString();
            }
            return [2 /*return*/];
        });
    });
}
function addEditProduct() {
    return __awaiter(this, void 0, void 0, function () {
        var ProductName, Stock, Price, ShippingDuration, ProductData;
        return __generator(this, function (_a) {
            ProductName = document.getElementById("ProductName");
            Stock = document.getElementById("Stock");
            Price = document.getElementById("Price");
            ShippingDuration = document.getElementById("ShippingDuration");
            ProductData = ProductDetailsList.find(function (val) { return val.ProductID == editProductID; });
            if (ProductData) {
                ProductData.ProductName = ProductName.value;
                ProductData.Stock = Number(Stock.value);
                ProductData.Price = Number(Price.value);
                ProductData.ShippingDuration = Number(ShippingDuration.value);
                alert("Product Details updated successfully");
                editProductID = "";
            }
            else {
                if (ProductName.value.trim() != "") {
                    ProductDetailsList.push(new ProductDetails(ProductName.value, Number(Stock.value), Number(Price.value), Number(ShippingDuration.value)));
                    alert("Product Details added successfully");
                    editProductID = "";
                }
            }
            ProductName.value = "";
            Stock.value = "";
            Price.value = "";
            ShippingDuration.value = "";
            showitems();
            return [2 /*return*/];
        });
    });
}
