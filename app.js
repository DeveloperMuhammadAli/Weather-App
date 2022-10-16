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

    let date = document.getElementById('date');
    let todayData = new Date ();
    date.innerText = dateManage(todayData);

    if(weatherType.textContent == 'clear') {
        document.body.style.backgroundImage = "url('download (1).jpg')"
    } else if(weatherType.textContent == 'Cloud') {
        document.body.style.backgroundImage = "url('download (2).jpg')"
    }else if(weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('download (3).jpg')"
    }else if(weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('download (4).jpg')"
    }
}
function dateManage(dateArg) {
    let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ,"Saturday"];
    let months= ["January", "Ferbruary", "March", "April", "May", "June", "July", "Augest", "September", "Octuber", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let data = dateArg.getDate();
    let day = days[dateArg.getDate()];

    return `${date} ${month} (${day}) ${year}`;
}





















