const searchBtn = document.getElementById("search-button");
const apiKey = "eb31a46b5d14ea5586c11a6c70dfa7e9";
const todayContainer = document.getElementById("today");
const idCity = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
function displayForecast(forecastData) {
    console.log(forecastData.list);

    //container for each created card
    let template = ``
    for (let i = 4; i < 37; i += 8) {
        console.log(forecastData.list[i]);

     //dynamic cards 5 day forecast
        let card = `<div class="col mb-0 p-3">
 <div class="card forecast-day">
     <div class="card-body" id="card1-5">
         <p class="date">${new Date(forecastData.list[i].dt * 1000).toLocaleDateString()}</p>
         <p class="icon"><img src="https://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}@2x.png" alt=""></p>
         <p class="temperature">temperature ${forecastData.list[i].main.temp}°</p>
         <p class="wind">wind ${forecastData.list[i].wind.speed}kph</p>
         <p class="humidity">humidity ${forecastData.list[i].main.humidity}%</p>
     </div>
 </div>
</div> `

     //adding new card to template container
        template += card
    }

    // this selector connect to html
    document.querySelector('.forecast-card').innerHTML = template
}

    //main function to grab info from open weather
function start(event) {
    event.preventDefault();
    currentWeather(idCity.value);
}

    //all information from open weather
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

        
            // Transfer content to HTML to the main card
            $(".main-current-date").text(`${new Date + (data.main.dt * 1000)}`)
            $(".main-temperature").text(`Temperature ${data.main.temp}°`)
            $(".city-name").html("<h2>" + data.name + " Weather Details</h2>");
            $(".main-wind").text("Wind Speed: " + data.wind.speed + "kph");
            $(".main-humidity").text("Humidity: " + data.main.humidity +"%");
            getForecast(city)
        });
}
function getForecast(city) {
    console.log(city);
    //   var queryUrl = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=" +
    //   lat + "&lon=" +
    //   lon + "&cnt="+ 5 + "&appid=" + apiKey
    let queryUrl =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=metric" +
        "&appid=" +
        apiKey;
    //var queryUrl = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=" + apiKey
    fetch(queryUrl)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayForecast(data)
        })
}
searchForm.addEventListener("submit", start);
console.log("testing");
//https://api.openweathermap.org/data/2.5/forecast?q=