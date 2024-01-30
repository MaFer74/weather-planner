const searchBtn = document.getElementById("search-button");
const apiKey = "eb31a46b5d14ea5586c11a6c70dfa7e9";
const todayContainer = document.getElementById("today");
const idCity = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
function start(event) {
  event.preventDefault();
  currentWeather(idCity.value);
}

function currentWeather(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apiKey +
      "&units=metric"
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const cityNameEl = document.createElement("h2");
      cityNameEl.textContent = data.name;
      todayContainer.append(cityNameEl);
      //document.getElementById('city-name').textContent=data.name
     
      // Transfer content to HTML
    $(".city-name").html("<h2>" + data.name + " Weather Details</h2>");
    $(".main-wind").text("Wind Speed: " + data.wind.speed);
    $(".main-humidity").text("Humidity: " + data.main.humidity);
    });
}

searchForm.addEventListener("submit", start);
console.log("testing");
