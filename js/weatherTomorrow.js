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

  const todayDailyWeather = dailyWeather[0].values;
  const tomorrowDailyWeather = dailyWeather[1].values;

  fetchVillage(location.lat, location.lon)
    .then(addressName => {
      const weatherInfo = `
      <div class="col-auto p-1">Today's forecast</div>
      <div class="hstack">
        <div class="col-auto p-1">L: ${celsiusToFahrenheit(todayDailyWeather.temperatureApparentMin)}</div>
        <div class="col-auto p-1">H: ${celsiusToFahrenheit(todayDailyWeather.temperatureApparentMax)}</div>
      </div>
      <div class="col-auto p-1">Tomorrow's forecast</div>
      <div class="hstack">
        <div class="col-auto p-1">L: ${celsiusToFahrenheit(tomorrowDailyWeather.temperatureApparentMin)}</div>
        <div class="col-auto p-1">H: ${celsiusToFahrenheit(tomorrowDailyWeather.temperatureApparentMax)}</div>
      </div>
      <small class="p-1">${addressName}</small>
      `;

      weatherDataElement.innerHTML = weatherInfo;
    });
}

// Function to convert temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  const fahrenheit = Math.round((celsius * 9 / 5) + 32);
  return fahrenheit;
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
