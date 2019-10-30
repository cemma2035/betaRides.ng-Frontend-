let email = document.getElementById('email');
let password = document.getElementById('password');
let loginBtn = document.getElementById('loginBtn');


let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');


let validEmail = false;
let validPassword = false;



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
    if (validEmail === true && validPassword === true) {
        loginBtn.removeAttribute('disabled');
    } else {
        loginBtn.setAttribute('disabled');
    }
}