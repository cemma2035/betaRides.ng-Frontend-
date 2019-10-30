$.ajaxSetup({
    statusCode: {
        401: function () {
            // Redirec the to the login page.
            localStorage.removeItem('betaRide-user');
            location.href = "../login.html";
        }
    }
});
window.addEventListener('load', function () {
    function updateOnlineStatus(event) {
        console.log(event.type);
        var condition = navigator.onLine ? "online" : "offline";
        if (condition == "online") {
            swal({
                    title: "You are online!",
                    icon: "info",
                    button: "Refresh!",
                })
                .then((value) => {
                    window.location.reload(true);
                });
        } else {
            swal({
                title: "Oops, You are offline!",
                icon: "error",
                button: "Close!",
            });
        }
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
});
var mailme = function () {
    localStorage.removeItem('betaRide-user');
    location.href = "../login.html";
}

window.addEventListener('error', function (e) {
    var ie = window.event || {};
    var errMsg = e.message || ie.errorMessage || "404 error on " + window.location;
    var errSrc = (e.filename || ie.errorUrl) + ': ' + (e.lineno || ie.errorLine);
    // mailme([errMsg, errSrc]);
}, true);