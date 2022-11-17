
// function used to slow the loading time to get the 
// response from the API before open the new page
function formSubmit(form) {
    saveInfo();
    setTimeout(function () {
        form.submit();
    }, 500); // 0.5 seconds
    return false;
}


var latitude = "";
var longitude = "";

// take the user input and store it in the local storage
function saveInfo() {

    var cityId = document.getElementById("cityId").value;
    var countryId = document.getElementById("countryId").value;
    var stateId = document.getElementById("stateId").value;
    const apyKey = "bedecaf711a6770c6a01a7e84725bfaf"
    var link = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityId + "," + stateId + "," + countryId + "&appid=" + apyKey;

    if (localStorage) {
        localStorage.clear()
    }
    localStorage.setItem("CityName", cityId);
    localStorage.setItem("CountryName", countryId);
    localStorage.setItem("StateName", stateId);
    localStorage.setItem("CoordinatesLink", link)
    getCoordinates()
    getWeather()
}



async function getCoordinates() {


    var coordinatesLink = localStorage.getItem("CoordinatesLink")
    const response = await fetch(coordinatesLink);
    const data = await response.json();
    localStorage.setItem("latitude", data[0].lat);
    localStorage.setItem("longitude", data[0].lon);
    latitude = localStorage.getItem("latitude")
    longitude = localStorage.getItem("longitude")
    getWeather(latitude, longitude)
}
getCoordinates()


// not working yet
async function getWeather() {

    const apyKey = "bedecaf711a6770c6a01a7e84725bfaf"
    // var latitude = localStorage.getItem("latitude")
    // var longitude = localStorage.getItem("longitude")

    console.log("latitude localstorage: " + latitude)
    console.log("longitude localstorage: " + longitude)

    if (latitude && longitude) {
        var weatherLink = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=" + apyKey;
        localStorage.setItem("weatherLink", weatherLink);

        const response = await fetch(weatherLink);
        const data = await response.json();


        //condition working
        localStorage.setItem("condition", data.weather[0].main);

        //getting full link of the icon working
        var rootUrl = "http://openweathermap.org/img/wn/";
        var iconValue = data.weather[0].icon;
        var iconLink = rootUrl + iconValue + "@2x.png";
        localStorage.setItem("icon", iconLink);

        //description working
        localStorage.setItem("description", data.weather[0].description);

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
    }

}



