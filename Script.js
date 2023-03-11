//08135b237911526a5b44b4a483a8142a api key from openweather
const myAPIKey = "08135b237911526a5b44b4a483a8142a";

// url construstion : http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// search button from html
const searchButton = document.getElementById("search-city-btn");

// search input from html
var cityInput = document.getElementById("search-city-input");

//temperature from api
var tempReturned = document.querySelector(".temp");

//humidity from api
var humidityReturned = document.querySelector(".humidity");

//wind from api
var windReturned = document.querySelector(".wind_speed");

//uv index from api
var uviReturned = document.querySelector(".uvi");

//call the api with url
queryWeatherAPI = () => {
  var cityInput = document.querySelector("#search-city-input").value;
  //openweather url constructed with my variables for the cityinput and apikey
  var openweatherURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=3&appid=${myAPIKey}`;
  fetch(openweatherURL)
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      var lat = result[0].lat;
      var lon = result[0].lon;

      // Current Weather using lon and lat from last call
      var currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${myAPIKey}`;
      fetch(currentWeather)
        .then((response) => response.json())
        .then(function (result) {
          var today = result.main;
          console.log({ today });
          document.querySelector("#currentcon-icon").textContent = today.icon;
          document.querySelector("#currentcon-temp").textContent = today.temp;
          document.querySelector("#currentcon-humidity").textContent = today.humidity;
          document.querySelector("#currentcon-wind").textContent = today.wind;
          document.querySelector("#currentcon-uvi").textContent = today.uvi;
        });

      // 5 Day Forecast
      var forecast5Day = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${myAPIKey}`;
      fetch(forecast5Day)
        .then((response) => response.json())
        .then(function (result) {
          var day1 = result.list[4].main;
          var day2 = result.list[9].main;
          var day3 = result.list[14].main;
          var day4 = result.list[19].main;
          var day5 = result.list[24].main;
          console.log({ day1, day2, day3, day4, day5 });

          // Day 1
          document.querySelector("#forcast-temp-1").textContent = day1.temp;
        });
    })
    .catch(function (err) {
      console.error(err);
    });
};
//queryWeatherAPI();

//click function for search button
searchButton.addEventListener("click", queryWeatherAPI);
