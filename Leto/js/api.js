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

// fonction appelé dans le ajax qui gère l'affichage
function displayCities(response) {
    console.log(response);

    // je vide la list à chaque foisavant de append
    $('#data_list').empty();

    // je veux pas pluis de 5 propositions
    var len = response.cities.length;
    if (len > 6) {
        len = 6
    }

    //je boucle et j'affiche les propositions ds la liste 
    for (var i = 0; i < len ; i++) {
        $('#data_list').append('<li data-cityId="'+response.cities[i].id+'">'+response.cities[i].name+'</li>');
    }
    
}



function findShowtimesByCity(cityId, movieId, date) {
    $.ajax({
    url: "https://api.internationalshowtimes.com/v4/showtimes?city_ids="+cityId+"&movie_id="+movieId+"&distance=25&countries=FR&time_to="+date,
    type: "GET",
    datatype: "json",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
    })
    .done(displayShowtimes)
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    });   
}

function displayShowtimes(data) {
    var cinema = [];

    for (var i = 0; i < data.showtimes.length; i++) {
        
        var seance = splitSeance(data.showtimes[i].start_at); 

        if(i == 0) {
            cinema.push({
                        cineId :  data.showtimes[i].cinema_id,
                        show : {
                            sc: [seance],
                            url: [data.showtimes[i].booking_link]
                        }
                    });
        } 

        if (i > 0) {
            var test = true;
            for (var j = 0; j < cinema.length; j ++) {
                if (cinema[j].cineId == data.showtimes[i].cinema_id) {
                    cinema[j].show.sc.push(seance);
                    cinema[j].show.url.push(data.showtimes[i].booking_link);
                    test = false;
                }
                    
            }
            if (test) {
                cinema.push({
                    cineId :  data.showtimes[i].cinema_id,
                    show : {
                            sc: [seance],
                            url: [data.showtimes[i].booking_link]
                            }
                    });
            }

        }
    }
     console.log('cine', cinema);   
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
    .done(displayMovieDetails)
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    });

}


function displayMovieDetails(response) {
    console.log(response);
}
