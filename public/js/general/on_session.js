/*
Import Note: This script file should be use to hold data of the current user that is login 
*/
//Getting the user information form the browser localStorage
const onsessionUser = JSON.parse(localStorage.getItem('betaRides.ng-user'));
const stay_login_in = JSON.parse(localStorage.getItem('keep_logged_in_info'));
//Check if this user is real or else redirect to login
const checkUser = () => {
    //Redirect if not true
    !onsessionUser ?  location.replace('../login.html') : null;
}
checkUser();
//Get the user info through object destructuring
console.log(onsessionUser)
console.log(stay_login_in)
const {token, user, image_link, image_small_view_format} = onsessionUser;
const {stay_log_email, stay_log_password} = stay_login_in;



