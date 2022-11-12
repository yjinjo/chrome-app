const API_KEY = config.apikey;
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // url을 get한다. 
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    city.innerText = data.name;
  });
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

// getCurrentPosition(성공했을때 부르는 함수, 실패했을 때 부르는 함수);
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
