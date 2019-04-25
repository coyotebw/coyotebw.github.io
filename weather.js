
/*WEATHER SHIT*/
//props to scotch.io for teaching me fetch api
var apiKey = '78a26d4681b4c38c1614e7c0f8f366c0';
//first we get location
fetch('https://ipapi.co/json/')
  .then(res => res.json())
  .then(function(data){
    console.log('geoloc api response: ', data);
    var city = data.city;
    var country = data.country;
    var region = data.region_code;

    //now we build our weather search
    var apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&units=imperial&mode=json&APPID=' + apiKey;
    //so we can get weather localized always
    fetch(apiURL)
      .then(res => res.json())
      .then(function(data) {
      //for debugging
      console.log('OpenWeatherAPI response: ', data);
      //fetch temperature
     // $("#weather-temp").text(data.main.temp + '\xB0 F');
      //fetch location
      $("#weather-loc").text(city + ", " + region);
      //fetch description of conditions, incl. temperature range (var for readability)
      $("#weather-desc").text(data.weather[0].main + "  -  " + data.main.temp + '\xB0 F');
      //fetch sunset time
      
    }).catch(err => console.error(err));
})
