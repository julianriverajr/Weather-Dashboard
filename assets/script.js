$("#searchButton").on("click", function () {
    //variables for ajax function to pull from when retrieving weather info
    var apiKey = "1d730319312affde67db4e3cca07e92f";
    var city = $("#cityName").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    console.log(city);

    //ajax function asking for information from open weather map
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("h2").text("City: " + city);
    })
});