$("#searchButton").on("click", function () {
    $("main").empty();
    $("#cityName").text();
    //variables for ajax function to pull from when retrieving weather info
    var apiKey = "1d730319312affde67db4e3cca07e92f";
    var city = $("#cityName").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
    console.log(city);

    //ajax function asking for information from open weather map
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("main").append($("<h3>").text("City: " + city));
        // adding temp to main div and rounding to one decimal
        $("main").append($("<p>").text("Temperature: " + Math.round((response.main.temp) * 10) / 10 + " °F"));
        $("main").append($("<p>").text("Humidity: " + response.main.humidity + "%"));
        // adding wind speed to main div and rounding to one decimal
        $("main").append($("<p>").text("Wind speed: " + Math.round((response.wind.speed) * 10) / 10 + " MPH"));

        // setting city's coordinates of latitude and longitude for use in the uv index funciton
        var coordinatesLat = (response.coord.lat);
        var coordinatesLon = (response.coord.lon);
        console.log(coordinatesLat, coordinatesLon);
        var queryURLuv = "https://api.openweathermap.org/data/2.5/uvi?lat=" + coordinatesLat + "&lon=" + coordinatesLon + "&appid=" + apiKey;
        //ajax function asking for information from open weather map for uv index information
        $.ajax({
            url: queryURLuv,
            method: "GET"
        }).then(function (response2) {
            console.log(response2);
            // adding uv index to main div and rounding to one decimal
            $("main").append($("<p>").text("UV Index: " + Math.round((response2.value) * 10) / 10));
            $("#previousSearchesDiv").append($("<p text-align:right;>").text(city));
        });

        var queryURL5Day = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=Imperial&appid=" + apiKey;
        //ajax function for 5 day forecast
        $.ajax({
            url: queryURL5Day,
            method: "GET"
        }).then(function (response5Day) {
            console.log(response5Day);
        });
    }); 
    var inputArr = [""];
    var previousSearches = $("input").val();
    localStorage.setItem("previousSearches", previousSearches);
    console.log(previousSearches);
});

var LSpreviousSearches = localStorage.getItem("previousSearches");
$("#previousSearchesDiv").append(LSpreviousSearches);
