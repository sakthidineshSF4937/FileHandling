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
var UserIdAutoIncrement = 1000;
var MedicineIdAutoIncrement = 100;
var OrderIdAutoIncrement = 2000;
var User = /** @class */ (function () {
    function User(name, email, password, paramUserPhoneNumber) {
        this.Amount = 0;
        this.UserId = "UID" + UserIdAutoIncrement++;
        this.Name = name;
        this.Email = email;
        this.Password = password;
        this.UserPhoneNumber = paramUserPhoneNumber;
    }
    return User;
}());
var MedicineInfo = /** @class */ (function () {
    function MedicineInfo(paramMedicineName, paramMedicineCount, paramMedicinePrice, expiryDate) {
        this.MedicineId = "MD" + MedicineIdAutoIncrement++;
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
        this.ExpiryDate = expiryDate;
    }
    return MedicineInfo;
}());
var orderStatus;
(function (orderStatus) {
    orderStatus["purchased"] = "Purchased";
    orderStatus["cancelled"] = "Cancelled";
})(orderStatus || (orderStatus = {}));
var Order = /** @class */ (function () {
    function Order(userID, medicineID, Count, total, date, order) {
        this.OrderId = "OID" + OrderIdAutoIncrement++;
        this.MedicineId = medicineID;
        this.UserId = userID;
        this.Total = total;
        this.OrderDate = date;
        this.MedicineCount = Count;
        this.PurchaseStatus = order;
    }
    return Order;
}());
var UserArrayList = new Array();
UserArrayList.push(new User("Ravi", "ravi@gmail.com", "Ravi@1", "9789011226"));
UserArrayList.push(new User("Baskaran", "baskaran@gmail.com", "Baskaran@1", "9445153060"));
var MedicineList = new Array();
MedicineList.push(new MedicineInfo("Paracetomol", 5, 5, new Date(2024, 6, 30)));
MedicineList.push(new MedicineInfo("Colpal", 5, 5, new Date(2024, 5, 30)));
MedicineList.push(new MedicineInfo("Gelucil", 5, 40, new Date(2024, 4, 30)));
MedicineList.push(new MedicineInfo("Metrogel", 5, 50, new Date(2024, 12, 30)));
MedicineList.push(new MedicineInfo("Povidin Iodin", 5, 50, new Date(2024, 10, 30)));
var OrderList = new Array();
OrderList.push(new Order("UID1001", "MD101", 3, 15, new Date(2022, 11, 13), orderStatus.purchased));
OrderList.push(new Order("UID1001", "MD102", 2, 10, new Date(2022, 11, 13), orderStatus.cancelled));
OrderList.push(new Order("UID1001", "MD104", 3, 100, new Date(2022, 11, 13), orderStatus.purchased));
OrderList.push(new Order("UID1002", "MD103", 3, 120, new Date(2022, 11, 13), orderStatus.cancelled));
OrderList.push(new Order("UID1002", "MD105", 5, 250, new Date(2022, 11, 13), orderStatus.purchased));
OrderList.push(new Order("UID1002", "MD102", 3, 15, new Date(2022, 11, 13), orderStatus.purchased));
var currentUser;
var homePage = document.getElementById("homePage");
var medicinePage = document.getElementById("medicinePage");
var purchasePage = document.getElementById("purchasePage");
var topPage = document.getElementById("topUpPage");
var orderPage = document.getElementById("orderPage");
var signInForm = document.getElementById("signIn");
var signUpForm = document.getElementById("signUp");
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
function signUpSubmit(e) {
    return __awaiter(this, void 0, void 0, function () {
        var name, email, password, cpassword, phone, isavail, user, i;
        return __generator(this, function (_a) {
            e.preventDefault();
            name = document.getElementById("name");
            email = document.getElementById("email");
            password = document.getElementById("password");
            cpassword = document.getElementById("cpassword");
            phone = document.getElementById("phone");
            isavail = true;
            UserArrayList.forEach(function (val) {
                if (val.Email.toLowerCase() == email.value.toLowerCase()) {
                    alert("you already have an ID. Please Sign In");
                    isavail = false;
                }
            });
            if (isavail) {
                user = new User(name.value, email.value, password.value, phone.value);
                UserArrayList.push(user);
                alert("Your User ID is " + user.UserId);
                isavail = false;
            }
            else {
                i = document.getElementById("signup");
                i.style.border = "2px solid red";
            }
            return [2 /*return*/];
        });
    });
}
function signInSubmit(e) {
    return __awaiter(this, void 0, void 0, function () {
        var isavail, email, password;
        return __generator(this, function (_a) {
            e.preventDefault();
            isavail = true;
            email = document.getElementById("email1");
            password = document.getElementById("password2");
            UserArrayList.forEach(function (val) {
                if (val.Email.toLowerCase() == email.value.toLowerCase() && val.Password == password.value) {
                    var a = document.getElementById("box");
                    a.style.display = "none";
                    var b = document.getElementById("menu");
                    b.style.display = "block";
                    isavail = false;
                    currentUser = val;
                    home();
                    email.value = "";
                    password.value = "";
                }
            });
            if (isavail) {
                alert("Invalid Email or Password");
            }
            return [2 /*return*/];
        });
    });
}
function home() {
    return __awaiter(this, void 0, void 0, function () {
        var welcome;
        return __generator(this, function (_a) {
            displayNone();
            homePage.style.display = "block";
            welcome = document.getElementById("welcome");
            welcome.innerHTML = "Welcome " + currentUser.Name;
            return [2 /*return*/];
        });
    });
}
function displayNone() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homePage.style.display = "none";
            medicinePage.style.display = "none";
            purchasePage.style.display = "none";
            topPage.style.display = "none";
            orderPage.style.display = "none";
            document.getElementById("addEditMedicineForm").style.display = "none";
            return [2 /*return*/];
        });
    });
}
function showmedicine() {
    return __awaiter(this, void 0, void 0, function () {
        var table, len, i;
        return __generator(this, function (_a) {
            displayNone();
            medicinePage.style.display = "block";
            table = document.getElementById("medicineTable");
            len = table.getElementsByTagName("tr").length;
            if (table.hasChildNodes()) {
                for (i = len - 1; i >= 1; i--) {
                    table.removeChild(table.children[i]);
                }
            }
            MedicineList.forEach(function (medicine) {
                var row = document.createElement("tr");
                row.innerHTML = "<td>".concat(medicine.MedicineId, " </td>  <td> ").concat(medicine.MedicineName, " </td> <td> ").concat(medicine.MedicinePrice, " </td> <td>").concat(medicine.MedicineCount, " </td> \n        <td>").concat(medicine.ExpiryDate.toLocaleDateString(), " </td>\n        <td>\n            <button onclick=\"editMedicine('").concat(medicine.MedicineId, "')\">Edit</button>\n            <button onclick=\"deleteMedicine('").concat(medicine.MedicineId, "')\">Delete</button>\n        </td>");
                table.appendChild(row);
            });
            return [2 /*return*/];
        });
    });
}
var editMedicineID;
function deleteMedicine(medicineID) {
    return __awaiter(this, void 0, void 0, function () {
        var index;
        return __generator(this, function (_a) {
            index = MedicineList.findIndex(function (val) { return val.MedicineId == medicineID; });
            MedicineList.splice(index, 1);
            showmedicine();
            return [2 /*return*/];
        });
    });
}
function addMedicine() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            document.getElementById("addEditMedicineForm").style.display = "block";
            editMedicineID = "";
            return [2 /*return*/];
        });
    });
}
function editMedicine(medicineID) {
    return __awaiter(this, void 0, void 0, function () {
        var medicine, name, count, price, expiryDate;
        return __generator(this, function (_a) {
            document.getElementById("addEditMedicineForm").style.display = "block";
            medicine = MedicineList.find(function (val) { return val.MedicineId == medicineID; });
            if (medicine) {
                name = document.getElementById("medicineName");
                count = document.getElementById("medicineCount");
                price = document.getElementById("medicinePrice");
                expiryDate = document.getElementById("expiryDate");
                name.value = medicine.MedicineName;
                count.value = medicine.MedicineCount.toString();
                price.value = medicine.MedicinePrice.toString();
                expiryDate.value = medicine.ExpiryDate.toISOString().split('T')[0];
                editMedicineID = medicine.MedicineId;
            }
            return [2 /*return*/];
        });
    });
}
function addEditMedicine() {
    return __awaiter(this, void 0, void 0, function () {
        var name, count, price, expiryDate, dateSplit, medicineData;
        return __generator(this, function (_a) {
            name = document.getElementById("medicineName");
            count = document.getElementById("medicineCount");
            price = document.getElementById("medicinePrice");
            expiryDate = document.getElementById("expiryDate");
            dateSplit = expiryDate.value.split("-");
            medicineData = MedicineList.find(function (val) { return val.MedicineId == editMedicineID; });
            if (medicineData) {
                medicineData.MedicineName = name.value;
                medicineData.MedicineCount = Number(count.value);
                medicineData.MedicinePrice = Number(price.value);
                medicineData.ExpiryDate = new Date(Number(dateSplit[0]), (Number(dateSplit[1]) - 1), (Number(dateSplit[2])));
                alert("Medicine details updated successfully");
                editMedicineID = "";
            }
            else {
                if (name.value.trim() != "") {
                    MedicineList.push(new MedicineInfo(name.value, Number(count.value), Number(price.value), new Date(Number(dateSplit[0]), (Number(dateSplit[1]) - 1), Number(dateSplit[2]))));
                    alert("Medicine details added successfully");
                    editMedicineID = "";
                }
            }
            name.value = "";
            count.value = "";
            price.value = "";
            expiryDate.value = "";
            showmedicine();
            return [2 /*return*/];
        });
    });
}
function purchase() {
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
            MedicineList.forEach(function (medicine) {
                var row = document.createElement("tr");
                row.innerHTML = "<td>".concat(medicine.MedicineId, " </td>  <td> ").concat(medicine.MedicineName, " </td> <td> ").concat(medicine.MedicinePrice, " </td> <td>").concat(medicine.MedicineCount, " </td> \n        <td>").concat(medicine.ExpiryDate.toLocaleDateString(), " </td>\n        <td>\n            <button onclick=\"buy('").concat(medicine.MedicineId, "')\">Buy</button>\n        </td>");
                purchaseTable.appendChild(row);
            });
            return [2 /*return*/];
        });
    });
}
function buy(medicineID) {
    return __awaiter(this, void 0, void 0, function () {
        var medicine, countValue, count;
        return __generator(this, function (_a) {
            medicine = MedicineList.find(function (med) { return med.MedicineId === medicineID; });
            if (medicine) {
                countValue = prompt("Please enter your name:", "0");
                count = Number(countValue);
                if (medicine.MedicineCount > count) {
                    if (medicine.ExpiryDate > new Date()) {
                        if (currentUser.Amount >= medicine.MedicinePrice) {
                            medicine.MedicineCount -= Number(count);
                            currentUser.Amount -= medicine.MedicinePrice;
                            OrderList.push(new Order(currentUser.UserId, medicine.MedicineId, count, medicine.MedicinePrice, new Date(), orderStatus.purchased));
                            alert("You have successfully purchased ".concat(medicine.MedicineName, ". Order ID is ").concat(OrderList[OrderList.length - 1].OrderId));
                            order();
                        }
                        else {
                            alert("Insufficient balance to make this purchase.");
                        }
                    }
                    else {
                        alert("Medicine is expired.");
                    }
                }
                else {
                    alert("Medicine is out of stock.");
                }
            }
            else {
                alert("Medicine not found.");
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
            OrderList.forEach(function (order) {
                if (order.UserId == currentUser.UserId) {
                    var row = document.createElement("tr");
                    row.innerHTML = "<td>".concat(order.OrderId, " <td>").concat(order.UserId, "</td> <td>").concat(order.MedicineId, "</td> <td>").concat(order.MedicineCount, "</td> <td>").concat(order.Total, "</td> \n            <td>").concat(order.OrderDate.toLocaleDateString(), "</td> <td>").concat(order.PurchaseStatus, "</td>\n            <td><button id=\"cancelbtn\" onclick=\"cancelOrder('").concat(order.OrderId, "')\">Cancel</button></td>");
                    orderTable.appendChild(row);
                }
            });
            return [2 /*return*/];
        });
    });
}
function cancelOrder(orderID) {
    return __awaiter(this, void 0, void 0, function () {
        var orderData, medicineID, medicine;
        return __generator(this, function (_a) {
            orderData = OrderList.find(function (o) { return o.OrderId == orderID && o.UserId == currentUser.UserId && o.PurchaseStatus == orderStatus.purchased; });
            if (orderData) {
                orderData.PurchaseStatus = orderStatus.cancelled;
                currentUser.Amount += orderData.Total;
                medicineID = orderData.MedicineId;
                medicine = MedicineList.find(function (med) { return med.MedicineId == medicineID; });
                if (medicine) {
                    medicine.MedicineCount += orderData.MedicineCount;
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
function topup() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            displayNone();
            topPage.style.display = "block";
            document.getElementById("currentBalance").innerHTML = "Available Balance :".concat(currentUser.Amount);
            return [2 /*return*/];
        });
    });
}
function deposit() {
    return __awaiter(this, void 0, void 0, function () {
        var amount;
        return __generator(this, function (_a) {
            amount = document.getElementById("amount");
            currentUser.Amount += Number(amount.value);
            alert("Amount Dposited Successfully");
            amount.value = "";
            document.getElementById("currentBalance").innerHTML = "Available Balance :".concat(currentUser.Amount);
            return [2 /*return*/];
        });
    });
}
function logout() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            displayNone();
            document.getElementById("menu").style.display = "none";
            document.getElementById("box").style.display = "block";
            return [2 /*return*/];
        });
    });
}
