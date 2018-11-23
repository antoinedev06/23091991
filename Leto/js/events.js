// fonction affichage menu 

function displayMenu(){
  $('#nav').toggleClass('hidden');
  $('#menu').toggleClass('hidden');
  $('#nav2').toggleClass('hidden');
}

$('#nav').on('click', displayMenu);
$('#nav2').on('click', displayMenu);

var date = new Date();

function automatiseCalendar() {
    var date = new Date();

    var month = date.getMonth();
    var day = date.getDay();
    var dateDay = date.getDate();
    var year = date.getFullYear();

    if (month < 10) {
        month = '0'+month;
    }

    if (dateDay < 10) {
        dateDay = '0'+day;
    }

    var days = ['DIM','LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM'];
    var months = ['jan','fev', 'mar', 'avr', 'mai', 'jui', 'jui', 'aou', 'sep', 'oct', 'nov','dec'];

    $('.calendar').empty();

    $('.calendar').append('<li data-date="'+year+'/'+month+'/'+dateDay+'" id="day1">'+days[day]+'<br>'+months[month]+'<br>'+dateDay+'</li>');


    for (var i = 2; i < 8; i++) {

        date.setDate(date.getDate() + 1);
        var day = date.getDay();
        var dateDay = date.getDate();
        var month = date.getMonth();
        var day = date.getDay();
        

        $('.calendar').append('<li data-date="'+year+'/'+month+'/'+dateDay+'" id="day1">'+days[day]+'<br>'+months[month]+'<br>'+dateDay+'</li>');

    }

}

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
    findShowtimesByCity(cityId, 52340, '2019-12-31');
    $('#search').val('');
    $('#data_list').addClass('hidden');
}


//actions

displayMovieWithId(52340);
automatiseCalendar();
// le listener sur la barre de recherche 
// le meilleur event c'est keyup 
$('#search').on('keyup', onChangeInputVal);
$(document).on('click', '#data_list li',onClickRecupCity);
