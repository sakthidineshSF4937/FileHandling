var iscondition=false;

var name1=document.getElementById("name");
var namespan=document.getElementById("namespan")

name1.addEventListener("input", () => {
    var regex = /^([a-zA-Z]+)$/; // Match only letters
    if (regex.test(name1.value)) {
        iscondition=true;
        namespan.style.color = "green";
        namespan.innerHTML = "Valid";
        name1.style.borderColor="green";
        namespan.style.visibility = "visible";
    } else {
        iscondition=false;
        namespan.style.color = "red";
        name1.style.borderColor="red";
        namespan.innerHTML = "Enter a valid name (letters only)";
        namespan.style.visibility = "visible";
    }
});

var fathername=document.getElementById("fathername");
var fathernamespan=document.getElementById("fathernamespan")
fathername.addEventListener("input", () => {
    var regex = /^([a-zA-Z]+)$/; // Match only letters
    if (regex.test(fathername.value)) {
        iscondition=true;
        fathernamespan.style.color = "green";
        fathernamespan.innerHTML = "Valid";
        fathername.style.borderColor="green";
        fathernamespan.style.visibility = "visible";
    } else {
        iscondition=false;
        fathernamespan.style.color = "red";
        fathername.style.borderColor="red";
        fathernamespan.innerHTML = "Enter a valid name (letters only)";
        fathernamespan.style.visibility = "visible";
    }
});
var email=document.getElementById("email");
var emailspan=document.getElementById("emailspan")
email.addEventListener("input",()=>{
    var regex=/^([a-zA-Z0-9\.-]+)@([a-zA-Z]{2,20}).([a-zA-Z]+)$/;
    if(regex.test(email.value)){
        iscondition=true;
        emailspan.style.color="green";
        emailspan.innerHTML="Valid";
        email.style.borderColor="green";
        emailspan.style.visibility="visible";
    
    }
    else{
        iscondition=false;
        emailspan.style.color="red";
        email.style.borderColor="red";
        emailspan.innerHTML="Enter a valid email";
        emailspan.style.visibility="visible";
    }
})
var date=document.getElementById("date");
var datespan=document.getElementById("datespan")
// Date validation
date.addEventListener("input", () => {
    if (!date.value.trim()) {
        iscondition=false;
        datespan.style.color = "red";
        datespan.innerHTML = "Enter a valid date";
        datespan.style.visibility = "visible";
        date.style.borderColor = "red";
    } else {
        iscondition=true;
        datespan.style.color = "green";
        datespan.innerHTML = "Valid date";
        datespan.style.visibility = "visible";
        date.style.borderColor = "green";
    }
});
var phone=document.getElementById("phone");
var datespan=document.getElementById("phonespan")

phone.addEventListener("input",()=>{
    
    var regex=/^([0-9]{10})$/
    if(regex.test(phone.value)){
        iscondition=true;
        phonespan.style.color="green";
        phonespan.innerHTML="Valid";
        phone.style.borderColor="green";
        phonespan.style.visibility="visible";
    }
    else{
        iscondition=false;
        phonespan.style.color="red";
        phone.style.borderColor="red";
        phonespan.innerHTML="Enter a valid phone number";
        phonespan.style.visibility="visible";
    }
    }
);
var state=document.getElementById("state");
var statespan=document.getElementById("statespan")

state.addEventListener('change', function () {
    let isValid = false;
   
     options.forEach(option => {
      if (option.selected && option.value) { // If a valid option is selected
        isValid = true;
      }
    });

    if (isValid) {
        iscondition=true;
      statespan.style.visibility = "visible";
      statespan.innerHTML = "Valid";
      statespan.style.color = "green";
    } else {
        iscondition=false;
      statespan.style.visibility = "visible";
      statespan.innerHTML = "Please select your present state";
      statespan.style.color = "red";
    }
  });
  var permanentstate=document.getElementById("permanentStateDropdown");
  var permanentstatespan=document.getElementById("permanentstate")
  
  permanentstate.addEventListener('change', function () {
      let isValid = false;
  
       options.forEach(option => {
        if (option.selected && option.value) { // If a valid option is selected
          isValid = true;
        }
      });
  
      if (isValid) {
        iscondition=true;
        permanentstatespan.style.visibility = "visible";
        permanentstatespan.innerHTML = "Valid";
        permanentstatespan.style.color = "green";
      } else {
        iscondition=false;
        permanentstatespan.style.visibility = "visible";
        permanentstatespan.innerHTML = "Please select your present state";
        permanentstatespan.style.color = "red";
      }
    });



//   const permanentStateDropdown = document.querySelectorAll('#permanentstates')[0];
// const errorMessageSpan = document.querySelectorAll('#permanentstatespan')[0];

// permanentStateDropdown.addEventListener('change', function () {
//     let isStateSelected = false;

    
//     const stateOptions = permanentStateDropdown.querySelectorAll('option');
//     stateOptions.forEach(option => {
//         if (option.selected && option.value) {
//             isStateSelected = true;
// //         }
// //     });

//     if (isStateSelected) {
//         errorMessageSpan.style.visibility = "visible";
//         errorMessageSpan.innerHTML = "Valid";
//         errorMessageSpan.style.color = "green";
//     } else {
//         errorMessageSpan.style.visibility = "visible";
//         errorMessageSpan.innerHTML = "*Please select your present state";
//         errorMessageSpan.style.color = "red";
//     }
// });


var currenetAddress = document.getElementById("current-address");
var currenetAddress1 = document.getElementById("address-line-2");
var pAddress = document.getElementById("permanent-address-line-1");
var pAddress1 = document.getElementById("permanent-address-line-2");
var currenetAddressspan=document.getElementById("presentaddressspan");
var currentpincode = document.getElementById("zip");
var pPincode = document.getElementById("permanent-zip");
var permanentaddressspan=document.getElementById("permanentaddressspan")
var presentpincodespan=document.getElementById("presentpincodespan")
var selectcheckbox = document.getElementById("checkbox");

selectcheckbox.addEventListener("click", function () {
    
    if (validateAddress(currenetAddress.value) && validatePincode(currentpincode.value)) {
        if (selectcheckbox.checked) {
            iscondition=true;
            pAddress.value = currenetAddress.value; // Copy address
            pAddress1.value = currenetAddress1.value;
            pPincode.value = currentpincode.value; // Copy pincode
        } else {
           
            pAddress.value = "";
            pPincode.value = "";
     
            
        }
    } else {
        iscondition=false;
        alert("Please enter a valid present address and pincode before copying.");
        currenetAddressspan.style.visibility="visible";
        presentpincodespan.style.visibility="visible";
    }
});

currentpincode.addEventListener("input", () => {
    if (!validatePincode( currentpincode.value)) {
        iscondition=false;
        presentpincodespan.style.color = "red";
        presentpincodespan.innerHTML = "Please enter a valid 6-digit pincode";
        presentpincodespan.style.visibility = "visible";
    } else {
        iscondition=true;
        presentpincodespan.style.color = "green";
        presentpincodespan.innerHTML = "Valid pincode";
        presentpincodespan.style.visibility = "visible";
    }
});

function validateAddress(address) {
    return address.trim().length > 0; 
}

function validatePincode(pincode) {
    return /^[0-9]{6}$/.test(pincode);
}

document.getElementById("form").addEventListener("submit",()=>
{
    if(iscondition){
        alert("Form Submitted Sucessfully");
        return true;
    }

    else{
        alert("Check the data first");
        return false;
    }
})