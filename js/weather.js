// Weatherbit API endpoint and your API key
const apiKey = '4ed7f259fc3d4ef19dbbf7d2f52748b1';
let apiUrl = '';

// Function to fetch weather data based on coordinates
async function fetchWeatherData(latitude, longitude) {
    apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeatherData(data);
        } else {
            console.error('Unable to fetch weather data.');
        }
    } catch (error) {
        console.error('Error:', error);
    } 
}

// Function to display weather data on the webpage
function displayWeatherData(data) {
    const weatherDataElement = document.getElementById('weather-data');
    const weatherInfo = `
        <div class="hstack">
            <div class="p-1">Weather in ${data.data[0].city_name}, ${data.data[0].country_code}</div>
            <div class="p-1 ms-auto">Temperature: ${data.data[0].temp} C or ${convertTemperatureUnit(data.data[0].temp)} F</div>
            <div class="p-1">Description: ${data.data[0].weather.description}</div>
        </div>
    `;
    weatherDataElement.innerHTML = weatherInfo;
}

// Function to calculate Fahrenheit
function convertTemperatureUnit(tempCelsius) {
    const tempFahrenheit = Math.round((tempCelsius * 9 / 5) + 32);
    return tempFahrenheit;
}

// Function to get the user's current location and fetch weather data
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetchWeatherData(latitude, longitude);
        });
    } else {
        console.error('Geolocation is not supported by your browser.');
    }
}

// Add an event listener to the button
const getLocationButton = document.getElementById('getLocation');
