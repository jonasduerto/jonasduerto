var $ = jQuery.noConflict();
jQuery(document).ready(function($) {
    /*-----------------------------------------------------------------------------------*/
    /* Simple mode, it styles document scrollbar:
    /*-----------------------------------------------------------------------------------*/
    var nice = $("html").niceScroll({
           cursorcolor        : "#1b1e21",
           cursoropacitymin   : 0.3,
           cursorwidth        : "5px",
           autohidemode       : false,
           background         : "rgba(255,255,255,0.5)",
           enablemousewheel   : true,
           zindex             : "999999999",
           cursorborder       : "0",
           cursorborderradius : "0",
           // autohidemode       : false,
           cursorminheight    : 10,
           horizrailenabled   :false
    });
    
    /*-----------------------------------------------------------------------------------*/
    /* WOW Animation
    /*-----------------------------------------------------------------------------------*/
        wow = new WOW({
           boxClass     : 'wow', // default
           animateClass : 'animated', // default
           offset       : 100, // default
           mobile       : false, // default
           live         : true // default
        });
        wow.init();
        

    /*-----------------------------------------------------------------------------------*/
    /* => Back to top
    /*-----------------------------------------------------------------------------------*/
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    var affix = function () {
        var navHeight = $( '#header' ).height() - 70;
        if ( $(window).scrollTop() > navHeight ) {
            $('#navigation').addClass('affix');
        } else {
            $('#navigation').removeClass('affix');
        } 
    }

    affix();

    $(window).bind('scroll', function() {
        affix();
    });
    /*-----------------------------------------------------------------------------------*/
    /* => Scrollspy
    /*-----------------------------------------------------------------------------------*/
    $('#navigation').scrollspy({ 
        target: '#navbarNav',
        offset: -75
    });







    /*-----------------------------------------------------------------------------------*/
    /* => Portfolio isotope
    /*-----------------------------------------------------------------------------------*/

    $('.portfolio-filter').on('click', 'li', function(){
          var filterValue = $(this).attr('data-filter');
          $('.portfolio-filter > li.active').removeClass('active');
          $(this).addClass('active');
          $('.portfolio').isotope({
              filter: filterValue
          });
    });
    
    var $portfolio = $('.portfolio'); 
//     $portfolio.imagesLoaded( function(){
//       $portfolio.isotope({
//         itemSelector : '.portfolio-item',
//         layoutMode: 'fitRows'
//       });
//     });

     $portfolio.isotope({
        itemSelector: '.portfolio-item',
        percentPosition: true,
        layoutMode: 'fitRows',
     });
});