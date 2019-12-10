//This handles the validation of the fp form
//Get the Login form 
const fpForm   = document.querySelector('[data-fp-form]');
//Get the error field
let emailError    = document.querySelector('#emailError');

let permit = false;
let stay_logged_in = false;

const validateForm = (fpForm) => {
    //Clear the error field 
    emailError.innerHTML = '';
    const testEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //Convert form to formData
    const formData = new FormData(fpForm);
    //Throw error if field is empty
    if(formData.get('email') == '') {
        emailError.innerHTML = 'Please email field is required';
        emailError.style.visibility = 'visible';
        permit = false;
        return false;
    }

    //Return error if email is invalid
    if(!testEmail.test(String(formData.get('email')).toLowerCase())) {
        emailError.innerHTML = 'Please email is invalid, check email and try again';
        emailError.style.visibility = 'visible';
        permit = false;
        return false;
    }
    permit = true;
}
fpForm.addEventListener('change', () => validateForm(fpForm));
//Next the fp api found 

