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

//Function to connect to the MapQUEST Geocoding API and get geocoding data
function geocode() {
    //Base-URL + APIKey + &location= + Address
    $.ajax("http://www.mapquestapi.com/geocoding/v1/address?key=KEY/" + mapQuestKey + "&location=Washington,DC")
    .done(function(data) {
        console.log(data);
    })
    .fail(function(error) {
        console.log(error);
    })
    .always(function() {
        console.log("Geocoding call finished!");
    })
}