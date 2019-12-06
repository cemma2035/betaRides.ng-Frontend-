// const baseUrl = `https://beta-rides-api.herokuapp.com/`;
// const baseUrl = `http://127.0.0.1:8000/`;


/*********************************API PATH************************************************/
//Resitered pai path


class Routes {

    get api_origin() {
		return `https://beta-rides-api.herokuapp.com/`;
	}

	get signUpOwner() {
		return `api/v1/register/owner`;
	}
	get signUpRenter() {
		return `api/v1/register/renter`;
	}
	get login() {
		return `api/v1/login`;
	}
	get verify() {
		return `api/v1/verify`;
	}
	get forgotpassword() {
		return `api/v1/forgot/password`;
	}
	get resetpassword() {
		return `api/v1/reset/password`;
	}
}
