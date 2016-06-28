$(document).ready(function(){

  $( ".carousel-inner" ).on( "swipeleft", swipeleftHandler );

  // Callback function references the event target and adds the 'swipeleft' class to it
  function swipeleftHandler( event ){
    $( event.target ).children().prev();
  }

});
