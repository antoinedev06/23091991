function findCityWithQuery(query) {
    $.ajax({
    url: "https://api.internationalshowtimes.com/v4/cities?query="+query,
    type: "GET",
    datatype: "json",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
    })
    .done(function(response, textStatus, jqXHR) {
        console.log(response);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    });   
}

<<<<<<< HEAD
var cityChoose = document.getElementById('search');

var cityDisplay = document.querySelector('ul');

cityChoose.onchange = function() {
  var city = cityChoose.value;
  updateDisplay(city);
};

function updateDisplay(city) {

city = city.replace(" ", "");
city = city.toLowerCase();
var url = findCityWithQuery(city);

request.onload = function() {
 cityDisplay.textContent = request.response;
};
request.send();

updateDisplay('');
cityChoose.value = '';
};

/*------------*/
$(function() {
   $( "#search").autocomplete({
         source: findCityWithQuery(),
         minLength: 2,
   });
});




=======
>>>>>>> 774ac65933740b414a84b682dac0a8aa3d7e326d
function findShowtimesByCity(cityId, movieId, date) {
    $.ajax({
    url: "https://api.internationalshowtimes.com/v4/showtimes?city_ids="+cityId+"&movie_id="+movieId+"&time_to="+date,
    type: "GET",
    datatype: "json",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
    })
    .done(function(response, textStatus, jqXHR) {
        console.log(response);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    });   
}
<<<<<<< HEAD

=======
>>>>>>> 774ac65933740b414a84b682dac0a8aa3d7e326d
function findCinemaById(cineId) {
    $.ajax({
    url: "https://api.internationalshowtimes.com/v4/cinema/"+cityId,
    type: "GET",
    datatype: "json",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
    })
    .done(function(response, textStatus, jqXHR) {
        console.log(response);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    });   
}
<<<<<<< HEAD

function displayMovieWithId(id) {

=======
function displayMovieWithId(id) {
>>>>>>> 774ac65933740b414a84b682dac0a8aa3d7e326d
    $.ajax({
    url: "https://api.internationalshowtimes.com/v4/movies/"+id,
    type: "GET",
    datatype: "json",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
    })
    .done(function(response, textStatus, jqXHR) {
        console.log(response);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    });
<<<<<<< HEAD

}
=======
}

findCityWithQuery('tou');
>>>>>>> 774ac65933740b414a84b682dac0a8aa3d7e326d
