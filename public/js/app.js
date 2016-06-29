$(document).ready(function(){

  // $( ".carousel-inner" ).on( "swipeleft", swipeleftHandler );
  //
  // // Callback function references the event target and adds the 'swipeleft' class to it
  // function swipeleftHandler( event ){
  //   $( event.target ).children().prev();
  // }

  // $("#content").load("frontpage.html");

  $("#innovation").click(function(event){
      $.ajax( {
         url:'Innovation.html',
            success:function(data) {
            $('#content').html(data);
          }
      });
  });

  $("#newsroom").click(function(event){
                $.ajax( {
                   url:'Newsroom.html',
                   success:function(data) {
                      $('#content').html(data);
                   }
                });
              });

  $("#contactus").click(function(event){
      $.ajax( {
          url:'ContactUs.html',
          success:function(data) {
            $('#content').html(data);
          }
      });
  });

  $("#button1").click(function(event){
      $.ajax( {
         url:'Innovation.html',
            success:function(data) {
            $('#content').html(data);
          }
      });
  });

  $("#button2").click(function(event){
                $.ajax( {
                   url:'Newsroom.html',
                   success:function(data) {
                      $('#content').html(data);
                   }
                });
              });
              $("#button3").click(function(event){
                  $.ajax( {
                      url:'ContactUs.html',
                      success:function(data) {
                        $('#content').html(data);
                      }
                  });
              });
});
