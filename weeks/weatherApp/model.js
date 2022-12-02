
const hours = [];
const temps = [];
const feelsLikeArr = [];
// function used to slow the loading time to get the 
// response from the API before open the new page
// function formSubmit(form) {
//     saveInfo();
//     setTimeout(function () {
//         form.submit();
//     }, 500); // 0.5 seconds
//     return false;
// }

function validateForm() {

    if (document.getElementById("cityId").value == "") {
        document.getElementById('error').innerHTML = "Enter a city";
        return false;
    } else if (document.getElementById("countryId").value == "") {
        document.getElementById('error').innerHTML = "Enter a Country";
        return false;
    }
    else
        document.getElementById('error').innerHTML = "";
    saveInfo()
    return true //Don't forget to return true if everything checks out

}


function clearLocalStorage() {
    window.localStorage.clear();
}



// take the user input and store it in the local storage
async function saveInfo() {

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

    // if (link) {
    waitForCoordinates();
    // }
    // getWeather()
    // getForecast()


}


async function waitForCoordinates() {
    await getCoordinates();
}

async function getCoordinates() {


    var coordinatesLink = localStorage.getItem("CoordinatesLink")
    if (coordinatesLink) {
        const response = await fetch(coordinatesLink);
        const data = await response.json();
        if (data != '') {
            localStorage.setItem("latitude", data[0].lat);
            localStorage.setItem("longitude", data[0].lon);
            localStorage.setItem('good_response.status', response.status);
            waitForWeather();
        }
        else

            document.getElementById('error').innerHTML = "No city found. Try again."
        document.getElementById("cityId").value = "";
        document.getElementById("countryId").value = "";
        document.getElementById("stateId").value = "";
    }
}


async function getCurrentLocation() {

    const successCallback = (position) => {
        console.log('your latitude ' + position.coords.latitude)
        console.log('your longitude ' + position.coords.longitude)
        localStorage.setItem("latitude", position.coords.latitude);
        localStorage.setItem("longitude", position.coords.longitude);
        waitForWeather();
    };

    const errorCallback = (error) => {
        console.log(position);
        location.replace("./index.html")

    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}


async function waitForWeather() {
    await getWeather();
    location.replace("./views/currentCity.html")

}





// getCoordinates()


async function getWeather() {

    const apyKey = "bedecaf711a6770c6a01a7e84725bfaf";
    var latitude = localStorage.getItem("latitude");
    var longitude = localStorage.getItem("longitude");

    console.log("latitude localstorage: " + latitude);
    console.log("longitude localstorage: " + longitude);

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
        const apiDescription = data.weather[0].description;
        const outputDescription = apiDescription.charAt(0).toUpperCase() + apiDescription.slice(1);
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
        //wind speed km/h
        localStorage.setItem("wind_speed", ((data.wind.speed) * (60 * 60) / 1000).toFixed(2) + " km/h");
        //Cloudiness %
        localStorage.setItem("cloudiness", data.clouds.all + "%");
        //sunrise
        var UnixSunrise = data.sys.sunrise
        localStorage.setItem("sunrise", format_time(UnixSunrise) + " UTC");
        //sunset
        var UnixSunset = data.sys.sunset
        localStorage.setItem("sunset", format_time(UnixSunset) + " UTC");
        //country
        localStorage.setItem("country", data.sys.country);

    }

}


//function to calculate the human form of the time from the UNIX time format
function format_time(s) {
    return new Date(s * 1e3).toISOString().slice(-13, -8);
}



