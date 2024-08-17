
	// for side menu
    $(document).ready(function () {
        $(".custom_scroll").mCustomScrollbar({
            theme: "minimal"
        });

        $(".sidemenu_toggle").click(function(){
        	$(".tpside_menu").addClass("sideactive");
	        $(".navbar").addClass("sidemenu_open");		      
	        $("body").addClass("no_scroll");
	    });
	   $(".cls_sidemenu").click(function(){
	       $(".navbar").removeClass("sidemenu_open");
	       $("body").removeClass("no_scroll");
	       $(".tpside_menu").removeClass("active");

	    });
	   $(".close_menubtn").click(function(){
	       $(".navbar").removeClass("sidemenu_open");
	       $("body").removeClass("no_scroll");
	       $(".tpside_menu").removeClass("sideactive");
	    });

		$('nav li').has('ul').find('a').not('ul ul a').addClass('child_menu');

	 //   $('navbar-nav li a').click( function() {
	 //        $(this).parent().siblings().children().slideUp('child_open');
	 //        $(this).slideDown('child_open');
	 //    });
    });

    //for mega menu
    $(document).ready(function() {
		$(".megamenu_nav .dropdown-toggle").hover(function () {
			$(this).parent().toggleClass("show");
			$(this).parent().find(".dropdown-menu").toggleClass("show");
		});

		$( ".megamenu_nav .dropdown-menu" ).mouseleave(function() {
			$(this).removeClass("show");
		});

		$(".srch_click .srch_clkbtn").click(function () {
			$(".mob_search").toggleClass("srch_show");				
		});
	});

	
    // owl carousel start
	$('.home_banner').owlCarousel({
	    // animateOut: 'slideOutDown',
	    // animateIn: 'flipInX',
	    items:1,
	    loop:true,
	    nav:false,		    
	    dots:true	   
	});

	$('.tab_carousel').owlCarousel({
	    loop:false,
	    margin:0,
	    nav:true,
	    dots:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        400:{
	            items:2
	        },
	        600:{
	            items:3
	        },
	        992:{
	            items:5
	        },
	        1100:{
	            items:6
	        }
	    }
	});
		
	// $('.tv_carousel').owlCarousel({
	//     loop:false,
	//     margin:0,
	//     nav:true,
	//     dots:true,
	//     items:1
	// });
		
	// $('.lap_carousel').owlCarousel({
	//     loop:false,
	//     margin:0,
	//     nav:true,
	//     dots:true,
	//     items:1
	// });

	$('.trend_carousel').owlCarousel({
	    loop:false,
	    margin:0,
	    nav:false,
	    dots:true,
	    responsive:{
	        0:{
	            items:1,
	             nav:true,
	             dots:false
	        },
	        575:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});

	$('.brand_carousel').owlCarousel({
	    loop:false,
	    margin:0,
	    nav:true,
	    dots:false,
	    responsive:{
	        0:{
	            items:2
	        },
	        600:{
	            items:3
	        },
	        850:{
	            items:4
	        },
	        1000:{
	            items:5
	        }
	    }
	});

// owl carousel end

//aos init

AOS.init();
	AOS.init({
 	duration: 1000, 
		easing: 'ease',
	});

//scroll top	

// $(window).scroll(function() {    // this will work when your window scrolled.
// 		var height = $(window).scrollTop();  //getting the scrolling height of window
// 		if(height  > 100) {
// 			$(".middle_head").css({"position": "fixed"});
// 			$('.middle_head').addClass('stickyhd');
// 		} else{
// 			$(".middle_head").css({"position": "relative"});
// 			$('.middle_head').removeClass('stickyhd');
// 		}
// 	});


$('.slick1').slick({
		rows: 2,
		dots: true,
		arrows: true,
		infinite: false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [	
		{
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        rows: 2
	      }
	    },    
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        rows: 1
	      }
	    },
	    {
	      breakpoint: 540,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        rows: 1
	      }
	    }
	  ]
});

$('.lap_carousel').slick({
		rows: 2,
		dots: true,
		arrows: true,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [	
		{
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        rows: 2
	      }
	    },		   
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        rows: 1
	      }
	    },	    
	    {
	      breakpoint: 575,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        rows: 1
	      }
	    }
	  ]
});

	
//price slider

//-----JS for Price Range slider-----

$(function() {
	$( "#slider-range" ).slider({
	  range: true,
	  min: 530,
	  max: 4000,
	  values: [ 530, 2640 ],
	  slide: function( event, ui ) {
		$( "#amount" ).val(  ui.values[ 0 ] + " DBA - " + ui.values[ 1 ] + " DBA " );
	  }
	});
	$( "#amount" ).val(  $( "#slider-range" ).slider( "values", 0 ) +
	  " DBA - " + $( "#slider-range" ).slider( "values", 1 ) + " DBA "  );
});


// spinner


$(document).on('click', '.number-spinner button', function () {    
	var btn = $(this),
		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
		newVal = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal = parseInt(oldValue) + 1;
	} else {
		if (oldValue > 1) {
			newVal = parseInt(oldValue) - 1;
		} else {
			newVal = 1;
		}
	}
	btn.closest('.number-spinner').find('input').val(newVal);
});