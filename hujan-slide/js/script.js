$( document ).ready( function() {
	
	var $container = $('#container');	
	var element_li = ['home','concept','chef','menu','contact'];
	
	$('div.main').css( 'visibility', 'visible' );	
	$container.stop().scrollTo('div.home');	
	
	$.each( element_li, function( i, el ){
		var nav_element = 'a.' + el;
		var destination = 'div.' + el;

		console.log(i);
		console.log(el);
		
		$( nav_element ).click( function( e ) {			
			$('div.bg').fadeIn( 2500 );				
			$container.stop().scrollTo( destination, 2500, { easing:'easeInOutExpo' } );			
			e.preventDefault();
		});
	});
});