$(document).ready(function(){
	$( "#right" ).click(function() {
        $( ".block" ).animate({ "left": "+=50px" }, "fast" ).fadeToggle("fast","linear");
     });
 
    $( "#left" ).click(function(){
        $( ".block" ).animate({ "left": "-=50px" }, "fast" );
     });

    function getISS(){
	  $.getJSON( 'http://api.open-notify.org/iss-now.json', function( json ) {
	    $('#issLat').text('Latitudine: ' + json.iss_position.latitude);
	    $('#issLon').text('Longitudine: ' + json.iss_position.longitude);
	  });
	}
	$(function() { setInterval(getISS, 1000); });

	//Curs valutar
	 $('.btn').click(function(){
      $.getJSON( 'https://api.fixer.io/latest?base=Ron', function( json ) {
        console.log(json.date);
        console.log(json.rates.EUR);
        $('.info').append(" "+json.rates.EUR);
      });
   });


});

$(window).on("load",function () {
    // Page is fully loaded .. time to fade out your div with a timer ..
    $("#loader").show(0).delay(1000).hide(0);
});