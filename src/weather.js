let now = new Date();
let h2 = document.querySelector("h2");

let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

h2.innerHTML = `${day}  ${hour}:${minutes}`;
console.log(h2.innerHTML);

let city = document.querySelector("#search-text-input").value;
let apiKey = "6d68aadfacdd4f5163bc273049a0cf2d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showWeather);

function showWeather(response) {
  document.querySelector("#mainCity").innerHTML = response.data.name;
  document.querySelector(".weather-type").innerHTML =
    response.data.weather[0].description;
  document.querySelector(".degrees").innerHTML = Math.round(
    response.data.main.temp
  );
}
