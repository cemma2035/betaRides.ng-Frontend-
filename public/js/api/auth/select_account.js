const signupFinish = (event) => {
    event.preventDefault();

    let url;
    //Validate account type
    url = validateSelect(url)
    if(!url){
        return false;
    }

    //Get the signUp button from the event
    let btn = event.target;
    btn.innerHTML = `<span class="spinner-border spinner-border-sm btn-preloder" role="status" aria-hidden="true"></span>`;
    //Get the signing up data from localStorage 
    const data = JSON.parse(localStorage.getItem('br-signup-temp-data'));
    let status;
    const errorHandling = (response) => {
        status = response.status;
        return response.json();
    }
    const validateResponse = (data) => {
        let title;
        let result;
        
        const flashAlert = (title, result) => {
            Swal.fire(
                `${title}`,
                `${result}`,
            )       
        }
        if(status == 422) {
            title = 'Process failed';
            result = JSON.stringify(data.errors).split('"').join('').split('{').join('').split('}').join('');
            flashAlert(title,result);
        }
        if(status == 500) {
            title  = 'An error occured';
            result = 'An error occured due to broken, please try again or contact website owner!';
            flashAlert(title,result);
        }
        if(status == 501) {
            title  = 'Process Not Implemented';
            result = 'proceess was not implement, this could be to unavailable network coverage, please try again or contact support!!';
            flashAlert(title,result);
        }
        if(status == 201) {
            title  = 'Sign Up Successful';
            result = 'Your account has been created successfully, please check email to verify account!!';
            flashAlert(title,result);
            setTimeout( () => {
                location.replace('verifyaccount.html');
            }, 3000)
        }
    }
		
    fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "aplication/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => errorHandling(response))
    .then(data => {
        btn.innerHTML = `Sign Up`;
        console.log(data);
        if(data) {
          //Backend validation
          validateResponse(data);
        }
    })
    .catch(err => {
        btn.innerHTML = `Sign Up`;
        console.error(err);
        validateResponse(err);
    })
}

//Add click event listener to form
signupForm_2.addEventListener('click', (event) => signupFinish(event));