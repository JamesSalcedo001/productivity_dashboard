// // weather.js



// // weather section

// // weather button
// const weatherButton = document.querySelector("#weather-button")
// // location li
// const locationLi = document.querySelector("#location-li");
// // temperature li
// const temperatureLi = document.querySelector("#temperature-li");
// // condition li
// const conditionLi = document.querySelector("#condition-li");
// // status li
// const statusLi = document.querySelector("#status-li");


// function getWeatherDescription(code) {
//     // accept a number
//     // return a string description
//     if (code === 0) {
//         return "Clear sky"
//     } else if (code === 1) {
//         return "Mainly clear";   
//     } else if (code === 2) {
//         return "Partly cloudy";   
//     } else if (code === 3) {
//         return "Overcast";  
//     } else if (code === 45 || code === 48) {
//         return "Fog";   
//     } else if (code === 51 || code === 53 || code === 55) {
//         return "Drizzle";
//     } else if (code === 61 || code === 63 || code === 65) {
//         return "Rain";   
//     } else if (code === 80 || code === 81 || code === 82) {
//         return "Rain showers";   
//     } else if (code === 95) {
//         return "Thunderstorm";
//     } else {
//         return "Unknown weather";
//     }
// }



// // build weather function
// async function loadWeather() {
//     try {
//         statusLi.textContent = "Loading Weather...";
//         weatherButton.disabled = true;
//         // loading state



//         locationLi.textContent = "Houston";
//         temperatureLi.textContent = "";
//         conditionLi.textContent = "";


//         // fetch
//         const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=29.7633&longitude=-95.3633&current=temperature_2m,weather_code&timezone=America%2FChicago&wind_speed_unit=mph&temperature_unit=fahrenheit");
//         const data = await response.json();
//         console.log(data);
//         temperatureLi.textContent = `${data.current.temperature_2m} ${data.current_units.temperature_2m}`;
//         conditionLi.textContent = getWeatherDescription(data.current.weather_code);
//         statusLi.textContent = "";


//         weatherButton.disabled = false;

//     } catch (error) {
//         // error
//         console.log(error);
//         statusLi.textContent = "Could not load weather";
//         weatherButton.disabled = false;
//     }

// }



// export function initWeather() {
//     weatherButton.addEventListener("click", loadWeather);
//     loadWeather();
// }