// weather.js 


function weatherCodes(code) {

    const weatherCodesInterpretation = {

        0: "Clear Sky",

        1: "Mainly Clear",

        2: "Partly Cloudy",

        3: "Overcast",

        45: "Fog",

        48: "Depositing Rime Fog",

        51: "Light Drizzle",

        53: "Moderate Drizzle",

        55: "Dense Drizzle",

        56: "Light Freezing Drizzle",

        57: "Dense Freezing Drizzle",

        61: "Slight Rain",

        63: "Moderate Rain",

        65: "Heavy Rain",

        66: "Light Freezing Rain",

        67: "Heavy Freezing Rain",

        71: "Slight Snow Fall",

        73: "Moderate Snow Fall",

        75: "Heavy Snow Fall",

        77: "Snow Grains",

        80: "Slight Rain Showers",

        81: "Moderate Rain Showers",

        82: "Violent Rain Showers",

        85: "Slight Snow Showers",

        86: "Heavy Snow Showers",

        95: "Thunderstorm (Slight or Moderate)",

        96: "Thunderstorm with Slight Hail",

        99: "Thunderstorm with Heavy Hail"

    };

   return weatherCodesInterpretation[code] || "Unknown Weather";
}




export async function getWeather(temperatureLi, conditionLi, statusLi) {

    temperatureLi.textContent = "Temperature: ";
    conditionLi.textContent = "Condition: ";
    statusLi.textContent = "Request Status: ";


    try {
        const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=29.7633&longitude=-95.3633&current=temperature_2m,weather_code&timezone=America%2FChicago&temperature_unit=fahrenheit");

        if (!res.ok) {
            console.error(res.status);
            statusLi.textContent = res.status;
            return;
        }

        const result = await res.json();
        console.log(result);

        temperatureLi.textContent = `Temperature: ${result.current.temperature_2m} ${result.current_units.temperature_2m}`;


        const currentCode = result.current.weather_code;
        conditionLi.textContent = `Condition: ${weatherCodes(currentCode)}`;

        statusLi.textContent = `Request Status: ${res.status}`;


    } catch (err) {
        console.error(err.message);
        statusLi.textContent = err.message;
    }
}