// fonction affichage menu 

function displayMenu(){
  $('#nav').toggleClass('hidden');
  $('#menu').toggleClass('hidden');
  $('#nav2').toggleClass('hidden');
}

$('#nav').on('click', displayMenu);
$('#nav2').on('click', displayMenu);


function displayHours(){
  $('#hours').toggleClass('hidden');
}

$('#day1').on('click', displayHours);
$('#day2').on('click', displayHours);
$('#day3').on('click', displayHours);
$('#day4').on('click', displayHours);
$('#day5').on('click', displayHours);
$('#day6').on('click', displayHours);
$('#day7').on('click', displayHours);
// fonction qui se déclenche au click
// la list #data_list a une class hiddent au début

function onChangeInputVal(e) {
    // à chaque keyup je récupère ce qui a dans le input
    var query = $('#search').val();
    console.log(query);


    // je teste si y a qque chose dans le input
    // si oui je retire la classe hidden
    // j'appelle ma fonxtion ajax en fonction du mot clef
    //sinon je remet la list avec une class hidden
    if(query != "") {
        $('#data_list').removeClass('hidden');
        findCityWithQuery(query);
    } else {
        $('#data_list').addClass('hidden');
    }


    
}


function onClickRecupCity() {
    var cityId = $(this).data('cityid');
    console.log(cityId);
    findShowtimesByCity(cityId, 49575, '2018-12-31');
    $('#search').val('');
    $('#data_list').addClass('hidden');
}

displayMovieWithId(49575);

// le listener sur la barre de recherche 
// le meilleur event c'est keyup 
$('#search').on('keyup', onChangeInputVal);
$(document).on('click', '#data_list li',onClickRecupCity);
