function scrollTop(easingtiming) { $('html,body').animate({ scrollTop: 0 }, easingtiming); }
var Windowidth = 0,
    WindowHeight = 0;

$(document).ready(function() {
    //search bar expand
    $('.box-search').on('click', function() {
        $('.box-search').toggleClass('active');
    });

    //product sharing dropdown
    $('ul.product-socialshare-ul').hide();
    $('.product-card-socialshare-button').hover(function() { //When trigger is hovered...
        $(this).children('ul.product-socialshare-ul').slideDown('fast').show();
    }, function() {
        $(this).children('ul.product-socialshare-ul').slideUp('slow');
    });

    //Mega Menu Config
    $(".dropdown").hover(function() {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
        $(this).toggleClass('open');
    }, function() {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
        $(this).toggleClass('open');
    });

    //Sticky Navigation
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
            $('#navbar').addClass('static');
        } else if (scroll > 1) {
            $('#navbar').removeClass('static');
        }
        if (scroll < 10) {
            $('#navbar').removeClass("box-shadow");
        } else if (scroll > 10) {
            $('#navbar').addClass("box-shadow");
        }
    });

    //homepage carousel
    $('#homepage-slider').owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        loop: true,
        margin: 10,
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        dots: false,
        nav: false,
        items: 1
    });

    //menu carousel
    $('#menu-slider-four').owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        loop: true,
        margin: 10,
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        dots: true,
        nav: false,
        items: 1
    });

    //Humburger Icon
    $('#nav-burger-icon').click(function() {
        $(this).toggleClass('open');
    });

    //blog carousel
    $('#blog-slider').owlCarousel({
        center: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: true,
                center: false,
            },
            1000: {
                items: 4,
                margin: 20,
                nav: true
            }
        }
    });

    //back to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 550) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});