$( ".flex-container > div" ).hover(
  function() {
    $( this ).addClass( "hovered" );
  }, function() {
    $( this ).removeClass( "hovered" );
  }
);
