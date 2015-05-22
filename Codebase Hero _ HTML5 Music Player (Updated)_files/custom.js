// On document ready functions
// ======================================================================

// If JavaScript is enabled remove 'no-js' class and give 'js' class
jQuery('html').removeClass('no-js').addClass('js');

jQuery(document).ready(function($) {

	jQuery('#windowTitleDialog').bind('show', function () { document.getElementById ("xlInput").value = document.title; });
	
	jQuery(document).tooltips();
	
	// FitVid Magic - Target all videos
	jQuery("body").fitVids();
	
	//AutoHeight Textareas
	jQuery('textarea.auto-height').flexText();
	 
	 //Image Overlays
	 if (jQuery().rmimage_rollover) { jQuery(".post-thumb").rmimage_rollover(); 	}
	  
  	 //Validate forms 
	 if (jQuery().validate) { jQuery("#commentform").validate(); }
    
   	//activate the mega menu
 	jQuery(".main_menu .radium_mega").radiumMegamenu({
 		sensitivity: 1, // number = sensitivity threshold (must be 1 or higher)
 		interval: 0, // number = milliseconds for onMouseOver polling interval
 		timeout: 1, // number = milliseconds delay before onMouseOut	
 	});
	
	//Back to Top
	jQuery().UItoTop({ 
		text: 'Back To Top',
		easingType: 'easeOutQuart'
	});
		
	/* ---------------------------------------------------------------------- */
	/* Isotope 
	/* ---------------------------------------------------------------------- */
	if( jQuery().isotope ) {
	    
	    jQuery(function() {

            var container = jQuery('.isotope'),
                optionFilter = jQuery('#sort-by'),
                optionFilterLinks = optionFilter.find('a');
            
            optionFilterLinks.attr('href', '#');
            
            optionFilterLinks.click(function(){
                var selector = jQuery(this).attr('data-filter');
                container.isotope({ 
                    filter : '.' + selector, 
                    itemSelector : '.page-grid-item',
                    layoutMode : 'fitRows',
                    animationEngine : 'best-available'
                });
                
                // Highlight the correct filter
                optionFilterLinks.removeClass('active');
                jQuery(this).addClass('active');
                return false;
            });
            
	    });
    
	}
	
		
	/* ---------------------------------------------------------------------- */
	/* Accordion event handlers
	/* ---------------------------------------------------------------------- */
	jQuery('.slideimage').hide();
	jQuery('.slide-minicaption').hide();
	jQuery('.slidecaption').hide();

	jQuery(".accslide").hover(function() {
		jQuery(".slide-minicaption",this).stop().animate({opacity: 0},200, 'easeInSine').parent().find(".slidecaption").show().stop().delay(400).animate({opacity: 0.8, bottom: '20'},400, 'easeOutSine');	
	},function(){
		jQuery(".slide-minicaption",this).stop().animate({opacity: 0.8},200, 'easeOutSine');
		jQuery(".slidecaption",this).stop().animate({opacity: 0, bottom: '-20'}, 200, 'easeInSine').hide();				
	});
	
		
});

 
/*-----------------------------------------------------------------------------------*/
//	Preload
/*-----------------------------------------------------------------------------------*/
jQuery(window).bind('load', function() {
     
    jQuery('div').removeClass('preload');  
    
    jQuery('.post-thumb a img').hover(
        function () { jQuery(jQuery(this)).stop().animate({ opacity: "0.2" },300); },
        function () { jQuery(jQuery(this)).stop().animate({ opacity: "1" },300); }
    );

});


/* ----------------------------------------------------- 
/* Bean Mega Menu
/* ----------------------------------------------------- */

