
const signupStart = (event, signupForm_1) => {
    event.preventDefault();
    console.log(event)
    
    if(permit == true) {
        const formData = new FormData(signupForm_1);
        let data = {};
    
        for (const [key, value]  of formData.entries()) {
            data[key] = value;
        }
        //Sign up tracker tracks the users signing up to the app (Default is 0 on process is 1)(used in api/sign_up.js)
        localStorage.setItem('signup_tracker', 1);
        localStorage.setItem('br-signup-temp-data', JSON.stringify(data));
        location.replace('selectaccount.html');
    }
}


//Add submit event listener to form
signupForm_1.addEventListener('submit', (event) => signupStart(event, signupForm_1));
