//This handles the validation of the login form
//Get the Login form 
const verifyForm   = document.querySelector('[data-verify-form]');
//Get the error field
let verify_code_err    = document.querySelector('#verify_code_err');

let permit = false;

const validateForm = (verifyForm) => {
    //Clear the error field 
    verify_code_err.innerHTML = '';
    const testNum    = /^\d+$/;


    //Convert form to formData
    const formData = new FormData(verifyForm);
    //Throw error if field is empty
    console.log(formData.get('verifycode'));
    if(formData.get('verifycode') == '') {
        verify_code_err.innerHTML = 'Please verify code is required!';
        verify_code_err.style.visibility = 'visible';
        permit = false;
        return false;
    }
    //Return invalid if not a number
    if (!testNum.test(formData.get('verifycode'))) {
        verify_code_err.innerHTML     = 'Please only digit is allowed';
        verify_code_err.style.visibility = 'visible';
        permit = false;
        return false;
    }
    //Return error if less than 6
    if (formData.get('verifycode').length != 6) {
        verify_code_err.innerHTML     = 'Please verify code should be 6 only';
        verify_code_err.style.visibility = 'visible';
        permit = false;
        return false;
    }
    permit = true;
}
verifyForm.addEventListener('change', () => validateForm(verifyForm));
//Next the login api found 

