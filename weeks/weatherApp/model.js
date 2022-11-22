
// function used to slow the loading time to get the 
// response from the API before open the new page
function formSubmit(form) {
    saveInfo();
    setTimeout(function () {
        form.submit();
    }, 500); // 0.5 seconds
    return false;
}

function clearLocalStorage() {
    window.localStorage.clear();
}


// take the user input and store it in the local storage
function saveInfo() {

    var cityId = document.getElementById("cityId").value;
    var countryId = document.getElementById("countryId").value;
    var stateId = document.getElementById("stateId").value;
    const apyKey = "bedecaf711a6770c6a01a7e84725bfaf"
    var link = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityId + "," + stateId + "," + countryId + "&appid=" + apyKey;

    if (localStorage) {
        localStorage.clear()
    }
    localStorage.setItem("CityName", cityId);
    localStorage.setItem("CountryName", countryId);
    localStorage.setItem("StateName", stateId);
    localStorage.setItem("CoordinatesLink", link)
    getCoordinates()
    getWeather()
    getForecast()
}



async function getCoordinates() {


    var coordinatesLink = localStorage.getItem("CoordinatesLink")
    const response = await fetch(coordinatesLink);
    const data = await response.json();
    localStorage.setItem("latitude", data[0].lat);
    localStorage.setItem("longitude", data[0].lon);

    getWeather()
}
getCoordinates()


async function getWeather() {

    const apyKey = "bedecaf711a6770c6a01a7e84725bfaf"
    var latitude = localStorage.getItem("latitude")
    var longitude = localStorage.getItem("longitude")

    console.log("latitude localstorage: " + latitude)
    console.log("longitude localstorage: " + longitude)

    if (latitude && longitude) {
        var weatherLink = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=" + apyKey;
        localStorage.setItem("weatherLink", weatherLink);

        const response = await fetch(weatherLink);
        const data = await response.json();


        //taking the city name from the API
        localStorage.setItem("CityName", data.name);



        //condition working
        localStorage.setItem("condition", data.weather[0].main);

        //getting full link of the icon working
        var rootUrl = "https://openweathermap.org/img/wn/";
        var iconValue = data.weather[0].icon;
        var iconLink = rootUrl + iconValue + "@4x.png";
        localStorage.setItem("icon", iconLink);

        //description working with first letter capitalized 
        const apiDescription = data.weather[0].description
        const outputDescription = apiDescription.charAt(0).toUpperCase() + apiDescription.slice(1)
        localStorage.setItem("description", outputDescription);

        // temperature in C
        localStorage.setItem("temperature", Math.round(data.main.temp) + "°C");
        // feels like in C
        localStorage.setItem("feels_like", Math.round(data.main.feels_like) + "°C");

        // min temperature in C
        localStorage.setItem("temp_min", Math.round(data.main.temp_min) + "°C");
        // max temperature in C
        localStorage.setItem("temp_max", Math.round(data.main.temp_max) + "°C");

        // humidity %
        localStorage.setItem("humidity", data.main.humidity + "%");

        //pressure hPa
        localStorage.setItem("pressure", data.main.pressure + " hPa");

        //visibility in Km
        localStorage.setItem("visibility", (data.visibility * 0.001) + " Km");

        //wind speed meter/sec
        localStorage.setItem("wind_speed", data.wind.speed + " meter/sec");

        //Cloudiness %
        localStorage.setItem("cloudiness", data.clouds.all + " %");

        //sunrise
        var UnixSunrise = data.sys.sunrise
        localStorage.setItem("sunrise", format_time(UnixSunrise) + " UTC");

        //sunset
        var UnixSunset = data.sys.sunset
        localStorage.setItem("sunset", format_time(UnixSunset) + " UTC");

    }

}


//function to calculate the human form of the time from the UNIX time format
function format_time(s) {
    return new Date(s * 1e3).toISOString().slice(-13, -8);
}



// not working yet
async function getForecast() {

    const apyKey = "bedecaf711a6770c6a01a7e84725bfaf"
    var latitude = localStorage.getItem("latitude")
    var longitude = localStorage.getItem("longitude")


    if (latitude && longitude) {
        var forecastLink = "api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=" + apyKey;

        localStorage.setItem("forecastLink", forecastLink);

        const response = await fetch(forecastLink);
        const data = await response.json();
        // localStorage.setItem("forecast_temp", data);



    }

    // localStorage.setItem("forecast_temp", data.list[0].main[0].temp);
}
getForecast()