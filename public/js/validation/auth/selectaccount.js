//Redirect if not from sign up page
const signup_tracker = localStorage.getItem('signup_tracker');
if(signup_tracker != 1) {
    location.replace('signup.html');
}

//The select button
const signupForm_2    = document.querySelector('[data-signup-form-2]');

let selectRenter = document.getElementById("select-renter");
let selectOwner = document.getElementById("select-owner");
let selectButton = document.getElementById("select-btn");
let accountType;

const selection_warning = document.querySelector('[data-selection-warning]');

const carOwners = () => {

    selectOwner.style.borderBottom = "5px solid green";
    selectRenter.style.borderBottom = "none";
    selectButton.removeAttribute('disabled');
    selection_warning.style.display = 'none';
    accountType = "owner";
}

const carRenters = () => {
    selectRenter.style.borderBottom = "5px solid green";
    selectOwner.style.borderBottom = "none";
    selectButton.removeAttribute('disabled');
    selection_warning.style.display = 'none';
    accountType = "renter";
}

const validateSelect = (url) => {
    if(accountType == 'owner') {
        url = `${baseUrl}${signUpOwner}`;
        selection_warning.style.display = 'none';
        return url;
     } else if(accountType == 'renter') {
        url = `${baseUrl}${signUpRenter}`;
        selection_warning.style.display = 'none';
        return url;
     }
        selection_warning.style.display = 'block';
        return false;
     
}