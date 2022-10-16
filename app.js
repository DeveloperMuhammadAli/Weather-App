const weatherApi = {
    key: "f05f6ec3134be27e1ad0983c336fbdda",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('inputbox');
searchInputBox.addEventListener('keypress',(event) => {
   if(event.keyCode == 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);}
});

function getWeatherReport(city){
    fetch (`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=matric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather){
    console.log(weather);
    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)},&deg;C`;

    let minMazTemp = document.getElementById('min-max');
    temperature.innerHTML = `${Math.floor(weather.main.temp_min)},&deg;C (min)/${Math.ceil(weather.main.temp_max)},&deg;C (max)/`;

    let weathertype = document.getElementById('weather');
    city.innerText = `${weather.weather[0].main}`;



}























