/*global $, alert, console, jQuery, Facebook*/

$(document).ready(function () {

   
    "use strict";
    
    var myImgHeight, myFixedNavbar, myScroll, lg,  scrollButton, filter_wrapper;
    
    $('body').scrollspy({
        target: '#navbar-collapsible',
        offset: 50
    });
    
   
     // animate links
    $('.navbar .nav li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
            //scrollTop: $($(this).attr('href')).offset().top

        }, 1000);

    });
    
    
    //backstretch
    $.backstretch([
        "images/img-1.jpg",
        "images/img-2.jpg",
        "images/img-3.jpg"
    ], {
        fade: 750,
        duration: 2000
    });
    

    
    $('#home').height($(window).height());
    
    $(".txt").css({paddingTop: ($(window).height() - $(".txt").height()) / 2 });
    
    $(window).resize(function () {
        
        $('#home').height($(window).height());
        
        $(".txt").css({paddingTop: ($(window).height() - $(".txt").height()) / 2 });
        
        // Can also be used with $(document).ready()
        $('.dishes .flexslider').flexslider({
            animation: "slide",
            animationLoop: false,
            itemMargin: 5,
            minItems: 2,
            maxItems: 4
        });
        
    });
    
    
    
    //Change Navbar
    $(window).scroll(function () {
        
        if ($(window).scrollTop() > 100) {
            
            $('.navbar').addClass("change");
            
        } else {
            
            $('.navbar').removeClass("change");
        }
        
    });
    
    
    
    $("html").niceScroll();
    
    $('#home .head-slider').flexslider({
        animation: "slide",
        direction: "vertical",
        directionNav: false,
        controlNav: false,
        slideshowSpeed: 2000,
        animationSpeed: 500
    });
    
    
    //flex slider
    $(window).on("load", function () {
        $('#home .head-slider').flexslider({
            animation: "slide",
            direction: "vertical",
            directionNav: false,
            controlNav: false,
            slideshowSpeed: 2000,
            animationSpeed: 500
        });
    });
    
    /*
    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        left : true,
        dots: true
    });
    
    */
    
    // Can also be used with $(document).ready()
    /*
    $(window).load(function () {
        $('.dishes .flexslider').flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 210,
            itemMargin: 5,
            minItems: 2,
            maxItems: 4
        });
    });
    */
    
    
    
    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        left : true,
        dots: true,
        responsive: [{
            
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                infinite: true,
                dots: true
            }
            
        }, {
            
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                infinite: true,
                arrows: false,
                dots: true
            }
            
        }, {
            
            breakpoint: 401,
            settings: {
                slidesToShow: 1,
                infinite: true,
                arrows: false,
                dots: true
            }
            
        }, {
            
            breakpoint: 251,
            settings: "unslick" // destroys slick
            
        }]
        
    });
    
    
    $('.carousel').carousel(
        {interval: 3000}
    );
    
    
    $("#lightgallery").lightGallery();
        
    $("#lightgallery a").click(function () {
        
        $(".navbar-default").css({display: "none"});
        
    });
    
    lg = $('#lightgallery');
    
    // Perform any action just after closing the gallery
    lg.on('onCloseAfter.lg', function (event) {

        $(".navbar-default").css({display: "block"});
    });
    
    
});

/* ************************************************************************************************************* */


// loading 
$(window).on("load", function () {
    
    "use strict";
    
    //$(".loading-overlay h1, .loading-overlay p").css({visibility: "visible"});
    
    $('.loading-overlay .sk-folding-cube').fadeOut(5000, function () {

        $(".loading-overlay .loading-overlay-content").fadeOut(1500);
        
        $(this).parent().fadeOut(3000, function () {

            // Show Scroll
            $("body").css("overflow", "auto");

            $(this).remove();
            
        });
        
            
    });
    
    
    
});

