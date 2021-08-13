const form = document.querySelector("form");
const input = document.getElementById("location-input");
const unitSwitch = document.getElementById("unit-switch");

function renderPage(weatherData) {
	const locationDisplay = document.getElementById("location");
	const tempDisplay = document.getElementById("temp");
	const tempHighDisplay = document.getElementById("temp-high");
	const tempLowDisplay = document.getElementById("temp-low");
	const feelsLikeDisplay = document.getElementById("feels-like");
	const humidityDisplay = document.getElementById("humidity");
	const rainInHourDisplay = document.getElementById("rain-in-hour");
	const weatherMainDisplay = document.getElementById("weather-main");
	const weatherDescDisplay = document.getElementById("weather-desc");

	locationDisplay.innerHTML = weatherData.location;
	tempDisplay.innerHTML = `${weatherData.temp}&deg;`;
	tempHighDisplay.innerHTML = `${weatherData.tempHigh}&deg;`;
	tempLowDisplay.innerHTML = `${weatherData.tempLow}&deg;`;
	feelsLikeDisplay.innerHTML = `${weatherData.feelsLike}&deg;`;
	humidityDisplay.innerHTML = `${weatherData.humidity}%`;
	rainInHourDisplay.innerHTML = `${weatherData.rainInHour}mm`;
	weatherMainDisplay.innerHTML = weatherData.weatherMain;
	weatherDescDisplay.innerHTML = weatherData.weatherDesc;
}

export { form, input, unitSwitch, renderPage };
