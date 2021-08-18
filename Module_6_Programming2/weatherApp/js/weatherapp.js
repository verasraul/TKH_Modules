
// Created variable to hold key for API:
var appid = ""

// Create empty variables for the infromation that needs to be manipulated matching id elements created in the HTML file:
var icon = ""
var temp = ""
var temScale = ""
var loc= ""

// Create a function to update the appropriate divs with the weather information from API.
function update(weather){
    temp.innerHTMl = weather.temp;
    loc.innerHTMl = weather.loc;
    icon.src = "https://openweathermap.org/img/w/" + weather.icon + ".png";
}

// Create function that would gather the user's geolocation using 'navigator.geolocation' when screen is loaded.
window.onload = function(){
    icon = document.getElementById("icon");
    temp = document.getElementById("temp");
    
    loc = document.getElementById("loc");

    if(navigator.geolocation){
        var showPosition = function(position){
            updateByGeo(position.coords.latitude, position.coords.longitude);
        }
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

// Create a 'updateByGeo' function that will create the URL needed to use the openweathermap API to gather information:
function updateByGeo(lat, lon){
    // Creates a variable called URL and creates URL needed for the API and concateneates the latitude/longitude needed as well as the api-key:
    var url = "https://api.openweathermap.org/data/2.5/weather?" + 
    "lat=" + lat + 
    "&lon=" + lon + 
    "&appid=" + appid;
    // 'sendRequest() takes the URL we created above to make a call/request to the url:
    sendRequest(url);
}

// Create a function that converts the degress from 'kelvin' to 'farenheit'
function K2F(k){
    return Math.floor(9/5 * (k-273) + 32);
}

function cToF(celsius){
    return Math.floor(celsius * 9/5 +32);
}

function fToC(farenheit){
    return Math.floor((farenheit - 32) * 5/9);
}


// Create a JSON send request:
// Function takes the url we created in updateByGeo functiion which uses the user's geolocation and sends it to the API. 
// from there we can parse through the information we receive and deliver it back to the user.
function sendRequest(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            // Here's where the information needed comes in that we need to pass through the update function created
            // above to update our div sections and display information to the screen/user.
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            // data.weather[0], data.name and data.mainn.temp are retrieveing information from an array the API sends back once the user location is known.
            weather.icon = data.weather[0].icon;
            weather.loc = data.name;
            weather.temp = K2F(data.main.temp);
            update(weather);
        };
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

// Create function to allow user to toggle between 'celsius' and 'farenheit':
function toggleScale(){
    if (temScale.innerHTMl === "C"){
        temp.innerHTMl = cToF(temp.innerHTMl);
        temScale.innerHTMl = "°F";
    } else if (temScale.innerHTMl === "°F"){
        temp.innerHTMl = fToC(temp.innerHTMl);
        temScale.innerHTMl = "°C";
    };
    // Create an 'evenlistener' to tell JS to listen for specific even (click) to run the toggle function created above:
    temScale.addEventListener("click", toggleScale);
}

update(temp);
console.log(loc);
console.log(temp);