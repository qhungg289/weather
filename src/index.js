import "./style.css";
import { form, input, unitSwitch, renderPage } from "./DOM.js";

async function fetchWeatherData(location, unit) {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=b64bbe7a06151506205e77908f58b1c7`,
			{ mode: "cors" }
		);
		const responseData = await response.json();
		console.log(responseData);
		return responseData;
	} catch (error) {
		console.log(error);
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
		weatherMain: data.weather[0].main,
		weatherDesc: data.weather[0].description,
		weatherId: data.weather[0].id,
		weatherIcon: data.weather[0].icon,
	};

	return processedData;
}

// [x] Add a switch for metric / imperial unit
// [x] Display weather icon
// [x] Set the location to localStorage

// Handle events
let unit = unitSwitch.checked ? "imperial" : "metric";

form.onsubmit = async (event) => {
	event.preventDefault();
	localStorage.setItem("location", input.value);
	const weatherData = await fetchWeatherData(
		localStorage.getItem("location"),
		unit
	).then(processWeatherData);
	renderPage(weatherData);
	console.log(weatherData);
};

unitSwitch.onclick = async () => {
	try {
		if (unitSwitch.checked) {
			if (input.value == "") {
				unit = "imperial";
			} else {
				unit = "imperial";
				const weatherData = await fetchWeatherData(input.value, unit).then(
					processWeatherData
				);
				renderPage(weatherData);
			}
		} else {
			if (input.value == "") {
				unit = "metric";
			} else {
				unit = "metric";
				const weatherData = await fetchWeatherData(input.value, unit).then(
					processWeatherData
				);
				renderPage(weatherData);
			}
		}
	} catch (error) {
		console.log(error);
	}
};
