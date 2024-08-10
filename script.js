const apiKey = "&appid=7626d3b2a56eeb1d0f8bf449f064b0c9"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

const searchBox = document.querySelector(".search-bar input")
const searchBtn = document.querySelector(".search-bar button")
const weatherIcon = document.querySelector(".weather-icon img")


//Async function to fetch the weather data
async function checkWeather(city){
    const response = await fetch(apiUrl + apiKey + `&q=${city}`)
    var data = await response.json()

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".speed").innerHTML = data.wind.speed + "km/h"

    const icon = data.weather[0].main.toLowerCase()
    weatherIcon.src = `assets/${icon}.png`

}


searchBtn.addEventListener("click",function(){
    checkWeather(searchBox.value)
})






