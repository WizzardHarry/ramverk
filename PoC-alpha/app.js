var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');



button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=03fdcab4998339b7fb8504d1efd0e89f')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})


.catch(err => alert("Wrong city name!"));
})



/*
var x = document.getElementById("demo");


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
var lat = position.coords.latitude.toFixed(0);
var lon = position.coords.longitude.toFixed(0);

    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=03fdcab4998339b7fb8504d1efd0e89f')
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
    
      main.innerHTML = nameValue;
      desc.innerHTML = "Desc - "+descValue;
      temp.innerHTML = "Temp - "+tempValue;
      
    
    })


}

*/