(function($) {

	$.fn.radiumMegamenu = function(variables) {
	
		var defaults = {
			modify_position:true,
			sensitivity: 1, // number = sensitivity threshold (must be 1 or higher)
			interval: 10, // number = milliseconds for onMouseOver polling interval
			timeout: 10, // number = milliseconds delay before onMouseOut
		};
		
		var options = $.extend(defaults, variables);
		
		return this.each(function() {
			var menu = $(this),
				menuItems = menu.find(">li"),
				megaItems = menuItems.find(">div").parent().css({overflow:'hidden'}),
				dropdownItems = menuItems.find(">ul").parent(),
				parentContainerWidth = menu.parent().width(),
				descriptions = menu.find('.main-menu-description');
		
			if(descriptions.length) menu.addClass('menu-has-desc');
			
			menuItems.each(function() {
				var item = $(this),
					pos = item.position(),
					megaDiv = item.find("div:first").css({opacity:0, display:"none"}),
					normalDropdown = "";
				
				//check if we got a mega menu	
				if(!megaDiv.length) {
					normalDropdown = item.find(">ul").css({display:"none"});
				}
				
				//if we got a mega menu or dropdown menu add the arrow beside the menu item	
				if(megaDiv.length || normalDropdown.length) {
				
					var link = item.addClass('has-submenu').find('>a');
					link.html("<span class='submenu-link'>"+link.html()+"</span>").append('<span class="submenu-indicator"></span>');

					//is a mega menu main item doesn't have a link to click use the default cursor
					if(typeof link.attr('href') != 'string'){ link.css('cursor','default'); }
				}
				
				//correct position of mega menus			
				if(options.modify_position && megaDiv.length) {										
					if(megaDiv.width() > pos.left) {
						megaDiv.css({left: (Math.ceil() * -1)});
					}
					else if(pos.left + megaDiv.width() > parentContainerWidth) {
						megaDiv.css({left: (megaDiv.width() - pos.left) * -1 });
					}
				}
				
			});	
				
			function megaDivShow(i) {
					var item = megaItems.filter(':eq('+i+')').css({overflow:'visible'}).find("div:first"),
						link = megaItems.filter(':eq('+i+')').find("a:first");
						
					item.stop().css('display','block').animate({opacity:1},10);
						
					if(item.length) {
						link.addClass('open-mega-a');
					}
			}
			
			function megaDivHide (i) {
				megaItems.filter(':eq('+i+')').find(">a").removeClass('open-mega-a');
				
				var listItem = megaItems.filter(':eq('+i+')'),
					item = listItem.find("div:first");
					
				item.stop().css('display','block').animate({opacity:0},10, function() {
					$(this).css('display','none');
					listItem.css({overflow:'hidden'});
				});
			}

			//bind event for mega menu
			megaItems.each(function(i) {
				var menuConfig = {
					sensitivity: options.sensitivity,	
 					interval: options.interval,
					timeout: options.timeout,
				    over: function() { megaDivShow(i); }, 
				    out: function() { megaDivHide(i); } 
				 };
				  			
				$(this).hoverIntent(menuConfig);
			});
			
			// bind events for normal dropdown menus
			dropdownItems.find('li').andSelf().each(function() {	
				var currentItem = $(this),
					sublist = currentItem.find('ul:first'),
					showList = false;
							
				if(sublist.length) { 
					sublist.css({display:'block', opacity:0, visibility:'hidden'}); 
					var currentLink = currentItem.find('>a');
					var menuConfig2 = {
							sensitivity: options.sensitivity,	
							interval: options.interval,
							timeout: options.timeout,
 							over: function() { sublist.stop().css({visibility:'visible'}).animate({opacity:1},0); }, 
 							out: function() { sublist.stop().css({visibility:'hidden'}).animate({opacity:0},0); }
						}
					$(this).hoverIntent(menuConfig2);
				}
		
			}); //bind
			
			
		});
	};
})(jQuery);	




/* ---------------------------------------------------------------------- */
/* OPTIONAL HEADER DISPLAY ON SCROLL
/* ---------------------------------------------------------------------- */
jQuery(document).ready(function($) {
 $(window).scroll(function(){
  var h = $('#wrapper').height();
  var y = $(window).scrollTop();
  if( y > (h*.08) && y < (h*.92) ){
   $(".header-nav").fadeIn("slow");
  } else {
   $('.header-nav').fadeOut('slow');
  }
	});	

});