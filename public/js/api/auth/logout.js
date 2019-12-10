

const logoutBtn = document.querySelector('[data-logout]');


const logoutUser = (event) => {
	event.preventDefault();

	localStorage.removeItem('betaRides.ng-user');
	localStorage.removeItem('keep_logged_in_info');
	location.replace(`${window.location.origin}/login.html`);
}


logoutBtn.addEventListener('click', (event) => logoutUser(event));