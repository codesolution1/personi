(function ($) {
    'use strict';
    $(document).on('ready', function () {

        /*-------------------------------------
            Scroll Menu Background Color
        -------------------------------------*/
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-area').addClass('menu-bg');
            } else {
                $('.header-area').removeClass('menu-bg');
            }
        });

        /*-------------------------------------
            Smooth scroll
        -------------------------------------*/
        $('a.smooth-scroll').on('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
        
        /*-------------------------------------
        	Scroll Up
        -------------------------------------*/
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '<a class="hvr-icon-bob click-top"></a>', // Text for element
            activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
        
        /*-------------------------------------
            owlCarousel
        -------------------------------------*/
        $('.client-info').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            animateIn: 'fadeIn',
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })

        /*-------------------------------------
            WOW js
        -------------------------------------*/
        new WOW().init();

        /*-------------------------------------
            waypoints
        -------------------------------------*/
        var $progress = $('.counter, .barfiller');
        $progress.waypoint(function () {

            /*-------------------------------------
            Progress Bar
        -------------------------------------*/
            var progressbarOne = $('#bar1');
            var progressbarTwo = $('#bar2');
            var progressbarThree = $('#bar3');
            var progressbarFour = $('#bar4');
            var progressbarFive = $('#bar5');
            var progressbarSix = $('#bar6');

            progressbarOne.barfiller();
            progressbarTwo.barfiller();
            progressbarThree.barfiller();
            progressbarFour.barfiller();
            progressbarFive.barfiller();
            progressbarSix.barfiller();

            /*-------------------------------------
            counterUp
        -------------------------------------*/
            var CounterUp = $('.counter');

            CounterUp.each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2500,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
            });
        }, {
            offset: '100%'
        });

        /*-------------------------------------
            Google Map
        -------------------------------------*/
        var myCenter = new google.maps.LatLng(-33.7654872, 150.9103569);

        function initialize() {
            var mapProp = {
                zoom: 16,
                center: myCenter,
                scrollwheel: false,
                styles: [{
                    "stylers": [{
                            "hue": "#ffffff"
                }, {
                            saturation: -110
                },
                        {
                            gamma: 2
                }]
        }],
                mapTpeIdy: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"), mapProp);

            //add your location marker here 
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(-33.7654872, 150.9103569),
                map: map,
                draggable: true
            });


        }
        google.maps.event.addDomListener(window, 'load', initialize);

    });

    $(window).on('load', function () {

        /*-------------------------------------
            preloader
        -------------------------------------*/
        setTimeout(function () {
            $('body').addClass('loaded');
        }, 3000);

        /*-------------------------------------
            parallax
        -------------------------------------*/
        var bannerParallax = $('.banner-img-area, .light-banner-img-area');
        bannerParallax.parallax("50%", 0.5);


        /*-------------------------------------
            Isotope
        -------------------------------------*/
        // init Isotope        
        $('.iso-content').isotope({
            itemSelector: '.iso-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.iso-item'
            }
        });
        // filter items on button click
        $('.iso-nav ul li').on('click', function () {
            $('.iso-nav ul li').removeClass('portfolio-active');
            $(this).addClass('portfolio-active');
            var selector = $(this).attr('data-filter');
            $('.iso-content').isotope({
                filter: selector
            });
            return false;
        });

    });

}(jQuery));
