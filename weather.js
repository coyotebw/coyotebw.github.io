
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
      $("#weather-temp").text(data.main.temp + '\xB0 F');
      //fetch location
      $("#weather-loc").text(city + ", " + region);
      //fetch description of conditions
      $("#weather-title").append(data.weather[0].main);
      //fetch min-max temps
      $("#weather-minmax").text(data.main.temp_min + '\xB0  //  ' + data.main.temp_max + '\xB0');
      //put up the little icon for the weather
      var iconcode = data.weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
      $('#wicon').attr('src', iconurl);
      
    }).catch(err => console.error(err));
}).catch(err => $("#weather-temp").text(err));
