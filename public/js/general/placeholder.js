const siteTitle = `BetaRides.ng`;


const siteTitleElements = Array.from(document.querySelectorAll('.site_name'));
siteTitleElements.map(siteTitleElement => siteTitleElement.innerHTML += `${ siteTitle }`);
