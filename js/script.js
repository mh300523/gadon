$(document).ready(function() {


    ///////// **mobile size** /////////
    $('#navbtn').click(function () {
        $('.main-nav').addClass('open-nav');
        $('.nav-overlay').addClass('on');
        $('body').addClass('scroll_mob');
        });
    
        $('.close-nav').click(function () {
        $('.main-nav').removeClass('open-nav');
        $('.nav-overlay').removeClass('on');
        $('body').removeClass('scroll_mob');
        });
    
        $('.nav-overlay').click(function () {
        $('.close-nav').trigger('click');
        });

        ////////** fixed header on scroll back**//////////
   
        var lastScrollTop = 0;
        var delta = 5;
        var $header = $('header');
        var navbarHeight = $header.outerHeight();
        
        $(window).scroll(function() {
            var st = $(this).scrollTop();
            var isScrollingDown = st > lastScrollTop && st > navbarHeight + delta;
            
            if (isScrollingDown) {
                $header.addClass('header-up');
            } else {
                $header.removeClass('header-up');
            }
            
            if (st >= navbarHeight) {
                if (!$header.hasClass('header-fixed')) {
                    $header.addClass('header-fixed');
                    $('body').css('padding-top', navbarHeight);
                }
            } else {
                if ($header.hasClass('header-fixed')) {
                    $header.removeClass('header-fixed');
                    $('body').css('padding-top', 0);
                }
            }
    
            lastScrollTop = st; // Update last scroll position
        });
        
    ///////// **main Slider** /////////
    var mainSlider = new Swiper('.main-slider .swiper-container', {
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        preloadImages: false,
        updateOnWindowResize: true,
            
        // If we need pagination
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        // Navigation arrows   
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
        });

        ///////// ** categories Slider** /////////
        var categories = new Swiper('.categories-row .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                    delay: 2000,
                },
            speed: 500,
            updateOnWindowResize: true,
            observer: true,
            observeParents: true,
            pagination: {
                el: '.categories-row .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.categories-row .swiper-button-next',
                prevEl: '.categories-row .swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1199: {
                    slidesPerView: 4,
                },
            },
        });
        ///////// **offers ** /////////
        
        ///////// **offers** /////////
        var offersProducts = new Swiper('.offers-row .swiper-container', {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                    delay: 2000,
                },
            speed: 500,
            updateOnWindowResize: true,
            observer: true,
            observeParents: true,
            pagination: {
                el: '.offers-row .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.offers-row .swiper-button-next',
                prevEl: '.offers-row .swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1199: {
                    slidesPerView: 5,
                },
            },
        });

        ///////// **offers** /////////
        var offersProducts = new Swiper('.offers-row2 .swiper-container', {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                    delay: 2000,
                },
            speed: 500,
            updateOnWindowResize: true,
            observer: true,
            observeParents: true,
            pagination: {
                el: '.offers-row2 .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.offers-row2 .swiper-button-next',
                prevEl: '.offers-row2 .swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1199: {
                    slidesPerView: 5,
                },
            },
        });

        ///////// **offers** /////////
        var offersProducts = new Swiper('.offers-row3 .swiper-container', {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                    delay: 2000,
                },
            speed: 500,
            updateOnWindowResize: true,
            observer: true,
            observeParents: true,
            pagination: {
                el: '.offers-row3 .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.offers-row3 .swiper-button-next',
                prevEl: '.offers-row3 .swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1199: {
                    slidesPerView: 5,
                },
            },
        });

        var acc = document.getElementsByClassName("foot-accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
        }


        // //////////** fixed arrow to top**//////////
        // $(".arrow-up").click(function () {
        //     $("html,body").animate(
        //     {
        //         scrollTop: 0,
        //     },
        //     1500
        //     );
        // });
        // $(this).scrollTop() >= 500
        //     ? $(".arrow-up").fadeIn(300)
        //     : $(".arrow-up").fadeOut(300);

        // $(window).scroll(function () {
        //     $(this).scrollTop() >= 500
        //     ? $(".arrow-up").fadeIn(300)
        //     : $(".arrow-up").fadeOut(300);
        // });
});