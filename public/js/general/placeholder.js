
//This placeholder hold the webite title
const siteTitle = 'BetaRide';



//This placeholder holds the website name
const siteName = `BetaRides.ng`;

const siteNameElements = Array.from(document.querySelectorAll('.site_name'));
siteNameElements.map(siteNameElement => siteNameElement.innerHTML += `${ siteName }`);
