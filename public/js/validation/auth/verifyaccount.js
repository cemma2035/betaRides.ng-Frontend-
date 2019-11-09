//This handles the validation of the login form
//Get the Login form 
const verifyForm   = document.querySelector('[data-verify-form]');
//Get the error field
let emailError    = document.querySelector('#emailError');

let permit = false;

const validateForm = (verifyForm) => {
    //Clear the error field 
    emailError.innerHTML = '';
    const testEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //Convert form to formData
    const formData = new FormData(verifyForm);
    //Throw error if field is empty
    if(formData.get('verify_code') == '') {
        emailError.innerHTML = 'Please verify code is required!';
        permit = false;
        return false;
    }
    //Return error if email is invalid
    if(!testEmail.test(String(formData.get('email')).toLowerCase())) {
        emailError.innerHTML = 'Please email is invalid, check email and try again';
        permit = false;
        return false;
    }
    permit = true;
}
verifyForm.addEventListener('change', () => validateForm(verifyForm));
//Next the login api found 

