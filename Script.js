//08135b237911526a5b44b4a483a8142a api key from openweather
const myAPIKey = "08135b237911526a5b44b4a483a8142a";

// url construstion : http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// search button from html
const searchButton = document.getElementById("search-city-btn");

// search input from html
var cityInput = document.getElementById("search-city-input");

//call the api with url
queryWeatherAPI = () => {
  var cityInput = document.querySelector("#search-city-input").value;
  //openweather url constructed with my variables for the cityinput and apikey, gets lon and lat
  var openweatherURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&limit=3&appid=${myAPIKey}`;
  fetch(openweatherURL)
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      var lat = result[0].lat;
      var lon = result[0].lon;
      var name = result[0].name;
      document.querySelector("#currentcon-city").textContent = name;


      // Current Weather using lon and lat from last call
      var currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${myAPIKey}`;
      fetch(currentWeather)
      .then((response) => response.json())
      .then(function (result2) {
        console.log(result2);
        var base = result2.weather[0].icon;
        console.log(base);


          // document.querySelector("#currentcon-city").textContent = name;
          document.querySelector("#currentcon-icon").textContent = base;
        //   document.querySelector("#currentcon-temp").textContent = ;
        // //   document.querySelector("#currentcon-humidity").textContent =
        // //     today.humidity;
        // //   document.querySelector("#currentcon-wind").textContent = todayWind;
        // //   document.querySelector("#currentcon-uvi").textContent = today.uvi;
        });

      // 5 Day Forecast
    //   var forecast5Day = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${myAPIKey}`;
    //   fetch(forecast5Day)
    //     .then((response) => response.json())
    //     .then(function (result) {
    //       var day1 = result.list[4].main;
    //       var day2 = result.list[9].main;
    //       var day3 = result.list[14].main;
    //       var day4 = result.list[19].main;
    //       var day5 = result.list[24].main;
    //       console.log({ day1, day2, day3, day4, day5 });

    //       // Day 1
    //       document.querySelector("#forcast-temp-1").textContent = day1.temp;
    //     });
    // })
    // .catch(function (err) {
    //   console.error(err);
    });
};

//click function for search button
searchButton.addEventListener("click", queryWeatherAPI);


// response.json()){