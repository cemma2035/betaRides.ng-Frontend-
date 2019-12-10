const fpApi = (event, fpForm) => {
    event.preventDefault();
    let stay_logged_data = {};
    const submitBtn = event.target[1];
    const routes = new Routes();
    const url = `${ routes.api_origin }${ routes.forgotpassword }`;

    if(permit == true) {//Condition that check if validation is true
         submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" style="width: 1.3em; height: 1.3em;" role="status" aria-hidden="true"></span>'
         //Convert form to formData
         const formData = new FormData(fpForm);

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
                    html:  `${result}`,
                    confirmButtonText: 'Close'
                })       
            }
            if(status == 422) {
                title = '<h3>fp failed</h3>';
                result = `<span style="color:red; font-size:17px;">
                                ${JSON.stringify(data.errors).split('"').join('').split('{').join('').split('}').join('')}</span>`;
                flashAlert(title,result);
            }
            if(status == 404) {
                title  = '<h3>Route not found</h3>';
                result = '<span style="color:red; font-size:17px;">This route does not exist</span>';
                flashAlert(title,result);
            }
             if(status == 200) {
                title  = '<h3 style="color:green;">Process Successfull</h3>';
                result = '<span style="color:green;">A six digit verification code has been sent to your email please use it to reset password!</span>';
                flashAlert(title,result);
                setTimeout( () => {
                    location.replace('resetpassword.html');
                }, 3000)
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
                 submitBtn.innerHTML = 'Request Reset';
                 console.log(data);
                 getResponse(data);
             }
         })
         .catch(err => {
             if(err) {
                submitBtn.innerHTML = 'Request Reset';
                Swal.fire({
                    title: 'Unexpected Error',
                    html: `<p style="color:red; font-size:17px;">This may be due to internet connection not available, please turn on internet connection or contact website owner, Thank you!</p>`,
                    confirmButtonText: 'Close'            
                })
             }
             console.error(err);
         })
    }

}

fpForm.addEventListener('submit', (event) => fpApi(event, fpForm))