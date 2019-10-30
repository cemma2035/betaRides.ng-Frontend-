//Get the Sign form from the DOM
const signupForm_1    = document.querySelector('[data-signup-form-1]');

let nameError     = document.getElementById('nameError');
let emailError    = document.getElementById('emailError');
let phoneError    = document.getElementById('phoneError');
let passwordError = document.getElementById('passwordError');
let permit = false;
//Get the error field class(this returns a NodeList of all error input form the signup DOM with class name)
//Use Array.from() to convert to array so we can loop
const signup_errors  = Array.from(document.querySelectorAll('.signup_error'));

const validateSignForm = (signupForm_1) => {
    
    //map all error div Hide all error
    signup_errors.map(x => x.style.visibility = 'hidden');

    //Convert the form to formData 
    const formData  = new FormData(signupForm_1);
    //Get the form data's form formData
    const name      = formData.get('name');
    const email     = formData.get('email');
    const phone     = formData.get('phone');
    const password  = formData.get('password');

    const testEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const testNum   = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

    //Fullname Check
    if (name.length < 2) {
        nameError.textContent       = "Please Enter your name";
        nameError.style.visibility  = 'visible';
        return false;
    }else 
    //Check Email
    if (!testEmail.test(String(email).toLowerCase())) {
        emailError.textContent      = 'Please enter a valid email address';
        emailError.style.visibility = 'visible';
        return false;
    }else 
    //Check Phone number
    if (!testNum.test(phone)) {
        phoneError.textContent      = 'Please enter a valid phone number';
        phoneError.style.visibility = 'visible';
        return false;
    }else 
    //Check Password
    if (password.length < 8) {
        passwordError.textContent      = 'Password must be a minimum of 8 characters';
        passwordError.style.visibility = 'visible';
        return false;
    }else {
        permit = true;
    }
}

//Use on change event to validate the form
signupForm_1.addEventListener('change', (event) => validateSignForm(signupForm_1));


