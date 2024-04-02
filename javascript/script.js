const container = document.querySelector(".container");
const input_box = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");

let weather_img = document.querySelector("#weather_img");

const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");

async function checkWeather(city) {
  const api_key = "5a00fbd1740181a309fc408573bea392";
  const url = `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${api_key}`;

  // fatch data fatches the data from url and then .json converts it into string

  // very important part of website

  const weather_data = await fetch(`${url}`).then((Response) =>
    Response.json()
  );
  

  if (weather_data.cod === '404') {
    location_not_found.style.display = "flex"
    weather_body.style.display = "none"
    
    return
    
}
location_not_found.style.display = "none"
weather_body.style.display = "flex"

  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

  description.innerHTML = `${weather_data.weather[0].main}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;

  wind_speed.innerHTML = `${weather_data.wind.speed}Km/h`;

  switch (weather_data.weather[0].main) {
    case 'Clouds':
      weather_img.src = 'img/cloud.png';
      break;
    case 'Snow':
      weather_img.src = 'img/snow.png';
      break;
    case 'Clear':
      weather_img.src = 'img/clear.png';
      break;
    case 'Rain':
      weather_img.src = 'img/rain.png';
      break;
    case 'Mist':
      weather_img.src = 'img/mist.png';
      break;
  }
}

try {
    searchBtn.addEventListener("click", () => {
      checkWeather(input_box.value);
    });
    
} catch (error) {
    console.log("hii")
    
}