// got all the info. I need to use it inside an object or map to display
// all the results.
async function getForecast() {

    const apyKey = "bedecaf711a6770c6a01a7e84725bfaf"
    var latitude = localStorage.getItem("latitude")
    var longitude = localStorage.getItem("longitude")


    if (latitude && longitude) {
        var forecastLink = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=" + apyKey;

        localStorage.setItem("forecastLink", forecastLink);

        const response = await fetch(forecastLink);
        const data = await response.json();
        console.log(data);
        // localStorage.setItem("forecast_temp", data.list[0].main.temp);
        const mainUL = document.createElement("ul");
        // displayForecast



        for (let i = 0; i < data.list.length; i++) {
            // const forecastLI = document.createElement("li");

            var timestamp = data.list[i].dt * 1000;
            var date = new Date(timestamp);
            var hour = date.getHours();
            if (hour < 10) {
                hour = "0" + hour;
            }

            // store data for the graph
            var string = date.toDateString()

            let nameOfDay = string.substring(string.length - 12, 0);
            let numberOfDay = string.substring(string.length - 4, + 7);

            hours.push(nameOfDay + " " + numberOfDay + " " + hour + ':00');
            temps.push(Math.round(data.list[i].main.temp));
            feelsLikeArr.push(Math.round(data.list[i].main.feels_like));

            var string = date.toDateString()
            let dateString = string.substring(string.length - 4, 0);
            // forecastLI.innerHTML = dateString + " at " + hour + ":00";



            const forecastDIV = document.createElement("div");


            var rootUrl = "https://openweathermap.org/img/wn/";
            var iconValue = data.list[i].weather[0].icon;
            var iconLink = rootUrl + iconValue + "@2x.png";
            console.log("Icon link " + iconLink)


            // CORRECT IMAGE LINK BUT NOT DISPLAYING PROPERLY
            forecastDIV.innerHTML = `
                    <ul>
                    <li> ${dateString} at ${hour}:00</li>
                    <li><img class='iconForecast' src=${iconLink}> </li>
                      <li>Temp:  ${Math.round(data.list[i].main.temp) + "°C"}</li>
                      <li>Feels like:  ${Math.round(data.list[i].main.feels_like) + "°C"}</li>
                      <li>Condition:  ${data.list[i].weather[0].main}</li>
                      <li>Clouds:  ${data.list[i].clouds.all + "%"}</li>                      
                      <li>Humidity:  ${data.list[i].main.humidity + "%"}</li>
                      <li>Wind:  ${((data.list[i].wind.speed) * (60 * 60) / 1000).toFixed(2) + "km/h"}</li>

                   </ul>`;

            // forecastDIV.style.display = "none";

            // forecastLI.setAttribute("id", "detail" + i);
            // forecastDIV.setAttribute("id", "content" + i);

            forecastDIV.setAttribute("class", "forecastDetails");





            // forecastLI.appendChild(forecastDIV);
            // append forecast list to mainUL
            mainUL.appendChild(forecastDIV);
        }

        // append mainUL to the div element if existing 
        if (document.getElementById("displayForecast")) {
            document.getElementById("displayForecast").appendChild(mainUL);
        }


        //DEBUG PURPOSE ONLY:

        var forecast = data.list.map(function (obj) {

            var timestamp = obj.dt * 1000;

            var date = new Date(timestamp);

            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDay();
            var hour = date.getHours();
            var mins = date.getMinutes();
            var secs = date.getSeconds();

            var dateString = date.toDateString() + " at " + hour + ":00";
            return {
                time: dateString,
                temp: Math.round(obj.main.temp) + "°C",
                icon: obj.weather[0].icon,
                condition: obj.weather[0].main,
                feels_like: Math.round(obj.main.feels_like) + "°C",
                clouds: obj.clouds.all + "%",
                humidity: obj.main.humidity + "%",
                weather: obj.weather,
                main: obj.main
            }
        });
        console.log(forecast);
        // console.log(temps)
        ///finished debug ////////////
    }



}


async function setup() {
    await getForecast()
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: hours,
            datasets: [
                {
                    label: 'Temperature in °C',
                    data: temps,
                    fill: false,
                    borderColor: 'rgba(47, 122, 184, 1)',
                    backgroundColor: 'rgba(47, 122, 184, 0.5)',
                    borderWidth: 1
                },
                {
                    label: 'Feels Like in °C',
                    data: feelsLikeArr,
                    fill: false,
                    borderColor: 'rgba(228, 86, 60, 1)',
                    backgroundColor: 'rgba(228, 86, 60, 0.5)',
                    borderWidth: 1
                }
            ]

        },
        options: {}
    });

}

