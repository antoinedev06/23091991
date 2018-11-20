$('#nav').on('click', displayMenu);
 $('#nav2').on('click', displayMenu);
 function displayMenu(){
  $('#nav').toggleClass('hidden');
  $('#menu').toggleClass('hidden');
  $('#nav2').toggleClass('hidden');
}
/*
$('#search').autocomplete({
    source : function(requete, reponse){ // les deux arguments représentent les données nécessaires au plugin
	$.ajax({
            url : 'http://ws.geonames.org/searchJSON', // on appelle le script JSON
            dataType : 'json', // on spécifie bien que le type de données est en JSON
            data : {
                name_startsWith : $('#search').val() // on donne la chaîne de caractère tapée dans le champ de recherche
            },
            
            success : function(donnee){
                reponse($.map(donnee.geonames, function(objet){
                    return objet.name + ', ' + objet.countryName; // on retourne cette forme de suggestion
                }));
            }
        });
    }
});

/*