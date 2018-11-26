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

//lyon 23804


function findShowtimesByCity(cityId, movieId, dateFrom, dateTo) {
    $.ajax({
    url: "https://api.internationalshowtimes.com/v4/showtimes?city_ids="+cityId+"&movie_id="+movieId+"&distance=25&countries=FR&time_from="+dateFrom+"&time_to="+dateTo,
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
    console.log(data);
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

     createCalendar(cinema);
}

function createCalendar(cinema) {
    $('main').empty();

    for (var i = 0; i < cinema.length; i++) {
        var cine = $('<section class="resa resa-'+i+'">');
        cine.append($('<section class="gris">')
            .append('<article id="'+cinema[i].cineId+'"><div class="cine clearfix"><img src="img/iconugc.png"><h2 class="maj"></h2><p class="maj"></p></div></article>'))
            .append($('<div class="exemple">')
                .append('<ul class="calendar"></ul>')
                .append('<article class="" id="hours"><p class="choix">Sélectionnez une heure pour acheter votre ticket</h4><p><strong>Séances pour Leto</strong></p><ul class="hours-detail"></ul></article>'));
        

        $('main').append(cine);
    }

    var resa = $('.resa');
    console.log(resa.length);

    for (var k = 0; k < resa.length; k++) {
        automatiseCalendar(k, cinema[k].cineId);

        for (var j = 0; j < cinema[k].show.sc.length; j ++ ) {
            $('.resa-'+k+' .hours-detail').empty();
            
            $('.resa-'+k+' .hours-detail').append('<li><a href="'+cinema[k].show.url[j]+'">'+cinema[k].show.sc[j].hour+'</a></li>')
        }
     
        $(document).on('click', '.resa-'+k+' .calendar li',onClickRecupDate);
        
    }

    for (var m = 0; m < cinema.length; m++) {
        findCinemaById(cinema[m].cineId);
    }


}

function onClickRecupDate() {
    var dateClick = $(this).data('date');
    console.log('d',dateClick);
   var k = $(this).data('resa');
   console.log('k', k);
   var cineId = $(this).data('cineid');
   console.log(cineId);
    $('.resa-'+k+' .calendar li').removeClass('data-selected');
    $(this).addClass('data-selected');
    //findShowtimesByCity(cityId, 52340, dateClick+'T00:01', dateClick+'T23:59');
}

findShowtimesByCity(23804, 52340, '2018-11-26T00:01', '2018-12-26T23:59')
//findCinemaById(60431);

function findCinemaById(cineId) {
    $.ajax({
    url: "https://api.internationalshowtimes.com/v4/cinemas/"+cineId,
    type: "GET",
    datatype: "json",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
    })
    .done(displayCinema)
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    });   
}

function displayCinema(response) {
    console.log(response);
    console.log($('#'+response.id+' h2'));
    $('#'+response.id+' h2').html(response.cinema.name);
    $('#'+response.id+' p').html(response.cinema.location.address.display_text);
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
