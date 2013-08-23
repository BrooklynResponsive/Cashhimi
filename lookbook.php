<!DOCTYPE html>
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="en" > <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en" > <!--<![endif]-->

<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>Cashhimi Shop</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="shortcut icon" href="favicon.ico">
    

  <? require('include/all_pages_head_element.inc'); ?>


	<link rel="stylesheet" href="fancybox/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />




</head>
<body>
  
  
  <? 
  	//The header and body need to be done by the same include because of the push menu.
  	require("include/all_pages_body.inc"); ?>

  

</body>

    <? require('include/all_pages_before_html_end.inc'); ?>
    
	<script type="text/javascript" src="fancybox/jquery.fancybox.pack.js?v=2.1.5"></script>
	
	<script>
		$(document).ready(function() { 
			$(".lookbook-slider:visible").foundation('orbit',{
			  animation: 'slide',
/* 			  timer_speed: 10000, */
			  pause_on_hover: true,
			  resume_on_mouseout: false,
			  animation_speed: 500,
			  stack_on_small: false,
			  navigation_arrows: true,
			  slide_number: true,
			  container_class: 'orbit-container',
/* 			  stack_on_small_class: 'orbit-stack-on-small', */
			  next_class: 'orbit-next',
			  prev_class: 'orbit-prev',
/* 			  timer_container_class: 'orbit-timer', */
/* 			  timer_paused_class: 'paused', */
/* 			  timer_progress_class: 'orbit-progress', */
			  slides_container_class: 'orbit-slides-container',
			  bullets_container_class: 'orbit-bullets',
			  bullets_active_class: 'active',
			  slide_number_class: 'orbit-slide-number-products',
			  caption_class: 'orbit-caption',
			  active_slide_class: 'active',
			  orbit_transition_class: 'orbit-transitioning',
			  bullets: false,
			  timer: false,
			  variable_height: false,
			  before_slide_change: function(){ $(".swipe-for-more").remove(); }
/* 			  after_slide_change: function(){} */
			});
			
			window.lookbookSlider = new Cashhimi.MagSlider({
				div : "lookbook-slider2",
				spacing : 2,
				prevTriggerClass : "lookbook-prev",
				nextTriggerClass : "lookbook-next"		
			});
			
			$(".fancybox").fancybox({
				openEffect	: 'none',
				closeEffect	: 'none',
		    	helpers : {
		    		title : {
		    			type : 'outside'
		    		}
		    	}
			});
			
			$(".lookbook-slider:visible").imagesLoaded(function(){ $(".preloader").remove(); });
		});
		
	</script>

</html>