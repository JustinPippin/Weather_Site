(function () {

})();

//Function to connect to the Dark Sky API and get weather data
function getWeatherInfo() {
    //https://api.darksky.net/forecast/a2b6dc0131ac84f94a87aa55e97f7cff/37.8267,-122.4233
    //Base-URL/APIKey/Latitude,Longitude

    $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267,-122.4233", { dataType: "jsonp"})
    .done(function(data) {
        console.log(data);
    })
    .fail(function(error) {
        console.log(error);
    })
    .always(function() {
        console.log("Weather call complete!");
    })
}

//Function to connect to the MapQUEST Geocoding API and ge geocoding data
function geocode() {

}