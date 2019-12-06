

const {name, image, email, phone, user_type} = user;

const onsession_name  = document.querySelector('[data-onsession-name]');
const onsession_email = document.querySelector('[data-onsession-email]');
const onsession_account_type = document.querySelector('[data-onsession_account-type]');

console.log(onsession_name, name)

onsession_name.innerHTML = `Hi ${name}`;
onsession_account_type.innerHTML = `CAR ${user_type.toUpperCase()}`;