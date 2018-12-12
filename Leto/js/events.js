var cityId = 22667;

// fonction affichage menu 

function displayMenu(){
  $('#nav').toggleClass('hidden');
  $('#menu').toggleClass('hidden');
  $('#nav2').toggleClass('hidden');
}

// affichage des select

function automatiseSelect() {
    var date = new Date();
    var month = date.getMonth();
    var monthNum = date.getMonth()+1;
    var day = date.getDay();
    var dateDay = date.getDate();
    var year = date.getFullYear();

    var days = ['DIM','LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM'];
    var months = ['jan','fev', 'mar', 'avr', 'mai', 'jui', 'jui', 'aou', 'sep', 'oct', 'nov','dec'];
    $('#selectDay').append('<option data-date="'+year+'-'+monthNum+'-'+dateDay+'" selected="selected">'+dateDay+' '+months[month]+' '+year+'</option>')


    for (var i = 2; i < 30; i++) {

        date.setDate(date.getDate() + 1);
        var day = date.getDay();
        var dateDay = date.getDate();
        var month = date.getMonth();
        var monthNum = date.getMonth()+1;
        var day = date.getDay();

        if (year+'-'+monthNum+'-'+dateDay == "2018-12-3") {
            $('#selectDay').append('<option selected="selected" data-date="'+year+'-'+monthNum+'-'+dateDay+'">'+dateDay+' '+months[month]+' '+year+'</option>')

        } else {
            $('#selectDay').append('<option data-date="'+year+'-'+monthNum+'-'+dateDay+'">'+dateDay+' '+months[month]+' '+year+'</option>');
        }
    }
}



// fonction qui se déclenche au click
// la list #data_list a une class hiddent au début

function onChangeInputVal(e) {
    // à chaque keyup je récupère ce qui a dans le input
    var query = $('#search').val();

    // je teste si y a qque chose dans le input
    // si oui je retire la classe hidden
    // j'appelle ma fonction ajax en fonction du mot clef
    //sinon je remet la list avec une class hidden
    if(query != "") {
        $('#data_list').removeClass('hidden');
        findCityWithQuery(query);
    } else {
        $('#data_list').addClass('hidden');
    }
 
}


function onClickRecupCity() {
    cityId = $(this).data('cityid');
    var cityName = $(this).text();
    $('#city').text('Séances pour la ville de : '+cityName);
    var completeDC = $('#selectDay').val();
    var completeHour = $('#selectHour').val();
    findShowtimesByCity(cityId, 52340, completeDC+'T'+completeHour, completeDC+'T23:59');
    $('#search').val('');
    $('#data_list').addClass('hidden');
}

function onChangeRecupCity() {
    var completeDC = $('#selectDay').val();
    var completeHour = $('#selectHour').val();
    console.log(completeDC);
    findShowtimesByCity(cityId, 52340, completeDC+'T'+completeHour, completeDC+'T23:59');
    $('#search').val('');
    $('#data_list').addClass('hidden');
}

function onClickDisplayCalendar() {
    $('.resa .exemple').addClass('hidden');
    var k = $(this).data('resa');
    $('.resa-'+k+' .exemple').removeClass('hidden');
}

function start() {
    $('#city').text('Séances pour la ville de : Paris');
    var completeDC = $('#selectDay').val();
    var completeHour = $('#selectHour').val();
    console.log(completeDC);
    findShowtimesByCity(cityId, 52340, completeDC+'T'+completeHour, completeDC+'T23:59');

}

//actions
// id Leto 52340

$(document).ready(function(){
    
    automatiseSelect();
    start();

    $('#nav').on('click', displayMenu);
    $('#nav2').on('click', displayMenu);

    $('#search').on('keyup', onChangeInputVal);
    $(document).on('click', '#data_list li',onClickRecupCity);
    $('#selectDay').on('change', onChangeRecupCity);
    $('#selectHour').on('change', onChangeRecupCity);
    
});




