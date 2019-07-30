// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
//
//
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.



$( document ).ready(function() {


    var dischi = 'https://flynn.boolean.careers/exercises/api/array/music';





      $.ajax({
        url : dischi,
        method : 'GET',
        success : function(data){


          var albums = data.response;
          console.log(albums);
          for (var i = 0; i < albums.length; i++) {
            var source = $("#template").html();
            var template = Handlebars.compile(source);

            var album = albums[i];

            var context = {
            'poster': album.poster,
            'title': album.title,
            'author':album.author,
            'genre':album.genre,
            'year':album.year,
            };
            console.log(context);
            var insert = template(context);
            $('.container.cds-container').append(insert);

          }
        },
        error :
          $('.container .cds-container').append('errore')


      }
    );

});
