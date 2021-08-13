const form = document.querySelector("form");
const input = document.getElementById("location-input");

function renderPage(weatherData) {
	const locationDisplay = document.getElementById("location");
	const tempDisplay = document.getElementById("temp");
	const feelsLikeDisplay = document.getElementById("feels-like");
	const humidityDisplay = document.getElementById("humidity");
	const weatherMainDisplay = document.getElementById("weather-main");
	const weatherDescDisplay = document.getElementById("weather-desc");

	locationDisplay.innerHTML = weatherData.location;
	tempDisplay.innerHTML = `${weatherData.temp}&deg;`;
	feelsLikeDisplay.innerHTML = `${weatherData.feelsLike}&deg;`;
	humidityDisplay.innerHTML = `${weatherData.humidity}%`;
	weatherMainDisplay.innerHTML = weatherData.weatherMain;
	weatherDescDisplay.innerHTML = weatherData.weatherDesc;
}

export { form, input, renderPage };
