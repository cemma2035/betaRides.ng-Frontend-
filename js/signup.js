let fullname = document.getElementById('fullname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let signupBtn = document.getElementById('signupBtn');

let nameError = document.getElementById('nameError');
let emailError = document.getElementById('emailError');
let phoneError = document.getElementById('phoneError');
let passwordError = document.getElementById('passwordError');

let validName = false;
let validEmail = false;
let validPhone = false;
let validPassword = false;

function checkName() {
    if (fullname.value.length < 2) {
        nameError.textContent = "Please Enter your name";
        nameError.style.visibility = 'visible';
        validName = false;

    } else {
        nameError.style.visibility = 'hidden';
        validName = true;
    }
    validate();
}

function checkEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(email.value).toLowerCase())) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.visibility = 'visible';
        validEmail = false;

    } else {
        emailError.style.visibility = 'hidden';
        validEmail = true;
    }
    validate();
}

function checkPhone() {
    const num = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    if (!num.test(phone.value)) {
        phoneError.textContent = 'Please enter a valid phone number';
        phoneError.style.visibility = 'visible';
        validPhone = false;

    } else {
        phoneError.style.visibility = 'hidden';
        validPhone = true;
    }
    validate();
}

function checkPassword() {
    if (password.value.length < 8) {
        passwordError.textContent = 'Password must be a minimum of 8 characters';
        passwordError.style.visibility = 'visible';
        validPassword = false;

    } else {
        passwordError.style.visibility = 'hidden';
        validPassword = true;
    }
    validate()
}

function validate() {
    if (validName === true && validEmail === true && validPhone === true && validPassword === true) {
        signupBtn.removeAttribute('disabled');
    } else {
        signupBtn.setAttribute('disabled');
    }
}