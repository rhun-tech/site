const apiKeyWeather = 'Tohw5l3zWKrl1RrJCfwoa4Se6DIO2P9a';

// Function to fetch weather data by latitude and longitude
function fetchWeatherData(latitude, longitude) {
  const apiUrlWeather = `https://api.tomorrow.io/v4/weather/forecast?location=${latitude},${longitude}&apikey=${apiKeyWeather}`;

  return fetch(apiUrlWeather)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      // Handle the weather data here
      displayWeatherData(data);
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function fetchVillage(latitude, longitude) {
  const apiUrlMap = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`;

  return fetch(apiUrlMap)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Return the village name from the API response
      return data.display_name;
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

// Function to display weather data on the webpage
function displayWeatherData(data) {
  const weatherDataElement = document.getElementById('weather-data');
  const location = data.location;
  const minutelyWeather = data.timelines.minutely;
  const dailyWeather = data.timelines.daily;

  const currentWeather = minutelyWeather[0].values;

  const dailyWeatherTime0 = dailyWeather[0].time;
  const dailyWeather0 = dailyWeather[0].values;

  const dailyWeatherTime1 = dailyWeather[1].time;
  const dailyWeather1 = dailyWeather[1].values;

  const dailyWeatherTime2 = dailyWeather[2].time;
  const dailyWeather2 = dailyWeather[2].values;

  const dailyWeatherTime3 = dailyWeather[3].time;
  const dailyWeather3 = dailyWeather[3].values;

  fetchVillage(location.lat, location.lon)
    .then(addressName => {
      const weatherInfo = `
      <div class="col-auto p-1 rhun-text-secondary">Current Conditions</div>
      <div class="hstack">
        <div class="col-auto p-1">${celsiusToFahrenheit(currentWeather.temperatureApparent)}</div>
      </div>
      <div class="col-auto p-1 rhun-text-secondary">Forecast</div>
      <div class="hstack">
        <div class="col-auto p-1">${formatMonthAndDay(dailyWeatherTime0)}</div>
        <div class="col-auto p-1">L: ${celsiusToFahrenheit(dailyWeather0.temperatureApparentMin)}</div>
        <div class="col-auto p-1">H: ${celsiusToFahrenheit(dailyWeather0.temperatureApparentMax)}</div>
      </div>
      <div class="hstack">
        <div class="col-auto p-1">${formatMonthAndDay(dailyWeatherTime1)}</div>
        <div class="col-auto p-1">L: ${celsiusToFahrenheit(dailyWeather1.temperatureApparentMin)}</div>
        <div class="col-auto p-1">H: ${celsiusToFahrenheit(dailyWeather1.temperatureApparentMax)}</div>
      </div>
      <div class="hstack">
        <div class="col-auto p-1">${formatMonthAndDay(dailyWeatherTime2)}</div>
        <div class="col-auto p-1">L: ${celsiusToFahrenheit(dailyWeather2.temperatureApparentMin)}</div>
        <div class="col-auto p-1">H: ${celsiusToFahrenheit(dailyWeather2.temperatureApparentMax)}</div>
      </div>
      <div class="hstack">
        <div class="col-auto p-1">${formatMonthAndDay(dailyWeatherTime3)}</div>
        <div class="col-auto p-1">L: ${celsiusToFahrenheit(dailyWeather3.temperatureApparentMin)}</div>
        <div class="col-auto p-1">H: ${celsiusToFahrenheit(dailyWeather3.temperatureApparentMax)}</div>
      </div>
      <small class="p-1">${addressName}</small>
      `;

      weatherDataElement.innerHTML = weatherInfo;
    });
}

// Function to format a date string to display as MM-DD
function formatMonthAndDay(dateString) {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}-${day}`;
}

// Function to convert temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  const celsiusRounded = Math.round(celsius);
  const fahrenheitRounded = Math.round((celsius * 9 / 5) + 32);
  return celsiusRounded + " / " + fahrenheitRounded;
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

// Add an event listener to the div element with the ID "liveToastBtn"
const liveToastBtn = document.getElementById('liveToastBtn');
liveToastBtn.addEventListener('click', getLocation);
