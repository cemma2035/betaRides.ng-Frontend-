const loginApi = (event, loginForm) => {
    event.preventDefault();
    let stay_logged_data = {};
    const submitBtn = event.target[3];
    const routes = new Routes();
    const url = `${ routes.api_origin }${ routes.login }`;

    if(permit == true) {//Condition that check if validation is true
         submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" style="width: 1.3em; height: 1.3em;" role="status" aria-hidden="true"></span>'
         //Convert form to formData
         const formData = new FormData(loginForm);


         //Keep the user logged in alive in the app
         if(stay_logged_in){
           stay_logged_data = {
            'email': formData.get('email'),
            'password': formData.get('password')
           }
         }
        localStorage.setItem('keep_logged_in_info', JSON.stringify(stay_logged_data));

         //Catch error status code
         const errorHandling = (response) => {
            status = response.status;
            console.log(status)
            return response.json();
         }
         const getResponse = (data) => {
            let title;
            let result;

            const flashAlert = (title, result) => {
                Swal.fire({
                    title: `${title}`,
                    html:  `<p style="color:tomato; font-size:17px;">${result}</p>`,
                    confirmButtonText: 'Close'
                })
            }
            if(status == 422) {
                title = 'Login failed';
                result = JSON.stringify(data.errors).split('"').join('').split('{').join('').split('}').join('');
                flashAlert(title,result);
            }
            if(status == 404) {
                title  = 'Route not found';
                result = 'This route does not exist';
                flashAlert(title,result);
            }
            if(status == 400) {
                title  = 'Login Failed';
                result = 'The email or password is invalid, please check details and try again!';
                flashAlert(title,result);
            }
             if(status == 406) {
                title  = 'Login Not Allowed';
                result = 'Account has not been confirmed yet, the verify code has been sent to your mail again!';
                flashAlert(title,result);
            }
            if(status == 200) {
                //insert the data into broswer localStorage
                localStorage.setItem('betaRides.ng-user', JSON.stringify(data));
                location.replace('dashboard/dashboard-home.html');
            }
         }
         fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Accept": "aplication/json"
            },
            body: formData
         })
         .then(response => errorHandling(response))
         .then(data => {
             if(data) {
                 submitBtn.innerHTML = 'Login';
                 console.log(data);
                 getResponse(data);
             }
         })
         .catch(err => {
             if(err) {
                submitBtn.innerHTML = 'Login';
                Swal.fire({
                    title: 'Unexpected Error',
                    html: `<p style="color:tomato; font-size:17px;">This may be due to internet connection not available, please turn on internet connection or contact website owner, Thank you!</p>`,
                    confirmButtonText: 'Close'
                })
             }
             console.error(err);
         })
    }

}

loginForm.addEventListener('submit', (event) => loginApi(event, loginForm))
