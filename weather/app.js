var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var mintemp = document.querySelector('.mintemp');
var maxtemp = document.querySelector('.maxtemp');
var weather = document.querySelector('.weather');
var humidity = document.querySelector('.humidity');
var pressure = document.querySelector('.pressure');
var sunrise = document.querySelector('.sunrise');
var sunset = document.querySelector('.sunset');
var desc = document.querySelector('.desc');
var windspeed = document.querySelector('.windspeed');
var con = document.querySelector('.country');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=7adb13f25200d13bcf538a839ef8a588')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var mintempValue = data['main']['temp_min'];
  var maxtempValue = data['main']['temp_max'];
  var conValue = data['sys']['country'];
  var sunriseValue = data['sys']['sunrise'];
  var sunsetValue = data['sys']['sunset'];
  var nameValue = data['name'];
  var windspeedValue = data['wind']['speed'];
  var preValue = data['main']['pressure'];
  var humValue = data['main']['humidity'];
  var weatherValue = data['weather'][0]['main'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue +" - "+conValue;
  con.innerHTML = "<strong>Country - </strong>"+conValue;
  windspeed.innerHTML = "<strong>Windspeed - </strong>"+windspeedValue+"m/s";
  desc.innerHTML = "<strong>Description - </strong>"+descValue;
  weather.innerHTML = "<strong>Weather - </strong>"+weatherValue;
  temp.innerHTML = "<strong>Temperature - </strong>"+tempValue+"&deg"+"C";
  humidity.innerHTML = "<strong>Humidity - </strong>"+humValue+"%"; 
  pressure.innerHTML = "<strong>Pressure - </strong>"+preValue+"hpa";
  mintemp.innerHTML = "<strong>Min.Temperature - </strong>"+mintempValue+"&deg"+"C";
  maxtemp.innerHTML = "<strong>Max.Temperature - </strong>"+maxtempValue+"&deg"+"C";
  sunrise.innerHTML = "<strong>SunRise - </strong>"+sunriseValue;
  sunset.innerHTML = "<strong>Sunset - </strong>"+sunsetValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})