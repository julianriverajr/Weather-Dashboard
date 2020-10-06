$("#searchButton").on("click", function () {
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
        $("main").append($("<p>").text("Temperature: " + Math.round((response.main.temp)*10)/ 10 + " °F"));
        $("main").append($("<p>").text("Humidity: " + response.main.humidity + "%"));
        $("main").append($("<p>").text("Wind speed: " + Math.round((response.wind.speed)*10)/ 10 + " MPH"));

    })
});
