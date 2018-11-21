// cette fonction fait un appel ajax 
// en fonction d'un mot clef

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
    .done(displayCities)
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    });   
}


function displayCities() {
    console.log(response);
}


/*
**** On a pas encore besoin de ça ****


    function displayCity(query, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
    
    $('#search').get(query);
    
    if(query != undefined) {
        $('#data_list').text(findCityWithQuery(query));
    } else  { "Votre saisie est invalide!";
    }
    //gestion des suggestions, seulement 5 villes
    var cast ="";
    for(var i = 0; i < 5; i++) {
        cast += query.cast[i].city+', '
    }

    $('#data_list').text(cast);
    }

  
/*------------*/



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


function displayMovieWithId(id) {

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

}

*/

