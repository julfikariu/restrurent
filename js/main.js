$(document).ready(function() {
	
	
	$('#navsmoth_scroll').onePageNav();
	
	 $(".header-area").sticky({topSpacing: 0 });
	 
	 
	 $('.paralax-bg').scrolly({bgParallax: true});
	 
	  // $('body').scrollspy({
		 // target : '.navbar-collapse',
		 // offset : 95;
	 // });

 });
	
	
	
	
	
	/* $("li.smooth-menu a").find('click', function(event){
			var $anchor = $(this);
			var headerH = '30';
	    
		$('html, body').stop().animate({
		scrollTop : $($anchor.attr('href')}.offset().top - headerH + "px"
		 
		 },1200,'easelroutfxpo');
		 
		 event.preventDefault();
	 }); */
	
