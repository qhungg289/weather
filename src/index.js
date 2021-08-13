import "./style.css";
import { form, input, renderPage } from "./DOM.js";

async function getWeatherData(location, unit) {
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
	const location = data.name;
	const temp = data.main.temp;
	const feelsLike = data.main.feels_like;
	const humidity = data.main.humidity;
	const weatherMain = data.weather[0].main;
	const weatherDesc = data.weather[0].description;
	return {
		location,
		temp,
		feelsLike,
		humidity,
		weatherMain,
		weatherDesc,
	};
}

form.onsubmit = async (event) => {
	event.preventDefault();
	const weatherData = await getWeatherData(`${input.value}`, "metric").then(
		processWeatherData
	);
	renderPage(weatherData);
	console.log(weatherData);
};
