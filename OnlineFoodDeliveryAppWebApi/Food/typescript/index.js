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
var orderstatus;
(function (orderstatus) {
    orderstatus[orderstatus["select"] = 0] = "select";
    orderstatus[orderstatus["Inititated"] = 1] = "Inititated";
    orderstatus[orderstatus["Ordered"] = 2] = "Ordered";
    orderstatus[orderstatus["Cancelled"] = 3] = "Cancelled";
})(orderstatus || (orderstatus = {}));
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
        var name, fathername, gender, phone, date, email, cpassword, password, isavail, UserArrayList, i;
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
                        addUser({ userID: 1000, name: name.value, fatherName: fathername.value, gender: gender.value, mobile: phone.value, dob: new Date(date.value), email: email.value, password: password.value });
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
function signInSubmit(e) {
    e.preventDefault();
    var isavail = true;
    alert("signin page");
    var email = document.getElementById("email1");
    var password = document.getElementById("password2");
    fetchUsers().then(function (UserArrayList) {
        UserArrayList.forEach(function (val) {
            if (val.email.toLowerCase() == email.value.toLowerCase() && val.password == password.value) {
                alert("user login sucessfull....");
                var a = document.getElementById("box");
                a.style.display = "none";
                var b = document.getElementById("menu");
                b.style.display = "block";
                isavail = false;
                currentUser = val;
                // home();
                email.value = "";
                password.value = "";
                if (isavail) {
                    alert("Invalid Email or Password");
                }
            }
        });
    });
}
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5103/users';
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
                case 0: return [4 /*yield*/, fetch('http://localhost:5103/users', {
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
