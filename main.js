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

      $('select').change(function(){      //funzione cambio genere con la select

        $('select option:selected').each(function(){


        var scegli = $(this).text();

        // $('.select button ').click(function(){
        //   var scegli = $('.select input').val();
         console.log(scegli);

        var albums = data.response;
        console.log(albums);
        for (var i = 0; i < albums.length; i++) {
          var source = $("#template").html();
          var template = Handlebars.compile(source); //compila Handlebars

          var album = albums[i];

          if (album.genre == scegli){ //confronto con il genere di ogni item

          var context = {
          'poster': album.poster,
          'title': album.title,
          'author':album.author,
          'genre':album.genre,
          'year':album.year,
          };
          console.log(context);

          var insert = template(context);
          $('.cds-container').append(insert); //appende solo gli oggetti selezionati
                                              // ma non rimuove i precedenti

          }
        }
        });
      });
    },
    error : function(richiesta, stato, errore){
      $('.cds-container').append('errore',errore)

    }

  });


});
