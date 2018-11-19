/*var action = document.getElementById('nav');

action.addEventListener("click", function(){
   var etat = document.getElementById('menu').style.visibility;
   if(etat=="hidden"){
   document.getElementById('menu').style.visibility="visible";
   document.getElementById('nav2').style.visibility="visible";
   document.getElementById('nav').style.visibility="hidden";
   }
   else{
   document.getElementById('menu').style.visibility="hidden";
   document.getElementById('nav').style.visibility="visible";
   }  
}, false);

var action = document.getElementById('nav2');

action.addEventListener("click", function(){
   var etat = document.getElementById('menu').style.visibility;
   if(etat=="hidden"){
   document.getElementById('menu').style.visibility="visible";
   document.getElementById('nav2').style.visibility="visible";
   document.getElementById('nav').style.visibility="hidden";
   }
   else{
   document.getElementById('menu').style.visibility="hidden";
   document.getElementById('nav').style.visibility="visible";
   document.getElementById('nav2').style.visibility="hidden";
   }  
}, false);

*/

$('#nav').on('click', displayMenu);

$('#nav2').on('click', displayMenu);

function displayMenu(){
  $('#nav').toggleClass('hidden');
  $('#menu').toggleClass('hidden');
  $('#nav2').toggleClass('hidden');
}
