var cityId = "";


// fonction affichage menu 

function displayMenu(){
  $('#nav').toggleClass('hidden');
  $('#menu').toggleClass('hidden');
  $('#nav2').toggleClass('hidden');
}

$('#nav').on('click', displayMenu);
$('#nav2').on('click', displayMenu);


function automatiseSelect() {
    var date = new Date();
    var month = date.getMonth();
    var monthNum = date.getMonth()+1;
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
    $('#selectDay').append('<option data-date="'+year+'-'+monthNum+'-'+dateDay+'" selected="selected">'+year+'-'+monthNum+'-'+dateDay+'</option>')


    for (var i = 2; i < 8; i++) {

        date.setDate(date.getDate() + 1);
        var day = date.getDay();
        var dateDay = date.getDate();
        var month = date.getMonth();
        var monthNum = date.getMonth()+1;
        var day = date.getDay();

        $('#selectDay').append('<option data-date="'+year+'-'+monthNum+'-'+dateDay+'">'+year+'-'+monthNum+'-'+dateDay+'</option>')

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
    cityId = $(this).data('cityid');
    console.log(cityId);
    var dateCity = new Date();
    var completeDC = dateCity.getFullYear()+'-'+dateCity.getMonth()+'-'+dateCity.getDate();
    console.log(completeDC);
    findShowtimesByCity(cityId, 52340, completeDC+'T00:00', completeDC+'T23:59');
    $('#search').val('');
    $('#data_list').addClass('hidden');
}

function onClickRecupDate() {
    var dateClick = $(this).data('date');
    console.log(dateClick);
    //findShowtimesByCity(cityId, 52340, dateClick+'T00:01', dateClick+'T23:59');
}


//actions


automatiseSelect();
// le listener sur la barre de recherche 
// le meilleur event c'est keyup 
$('#search').on('keyup', onChangeInputVal);
$(document).on('click', '#data_list li',onClickRecupCity);

$(document).on('click', '.calendar li',onClickRecupDate);
