let selectRenter = document.getElementById("select-renter");
let selectOwner = document.getElementById("select-owner");
let selectButton = document.getElementById("select-btn");
let accountType;

function carOwners() {

    selectOwner.style.borderBottom = "5px solid green";
    selectRenter.style.borderBottom = "none";
    selectButton.removeAttribute('disabled');
    accountType = "owner";
}

function carRenters() {
    selectRenter.style.borderBottom = "5px solid green";
    selectOwner.style.borderBottom = "none";
    selectButton.removeAttribute('disabled');
    accountType = "renter";
}