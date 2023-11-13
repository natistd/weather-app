// In your project, display the current date and time using JavaScript: Tuesday 16:00

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let currentDate = `${today} ${hour}:${minutes}`;

let date = document.querySelector("#current-date");
date.innerHTML = currentDate;

//Search Engine + API (Nested Functions) + Celcius & Farenheits

let searchBar = document.querySelector("#search-city");

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  let apiKey = "4040o4d2cfd656953bb07308ffet858a";
  let city = cityInput.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  if (cityInput.value) {
    h1.innerHTML = `${cityInput.value}`;
  } else {
    h1.innerHTML = null;
    alert(`Please type a city`);
  }
  function displayWeather(response) {
    let currentTemperature = Math.round(response.data.temperature.current);
    let city = response.data.city;
    let h1 = document.querySelector("#current-temperature");
    h1.innerHTML = `${currentTemperature}`;
  }

  axios.get(apiUrl).then(displayWeather);
}
searchBar.addEventListener("submit", search);

// interact with links from celsius y °F
