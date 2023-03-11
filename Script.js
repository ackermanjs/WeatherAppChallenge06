//08135b237911526a5b44b4a483a8142a api key from openweather
const myAPIKey = "08135b237911526a5b44b4a483a8142a";

// url construstion : http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// id's to be used later for targeting:
// ***search and history stuff
// id="search-history"
// id="clear-history-btn"
// ***jumbotron current
// id="currentcon-city"
// id="currentcon-icon"
// id="currentcon-temp"
// id="currentcon-humidity"
// id="currentcon-wind"
// id="currentcon-uvi"
// ***forcast 5 day
// id="forcast-date-1"
// id="forcast-temp-1"
// id="forcast-humidity-1"
// id="forcast-wind-1"
// id="forcast-uvi-1"
// id="forcast-date-2"
// id="forcast-temp-2"
// id="forcast-humidity-2"
// id="forcast-wind-2"
// id="forcast-uvi-2"
// id="forcast-date-3"
// id="forcast-temp-3"
// id="forcast-humidity-3"
// id="forcast-wind-3"
// id="forcast-uvi-3"
// id="forcast-date-4"
// id="forcast-temp-4"
// id="forcast-humidity-4"
// id="forcast-wind-4"
// id="forcast-uvi-4"
// id="forcast-date-5"
// id="forcast-temp-5"
// id="forcast-humidity-5"
// id="forcast-wind-5"
// id="forcast-uvi-5"

// starting variables
// id="search-city-btn"
const searchButton = document.getElementById("search-city-btn");
// id="search-city-input"
var cityInput = document.getElementById("search-city-input");

var openweatherURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=3&appid=${myAPIKey}`

button.addEventListener('click', () => {
    fetch(openweatherURL)
        .then(function (result) {
            console.log(result);
        })
        .catch(function (err) {
            console.error(err);
        });
});