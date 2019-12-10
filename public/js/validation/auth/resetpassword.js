//This handles the validation of the rp form
//Get the Login form 
const rpForm   = document.querySelector('[data-rp-form]');
//Get the error field
let verifycode_error    = document.querySelector('#otpError');
let password_error     = document.querySelector('#passwordError');

let permit = false;
let stay_logged_in = false;

const validateForm = (rpForm) => {
    //Clear the error field 
    verifycode_error.innerHTML = '';
    //Convert form to formData
    const formData = new FormData(rpForm);
    //Throw error if field is empty
    if(formData.get('verifycode') == '') {
        verifycode_error.innerHTML = 'Please email field is required';
        verifycode_error.style.visibility = 'visible';
        permit = false;
        return false;
    }

      //Return invalid if not a number
    if (!testNum.test(formData.get('verifycode'))) {
        verifycode_error.innerHTML     = 'Please only digit is allowed';
        verifycode_error.style.visibility = 'visible';
        permit = false;
        return false;
    }

    if(formData.get('password') == '') {
        password_error.innerHTML = 'Please email field is required';
        password_error.style.visibility = 'visible';
        permit = false;
        return false;
    }

    if(formData.get('password').length <= 8) {
        password_error.innerHTML = 'Please email field is required';
        password_error.style.visibility = 'visible';
        permit = false;
        return false;
    }

    permit = true;
}
rpForm.addEventListener('change', () => validateForm(rpForm));
//Next the rp api found 

