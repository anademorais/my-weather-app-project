function formatDate(timestamp) {
	let date = new Date(timestamp);
	let hours = date.getHours();
	let minutes = date.getMinutes();
	if (hours < 10) {
		hours = `0${hours}`;
	}
	if (minutes < 10) {
		hours = `0${minutes}`;
	}
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thrusday",
		"Friday",
		"Saturday",
	];
	let day = days[date.getDay()];
	return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
	let temperatureElement = document.querySelector("#temperature");
	let cityElement = document.querySelector("#city");
	let descriptionElement = document.querySelector("#description");
	let humidityElement = document.querySelector("#humidity");
	let windElement = document.querySelector("#wind");
	let dateElement = document.querySelector("#date");
	temperatureElement.innerHTML = Math.round(response.data.main.temp);
	cityElement.innerHTML = response.data.name;
	humidityElement.innerHTML = response.data.main.humidity;
	windElement.innerHTML = Math.round(response.data.wind.speed);
	dateElement.innerHTML = formatDate(response.data.dt * 1000);
}
let apiKey = "4c9b53e4f8f5eb00df5915bdca340605";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
