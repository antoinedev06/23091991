function extractUrlParams () {
	var t = location.search.substring(1).split('&');

	var f = [];
	for (var i=0; i<t.length; i++) {
	var x = t[ i ].split('=');

	f[x[0]]=x[1];
	}
	return f;
}

function dateUsToFrench(date) {

	var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
	var tabdate = date.split('-');
	var newDate = tabdate[2]+' '+month[tabdate[1]-1]+' '+tabdate[0];

	return newDate;
}


// deuxieme partie

function haveDateNextDay(date, day) {
	date.setDate(date.getDate() + day);
	return date;
}

function splitSeance(string) {
	var hours = string.split('T');
	var day = hours[0];
	var resultHours = hours[1].split(':');
	var result = { day: day, hour: resultHours[0]+':'+resultHours[1] };
	return result;
}

function automatiseCalendar(j, cineId) {
    var date = new Date($('#selectDay').val());
    var month = date.getMonth();
    var monthNum = date.getMonth()+1;
    var day = date.getDay();
    var dateDay = date.getDate();
    var year = date.getFullYear();

    var days = ['DIM','LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM'];
    var months = ['jan','fev', 'mar', 'avr', 'mai', 'jui', 'jui', 'aou', 'sep', 'oct', 'nov','dec'];

    $('.resa-'+j+' .calendar').empty();

    $('.resa-'+j+' .calendar').append('<li class="data-selected" data-resa="'+j+'" data-cineId="'+cineId+'" data-date="'+year+'-'+monthNum+'-'+dateDay+'" id="day1">'+days[day]+'<br>'+months[month]+'<br>'+dateDay+'</li>');

    for (var i = 2; i < 8; i++) {

        date.setDate(date.getDate() + 1);
        var day = date.getDay();
        var dateDay = date.getDate();
        var month = date.getMonth();
        var monthNum = date.getMonth()+1;
        var day = date.getDay();

        $('.resa-'+j+' .calendar').append('<li class="" data-resa="'+j+'" data-cineId="'+cineId+'" data-date="'+year+'-'+monthNum+'-'+dateDay+'" id="day'+i+'">'+days[day]+'<br>'+months[month]+'<br>'+dateDay+'</li>');

    }

}