$( document ).ready( function() {
	
	var $container = $('#container');	
	var element_li = ['home','concept','chef','menu','contact','gallery','farm','reservation','accolades'];
	
	$('div.main').css( 'visibility', 'visible' );	
	$container.stop().scrollTo('div.home');	
	
	$.each( element_li, function( i, el ){
		var nav_element = 'a.' + el;
		var destination = 'div.' + el;

		$( nav_element ).click( function( e ) {			
			$('div.bg').fadeIn( 2500 );				
			$container.stop().scrollTo( destination, 2500, { easing:'easeInOutExpo' } );			
			e.preventDefault();
		});
	});

	$("#owl-demo").owlCarousel({             
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
	});

});