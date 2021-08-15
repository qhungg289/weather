const form = document.querySelector("form");
const input = document.getElementById("location-input");
const unitSwitch = document.getElementById("unit-switch");
const refreshBtn = document.getElementById("refresh");

function renderPage(weatherData) {
	try {
		const locationDisplay = document.getElementById("location");
		const tempDisplay = document.getElementById("temp");
		const tempHighDisplay = document.getElementById("temp-high");
		const tempLowDisplay = document.getElementById("temp-low");
		const feelsLikeDisplay = document.getElementById("feels-like");
		const humidityDisplay = document.getElementById("humidity");
		const cloudinessDisplay = document.getElementById("cloudiness");
		const weatherDescDisplay = document.getElementById("weather-desc");

		locationDisplay.innerHTML = weatherData.location;
		tempDisplay.innerHTML = `${weatherData.temp}&deg;`;
		tempHighDisplay.innerHTML = `High: ${weatherData.tempHigh}&deg;`;
		tempLowDisplay.innerHTML = `Low: ${weatherData.tempLow}&deg;`;
		feelsLikeDisplay.innerHTML = `${weatherData.feelsLike}&deg;`;
		humidityDisplay.innerHTML = `${weatherData.humidity}%`;
		cloudinessDisplay.innerHTML = `${weatherData.cloudiness}%`;
		weatherDescDisplay.innerHTML = weatherData.weatherDesc;
	} catch (error) {
		console.log(error);
	}
}

function showErrorMessage() {
	const errorDisplay = document.getElementById("error-tool-tip");
	errorDisplay.style.opacity = "1";
	setTimeout(() => (errorDisplay.style.opacity = "0"), 2000);
}

function changeColorBasedOnTemp() {
	const mainInfo = document.getElementById("main-info");
	const searchButton = document.querySelector("[type='submit']");
	const slider = document.querySelector("label span");

	const temp = Number(document.getElementById("temp").innerText.slice(0, -1));

	if (
		(unitSwitch.checked && temp >= 90) ||
		(!unitSwitch.checked && temp >= 32)
	) {
		mainInfo.setAttribute("class", "high");
		searchButton.setAttribute("class", "high-input");
		slider.setAttribute("class", "slider round high-input");
	} else if (
		(unitSwitch.checked && temp <= 79) ||
		(!unitSwitch.checked && temp <= 26)
	) {
		mainInfo.setAttribute("class", "low");
		searchButton.setAttribute("class", "low-input");
		slider.setAttribute("class", "slider round low-input");
	} else {
		mainInfo.setAttribute("class", "normal");
		searchButton.setAttribute("class", "normal-input");
		slider.setAttribute("class", "slider round normal-input");
	}
}

function showUpdatedMessage() {
	refreshBtn.style.setProperty("--opacity", "1");
	setTimeout(() => refreshBtn.style.setProperty("--opacity", "0"), 2000);
}

export {
	form,
	input,
	unitSwitch,
	refreshBtn,
	renderPage,
	showErrorMessage,
	changeColorBasedOnTemp,
	showUpdatedMessage,
};
