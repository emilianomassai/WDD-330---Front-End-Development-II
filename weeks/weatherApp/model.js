
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
async function getWeather(latitude, longitude) {

    const apyKey = "bedecaf711a6770c6a01a7e84725bfaf"
    // var latitude = localStorage.getItem("latitude")
    // var longitude = localStorage.getItem("longitude")

    console.log("latitude localstorage: " + latitude)
    console.log("longitude localstorage: " + longitude)

    if (latitude && longitude) {
        var weatherLink = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + apyKey;
        const response = await fetch(weatherLink);
        const data = await response.json();
        localStorage.setItem("weatherLink", weatherLink);
    }
}
