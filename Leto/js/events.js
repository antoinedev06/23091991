function displayMenu(){
  $('#nav').toggleClass('hidden');
  $('#menu').toggleClass('hidden');
  $('#nav2').toggleClass('hidden');
}




$('#nav').on('click', displayMenu);
$('#nav2').on('click', displayMenu);

