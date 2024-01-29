const searchBtn = document.querySelector('#search-form')
const apiKey = 'eb31a46b5d14ea5586c11a6c70dfa7e9'
const todayContainer = document.getElementById('today')
const idCity = document.getElementById("search-input")
function start(event){
    event.preventDefault()
currentWeather()
}

function currentWeather(){
fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=' + apiKey).then(function(response){
    return response.json()
}).then(function (data){
    console.log(data);
    const cityNameEl =  document.createElement('h2')
    cityNameEl.textContent = data.name

    todayContainer.append(cityNameEl)
})

}

searchBtn.addEventListener('submit', start)