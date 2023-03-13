//08135b237911526a5b44b4a483a8142a api key from openweather
const myAPIKey = "08135b237911526a5b44b4a483a8142a";

// search button from html
var searchButton = document.getElementById("search-city-btn");

// search input from html
var cityInput = document.getElementById("search-city-input");

//icon
var icon = document.getElementById('icon');

//Save search history
// saveLastSearch = () => {
//   var lastSearch = document.getElementById("search-city-input").value;
//   localStorage.setItem("lastSearch", "lastSearch");
//   // renderSearchHistory();
//   console.log(lastSearch);
// };
// //Render history
// renderSearchHistory = () => {
//   var history = localStorage.getItem("lastSearch");
//   console.log(history);

// var lastSearchButton = document.createElement("BUTTON");
// var t = document.createTextNode(lastSearch);
// lastSearchButton.appendChild(t);
// document.body.appendChild(lastSearchButton);

// document.querySelector("#search-history").textContent =
//   document.createElement("BUTTON");
// button.value = history;
// button.textContent = history;
// };

//call the api with url
queryWeatherAPI = () => {
  var iconUrl = "https://openweathermap.org/img/wn/";
  var cityInput = document.querySelector("#search-city-input").value;

  //openweather url constructed with my variables for the cityinput and apikey, gets lon and lat
  var openweatherURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=3&appid=${myAPIKey}`;
  fetch(openweatherURL)
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      //create variables with specific data
      var lat = result[0].lat;
      var lon = result[0].lon;
      var name = result[0].name;
      var state = result[0].state;

      //display the data
      document.querySelector("#currentcon-city").textContent =
        name + ", " + state;

      // Current Weather using lon and lat from last call
      var currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${myAPIKey}`;
      fetch(currentWeather)
        .then((response) => response.json())
        .then(function (result2) {
          console.log(result2);
          //create variables with specific data
          var temp = result2.main.temp;
          var humidity = result2.main.humidity;
          var wind = result2.wind.speed;
          var description = result2.weather[0].description;
          
          //display the data for current day
          document.querySelector("#currentcon-icon").textContent = description;
          document.querySelector("#currentcon-temp").textContent = temp;
          document.querySelector("#currentcon-humidity").textContent = humidity;
          document.querySelector("#currentcon-wind").textContent = wind;
        });

      // 5 Day Forecast
      var forecast5Day = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${myAPIKey}`;
      fetch(forecast5Day)
        .then((response) => response.json())
        .then(function (result3) {
          var day1 = result3.list[4];
          var day2 = result3.list[9];
          var day3 = result3.list[14];
          var day4 = result3.list[19];
          var day5 = result3.list[24];
          console.log(result3);
          // Display the data for 5 day
          document.querySelector("#forcast-temp-1").textContent =
            day1.main.temp;
          document.querySelector("#forcast-temp-2").textContent =
            day2.main.temp;
          document.querySelector("#forcast-temp-3").textContent =
            day3.main.temp;
          document.querySelector("#forcast-temp-4").textContent =
            day4.main.temp;
          document.querySelector("#forcast-temp-5").textContent =
            day5.main.temp;
          document.querySelector("#forcast-humidity-1").textContent =
            day1.main.humidity;
          document.querySelector("#forcast-humidity-2").textContent =
            day2.main.humidity;
          document.querySelector("#forcast-humidity-3").textContent =
            day3.main.humidity;
          document.querySelector("#forcast-humidity-4").textContent =
            day4.main.humidity;
          document.querySelector("#forcast-humidity-5").textContent =
            day5.main.humidity;
          document.querySelector("#forcast-wind-1").textContent =
            day1.wind.speed;
          document.querySelector("#forcast-wind-2").textContent =
            day2.wind.speed;
          document.querySelector("#forcast-wind-3").textContent =
            day3.wind.speed;
          document.querySelector("#forcast-wind-4").textContent =
            day4.wind.speed;
          document.querySelector("#forcast-wind-5").textContent =
            day5.wind.speed;
          document.querySelector("#icon1").textContent =
            day5.weather[0].description;
          document.querySelector("#icon2").textContent =
            day5.weather[0].description;
          document.querySelector("#icon3").textContent =
            day5.weather[0].description;
          document.querySelector("#icon4").textContent =
            day5.weather[0].description;
          document.querySelector("#icon5").textContent =
            day5.weather[0].description;
        });
    })
    .catch(function (err) {
      console.error(err);
    });
};

//click function for search button
searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  // saveLastSearch();
  // renderSearchHistory();
  queryWeatherAPI();
});

// const dayjs = require('dayjs');
// //import dayjs from 'dayjs' // ES 2015
// dayjs().format()

// url construstion : http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
