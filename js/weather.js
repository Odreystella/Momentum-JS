const myKey = API_Key;

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
          const weather = document.querySelector(".weather");
          const loaction = document.querySelector(".location");
          weather.innerText = `${data.weather[0].main} ${data.main.temp}도`;
          loaction.innerText = data.name;
        });

}

function onGeoFail() {
    alert("Can't find where you are. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoFail);
