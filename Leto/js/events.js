

$('#nav').on('click', displayMenu);
 $('#nav2').on('click', displayMenu);
 function displayMenu(){
  $('#nav').toggleClass('hidden');
  $('#menu').toggleClass('hidden');
  $('#nav2').toggleClass('hidden');
}


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