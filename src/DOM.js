const form = document.querySelector("form");
const input = document.getElementById("location-input");

function renderPage(
	location,
	temp,
	feels_like,
	humidity,
	weatherMain,
	weatherDesc
) {
	const locationDisplay = document.getElementById("location");
	const tempDisplay = document.getElementById("temp");
	const feelsLikeDisplay = document.getElementById("feels-like");
	const humidityDisplay = document.getElementById("humidity");
	const weatherMainDisplay = document.getElementById("weather-main");
	const weatherDescDisplay = document.getElementById("weather-desc");

	locationDisplay.innerHTML = location;
	tempDisplay.innerHTML = `${temp}&deg;`;
	feelsLikeDisplay.innerHTML = `${feels_like}&deg;`;
	humidityDisplay.innerHTML = `${humidity}%`;
	weatherMainDisplay.innerHTML = weatherMain;
	weatherDescDisplay.innerHTML = weatherDesc;
}

export { form, input, renderPage };
