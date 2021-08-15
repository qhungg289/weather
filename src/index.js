import "./style.css";
import {
	form,
	input,
	unitSwitch,
	refreshBtn,
	renderPage,
	showErrorMessage,
	changeColorBasedOnTemp,
	showUpdatedMessage,
} from "./DOM.js";

// Fetch & Process
async function fetchWeatherData(location, unit) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=b64bbe7a06151506205e77908f58b1c7`,
		{ mode: "cors" }
	);

	if (response.status == 404) {
		errorHandler(response);
	} else {
		const responseData = await response.json();
		return responseData;
	}
}

function processWeatherData(data) {
	const processedData = {
		location: data.name,
		temp: Math.round(data.main.temp),
		tempHigh: Math.round(data.main.temp_max),
		tempLow: Math.round(data.main.temp_min),
		feelsLike: Math.round(data.main.feels_like),
		humidity: data.main.humidity,
		cloudiness: data.clouds.all,
		weatherDesc: data.weather[0].description,
	};

	return processedData;
}

// Error handler
function errorHandler(error) {
	console.log(error.status, error.statusText);
	showErrorMessage();
}

// Handle events
let unit = unitSwitch.checked ? "imperial" : "metric";

window.onload = async () => {
	try {
		if (localStorage.getItem("location") != null) {
			renderPage(
				await fetchWeatherData(localStorage.getItem("location"), unit).then(
					processWeatherData
				)
			);
			await changeColorBasedOnTemp();
		} else {
			renderPage(
				await fetchWeatherData("New York", unit).then(processWeatherData)
			);
			localStorage.setItem("location", "New York");
			await changeColorBasedOnTemp();
		}
	} catch (error) {
		console.log(error);
	}
};

form.onsubmit = async (event) => {
	try {
		event.preventDefault();
		renderPage(
			await fetchWeatherData(input.value, unit).then(processWeatherData)
		);
		await changeColorBasedOnTemp();
		localStorage.setItem("location", input.value);
		input.value = null;
	} catch (error) {
		console.log(error);
	}
};

unitSwitch.onclick = async () => {
	if (unitSwitch.checked) {
		unit = "imperial";
		renderPage(
			await fetchWeatherData(localStorage.getItem("location"), unit).then(
				processWeatherData
			)
		);
		await changeColorBasedOnTemp();
	} else {
		unit = "metric";
		renderPage(
			await fetchWeatherData(localStorage.getItem("location"), unit).then(
				processWeatherData
			)
		);
		await changeColorBasedOnTemp();
	}
};

refreshBtn.onclick = async () => {
	renderPage(
		await fetchWeatherData(localStorage.getItem("location"), unit).then(
			processWeatherData
		)
	);
	await changeColorBasedOnTemp();
	setTimeout(showUpdatedMessage(), 500);
};
