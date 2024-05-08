document.addEventListener('DOMContentLoaded', function () {
    const $logo = document.querySelector('.transition__logo');
    const $frameBlack = document.querySelector('.page-transition__blue');
    const $frameRed = document.querySelector('.page-transition__blue__transparent');

    let outtransition = new TimelineMax({paused:true});
    outtransition.to($frameBlack , 1.5, {scaleY: 0, transformOrigin:'top', ease: Power4.easeInOut}, 0)
    .to($logo , .2, {autoAlpha:0}, 0)
    .to($frameRed , 2.2, {scaleY: 0, transformOrigin:'top', ease: Power4.easeInOut}, '-=1.6')
    $(window).on("load", function() {
        outtransition.play();
    });

	AOS.init({
        duration: 800,
        delay: 200,
        once: !0,
        offset: 120
    })
  
    window.addEventListener('load', AOS.refresh);
    
	var Main = {
    el: {
        scroll_to: jQuery(".scroll-to"),
        sidebar__dot: jQuery(".sidebar__dot"),
        body: jQuery("body"),
        share_handler: jQuery("#share-handler"),
        menu: {
            menu_overlay: jQuery("#menu__mainmenu-bg-overlay"),
            menu_handler: jQuery("#menu-handler")
        },
        window: jQuery(window)
    },
    vars: {
        //lang: lang,
        window_w: jQuery(window).width(),
        window_h: jQuery(window).height()
    },
    init: function() {
        function e(e) {
            this.el = e, this.init()
        }
        
		if(Main.el.body.hasClass('rtl')) {
            T1 = "top left",
            T2 = "top right",
            D1 = "right",
            D2 = "left",
			D3 = -45,
			D4 = 45,
            D5 = -4;
		} else {
			T1 = "top right",
            T2 = "top left",
            D1 = "left",
            D2 = "right",
            D3 = 45,
			D4 = -45,
            D5 = 4;
		}	
        
        CustomEase.create("menu_custom", "M0,0 C0.645,0.045 0.355,1 1,1");
		var M = new TimelineMax({
			reversed: !1,
			paused: !0
		}),
        k = jQuery("#menu-holder"),
            P = jQuery(".logo"),
            S = jQuery("#menu__mainmenu-bg-left"),
            SI = jQuery("#menu__mainmenu-bg"),
            OV = jQuery("#menu__mainmenu-bg-overlay"),
            Logo_icon = jQuery(".logo .logo-icon"),
            Logo_text = jQuery(".logo .micro"),
            T = jQuery("#menu__mainmenu-bg-right"),
            _T = jQuery(".cs-holder__bg"),
            A = jQuery(".menu__mainmenu-ani"),
            I = Main.el.menu__produts,
            O = jQuery("#menu__service"),
            z = jQuery(".blue-layer"),
            $ = jQuery(".blue-layer-right"),
            E = jQuery(".burger-bg-img"),
            DI = jQuery(".menu-divider"),
            L = Main.el.overlay__exrta,
            X = Main.el.overlay_exrta_bottom,
            D = jQuery(".burger-menus .menu-a"),
            N = new SplitText(D, {
                type: "lines",
                //charsClass: "menu_char",
                linesClass: "overflow"
            }),
            R = N.lines;
        N.lines;
		menuHandler = jQuery("#menu-handler"), menu_text = jQuery(".menu-text"), headerLogo = jQuery(".header-logo"), micro = jQuery(".header-logo .micro"), M.set(k, {
            visibility: "hidden"
        }), M.set(OV, {
            scaleX: 0
        }), M.set(S, {
            scaleX: 0
        }), M.set(SI, {
            autoAlpha: 0,
        }), M.set(T, {
            scaleX: 0
        }), M.set(_T, {
            autoAlpha: 0
        }), M.set(L, {
            scaleX: 0
        }), M.set(X, {
            scaleX: 0
        }), M.set(z, {
            scaleX: 0
        }), M.set($, {
            scaleX: 0
        }), M.set(E, {
            autoAlpha: 0
        }), M.set(DI, {
            scaleX: 0
        });

		new TimelineMax({
            reversed: !1,
            paused: !0
        });
        M.set(R, {
            autoAlpha: 0,
            transformOrigin: "center"
        }), M.set(headerLogo, {
            className: "+=white"
        }), M.to(micro, .8, {
            fill: "#fff"
        }, 0), M.to(k, .8, {
            visibility: "visible"
        }, 0), M.to([Logo_icon, Logo_text], .8, {
            fill: '#fff',
            ease: "menu_custom",
        }, 0), M.to(L, .2, {
            scaleX: 1,
            transformOrigin: T1
        }, .2), M.to(X, .2, {
            scaleX: 1,
            transformOrigin: T2
        }, .2), M.to(OV, .8, {
            scaleX: 1,
            ease: "menu_custom",
            transformOrigin: T1
        }, 0), M.to(S, .8, {
            scaleX: 1,
            ease: "menu_custom",
            transformOrigin: T1
        }, .2), M.to(SI, .8, {
            autoAlpha: 1,
            ease: "menu_custom",
            transformOrigin: T1
        }, .2), M.to(T, .8, {
            scaleX: 1,
            ease: "menu_custom",
            transformOrigin: T1
        }, .2), M.to(z, .8, {
            scaleX: 1,
            ease: "menu_custom",
            transformOrigin: T1
        }, .2), M.to($, .8, {
            scaleX: 1,
            ease: "menu_custom",
            transformOrigin: T1
        }, .2), M.to(z, .8, {
            delay: .8,
            scaleX: 0,
            ease: "menu_custom",
            transformOrigin: T1
        }, "-=0.8"), M.to($, .8, {
            delay: 0,
            scaleX: 0,
            ease: "menu_custom",
            transformOrigin: T2
        }, "-=0.8"), M.to(E, .8, {
            autoAlpha: 1
        }, 1), M.to(A, .8, {
            autoAlpha: 1
        }, .7), M.to(_T, .8, {
            autoAlpha: .15,
            ease: "menu_custom"
        }, .5), M.to(R, 1, {
            autoAlpha: 1,
            ease: CustomEase.create("custom", "M0,0 C0.49,0.05 0.18,0.94 1,1")
        }, 0.1, .3), M.to(I, .8, {
            autoAlpha: 1
        }, .8), M.to(O, .8, {
            autoAlpha: 1
        }, .8), M.staggerTo(DI, 1, {
            scaleX: 1,
            ease: "menu_custom",
            transformOrigin: T2
        }, 0, .8), M.to(menuHandler, .5, {
            zIndex: 610
        }, 0), M.set(menu_text, {
            autoAlpha: 0
        }, 0);
        var B = new TimelineMax({
            reversed: !1,
            paused: !0
        }),
        H = jQuery(".menu-handler__bg-white");
        
            B.to(H, .5, {
                scaleX: 1,
                ease: "menu_custom",
                transformOrigin: T1
            }, 0)
            
        Main.el.body.addClass("loaded");
        if (Main.el.body.hasClass("home")) {
            var d = new TimelineMax,
                c = jQuery("#mouse-dot"),
                u = jQuery("#mouse-holder");
            d.to(c, 1, {
                y: 27,
                autoAlpha: .5,
                repeat: -1,
                yoyo: !0,
                ease: Sine.easeIn
            }), d.to(u, 1, {
                scaleY: .85,
                delay: 1,
                repeat: -1,
                yoyo: !0,
                ease: Expo.easeIn
            })

            var startAnim = gsap.timeline({paused: true}),
            m = jQuery('.js-start-field');
            startAnim.to('.get-started__form', {
                y: 0,
                duration: .8,
                ease: "power2.inOut",
            }, .2), startAnim.fromTo(m, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1, 
                y: 0,
                duration: .8,
                ease: "power2.inOut",
            }, 0.5);
        };
        
		Main.el.scroll_to.click(function(){var e=void 0!==jQuery(this).data("target")?jQuery(this).data("target"):"",t=void 0!==jQuery(this).data("position")?jQuery(this).data("position"):!1,n=void 0!==jQuery(this).data("goto_offset")?jQuery(this).data("goto_offset"):105,i=void 0!==jQuery(this).data("goto_speed")?jQuery(this).data("goto_speed"):1e3;t!==!1&&t>=0?scroll_to_position(t,i):scroll_to_element(jQuery(e),n,i)}),
        Main.el.menu.menu_handler.click(function() {
            jQuery('body').toggleClass("menu-opened"), jQuery(P).toggleClass("fixed"), jQuery(this).toggleClass("loc"), jQuery(this).hasClass("loc") ? (M.play(), B.play()) : (M.reverse(), B.reverse())
        }),
        Main.el.menu.menu_overlay.click(function() {
            jQuery('body').removeClass("menu-opened"), jQuery(P).removeClass("fixed"), Main.el.menu.menu_handler.removeClass("loc"), M.reverse(), B.reverse()
        });
        var V = new TimelineMax({
            reversed: !1,
            paused: !0
        }),
        Y = jQuery("#share-holder"),
        Z = jQuery("#share-handler"),
        Sl = jQuery(".share-link"),
        W2 = jQuery("#share-holder-bg"),
        J = jQuery("#sidebar-share-icon"),
        G = jQuery(".share-close");
        V.set(Y, {
            autoAlpha: 1
        }), V.to(Y, .8, {
            scaleX: 1,
            ease: "menu_custom",
            transformOrigin: T2
        }, 0), V.to(W2, .5, {
            scaleX: 1,
            ease: "menu_custom",
            transformOrigin: T1
        }, 0), V.to(J, .1, {
            autoAlpha: 0
        }, 0), V.staggerTo(Sl, .3, {
            autoAlpha: 1,
            ease: "menu_custom"
        }, 0.1, 0.5), V.to(G, .2, {
            autoAlpha: 1
        }, .5);
        Main.el.share_handler.click(function() {
            jQuery(this).toggleClass("loc"), jQuery(this).hasClass("loc") ? V.play() : V.reverse()
        })
    },
    resizing: function() {
        Main.vars.window_w = Main.el.window.width(), Main.vars.window_h = Main.el.window.height()
    }
};

    Main.init();

    var accordion = (function() {
        var $accordion = $('.js-accordion');
        var $accordion_header = $accordion.find('.js-accordion-header');
        var $accordion_item = $('.js-accordion-item');

        // default settings 
        var settings = {
            speed: 400,
            oneOpen: false
        };

        return {
            // pass configurable object literal
            init: function($settings) {
                $accordion_header.on('click', function(e) {
                    e.preventDefault();
                    if($(this).hasClass('mb-click')) {
                        if (window.matchMedia('(min-width: 769px)').matches) {
                            return;
                        }
                    }
                    accordion.toggle($(this));
                });

                $.extend(settings, $settings);

                // ensure only one accordion is active if oneOpen is true
                /*if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
                    $('.js-accordion-item.active:not(:first)').removeClass('active');
                }*/

                // reveal the active accordion bodies
                $('.js-accordion-item.active').find('> .js-accordion-body').show();
            },
            toggle: function($this) {

                if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
                    $this.closest('.js-accordion')
                        .find('> .js-accordion-item')
                        .removeClass('active')
                        .find('.js-accordion-body')
                        .slideUp()
                }

                // show/hide the clicked accordion item
                $this.closest('.js-accordion-item').toggleClass('active');
                $this.next().stop().slideToggle(settings.speed);
            }
        }
    })();

    accordion.init({
        speed: 300,
        oneOpen: true
    });

    
    var C = new TimelineMax({
        reversed: !1
    });

    $('.js-item').click(function() {
        C.clear();
        var $this = $(this);
        if(!$this.hasClass('active')) {
            var cardItem = $this.data('item'),
                cardContaner = $('.wh-holder__handler'),
            cardHolder = $(".wh-item[data-item='" + cardItem + "']");
            $('.js-item').removeClass("active");
            $('.wh-item').removeClass("active");
            $this.addClass("active");
            cardHolder.addClass("active");
            C.set($('.wh-item'), {
                autoAlpha: 0,
                ease: "expo.inOut"
              }, 0), C.to($('.wh-holder__bg'), {
                x: 0,
                autoAlpha: 1,
                ease: "expo.inOut"
              }, 0), C.to(cardContaner, {
                autoAlpha: 1,
                ease: "expo.inOut"
              }, 0.2), C.to(cardHolder, {
                autoAlpha: 1,
                ease: "expo.inOut"
              }, 0.1);
        }
        else {
            C.set($('.wh-item'), {
                autoAlpha: 0,
                ease: "expo.inOut"
              }, 0), C.to('.wh-holder__handler', {
                autoAlpha: 0,
                ease: "expo.inOut"
              }, 0), C.to($('.wh-holder__bg'), {
                x: mapBg,
                autoAlpha: 0,
                ease: "expo.inOut",
                onComplete:function(){
                    $('.js-item').removeClass("active");
                    $('.wh-item').removeClass("active");
                }
              }, 0.1);
        }
    });
   

    var tTab = gsap.timeline();
      $('.tabs-block li').on('click', function() {
            tTab.clear();
            //var $label = $('.label');	
            var $this = $(this);
            var initTabNum = $this.data('menu');
            var $article = $('.tab-item');
            var $show = $('.show');

            function step_1() {
                  $article.removeClass('show')
            }

            function step_2() {
                  $('.num_' + initTabNum).addClass('show')
            }

            if (!tTab.isActive()) {
                  //tl.to($article, 0.05, {y: 10, ease: Power1.easeOut, onComplete: step_1})
                  step_1();
                  tTab.fromTo($('.num_' + initTabNum), 0.5, {
                  onStart: step_2(),
                  autoAlpha: 0
                  }, {
                  autoAlpha: 1,
                  ease: Power1.easeOut,
                  immediateRender: false
                  })

                  //$label.offset({left : offset_left.left}).css('width', el_width)

                  $('.tabs-block li').removeClass('active');
                  $this.addClass('active');
            }
      });

      function animateElements() {
        $('.progressbar').each(function() {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    thickness: 2,
                    fill: {
                        color: '#fff'
                    }
                }).on('circle-animation-progress', function(event, progress, stepValue) {
                    $(this).find('div').text((stepValue * 100).toFixed(0));
                }).stop();
            }
        });
    }
    animateElements();
    $(window).scroll(animateElements);

    
		if($('body').hasClass('rtl')) {
            slide_Dir = true;
            pt = 50;
            mapBg= 100;
		} else {
            slide_Dir = false;
            pt = -50;
            mapBg= -100;
		}	

    $(".hero .slideshow .slick-wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: true,
        infinite: true,
        rtl: slide_Dir,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false, 
        pauseOnHover: false,
        draggable: true,
        prevArrow: $(".slick-button-prev"),
        nextArrow: $(".slick-button-next"),
    });

    $('.home__slider__btn .button').hover(function() {
        $('.hero .slideshow .slick-wrapper').slick('slickPause');
    }, function() {
        $('.hero .slideshow .slick-wrapper').slick('slickPlay');
    });


      $(".about__slick .slick-wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: true,
        infinite: true,
        rtl: slide_Dir,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false, 
        pauseOnHover: false,
        draggable: true,
        appendDots: $(".about-section .slide-m-dots"),
        prevArrow: $(".about-section .slide-m-prev"),
        nextArrow: $(".about-section .slide-m-next"),
      });

      var dir;
        $(".about__slick .slick-wrapper").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
            if((currentSlide<nextSlide&&currentSlide==nextSlide-1)||(currentSlide==slick.slideCount-1&&nextSlide==0)){
                dir='right';
            }
            else if(nextSlide<currentSlide||(nextSlide==slick.slideCount-1&&currentSlide==0)){
                dir='left';
            }
            addSlidePrevClass(dir);
        })  

    function addSlidePrevClass(dir) {
        $(".slick-slide").removeClass("slick-prev").removeClass("slick-next");
        $(".slick-current").each(function(index, el) {
            //$(el).addClass("slick-prev");
            if(dir == 'right') {
                $(el).addClass("slick-prev");
            }
            if(dir == 'left') {
                $(el).addClass("slick-next");
            }
        })
    }


    $(".ab__slick .slick-wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 500,
        fade: true,
        rtl: slide_Dir,
        draggable: true,
        appendDots: $(".ab-section .slide-m-dots"),
        prevArrow: $(".ab-section .slide-m-prev"),
        nextArrow: $(".ab-section .slide-m-next"),
      });


    $(".projects__slick .slick-wrapper").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 500,
        fade: false,
        rtl: slide_Dir,
        infinite: false,
        draggable: true,
        appendDots: $(".project-section .slide-m-dots"),
        prevArrow: $(".project-section .slide-m-prev"),
        nextArrow: $(".project-section .slide-m-next"),
        responsive: [
            {
              breakpoint: 2501,
              settings: {
                slidesToShow: 4,
              }
            },
            {
                breakpoint: 1441,
                settings: {
                  slidesToShow: 3,
                }
              },
            {
              breakpoint: 1101,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
      });


      $(".programs_homeSlider .slick-wrapper").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 500,
        fade: false,
        rtl: slide_Dir,
        infinite: true,
        autoplay: true,
        draggable: true,
        /*appendDots: $(".programs_homeSlider .slide-m-dots"),
        prevArrow: $(".programs_homeSlider .slide-m-prev"),
        nextArrow: $(".programs_homeSlider .slide-m-next"),*/
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
      });

      $(".mb__slick .slick-wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 500,
        fade: false,
        rtl: slide_Dir,
        infinite: false,
        draggable: true,
        appendDots: $(".membership-component .slide-m-dots"),
        prevArrow: $(".membership-component .slide-m-prev"),
        nextArrow: $(".membership-component .slide-m-next"),
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
      });

      $(".news__slider .slick-wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 500,
        rtl: slide_Dir,
        draggable: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
      });

      $(".project__slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 500,
        rtl: slide_Dir,
        draggable: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
      });

      $(".partners__slick .slick-wrapper").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        rtl: slide_Dir,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false, 
        pauseOnHover: false,
        draggable: true,
        appendDots: '.partners-section',
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 551,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 426,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
      });


    $(".year__slick").on('init', function(event, slick, currentSlide) {
        var
            cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            prev = cur.prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        cur.removeClass('slick-snext').removeClass('slick-sprev');
        slick.$prev = prev;
        slick.$next = next;
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        //console.log('beforeChange');
        var
            cur = $(slick.$slides[nextSlide]);
        //console.log(slick.$prev, slick.$next);
        slick.$prev.removeClass('slick-sprev');
        slick.$next.removeClass('slick-snext');
        next = cur.next(),
            prev = cur.prev();
        prev.prev();
        prev.next();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        slick.$prev = prev;
        slick.$next = next;
        cur.removeClass('slick-next').removeClass('slick-sprev');
        });

    $(".year__slick").slick({
        centerMode: true,
        centerPadding: "0",
        dots: false,
        arrows: false,
        infinite: false,
        speed: 800,
        slidesToShow: 5,
        sliderPerRow: 1,
        rtl: slide_Dir,
        swipeToSlide: true,
        focusOnSelect: true,
        //useTransform: false,
        cssEase: 'ease-in-out',
        asNavFor: ".history__slick",
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
              }
            }
        ]
    });
    

      $(".history__slick").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speed: 300,
        rtl: slide_Dir,
        draggable: false,
        adaptiveHeight: true,
        asNavFor: ".year__slick"
      });

      $(".mt__yearSlick").slick({
        centerMode: true,
        centerPadding: "0",
        dots: false,
        arrows: true,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        sliderPerRow: 1,
        rtl: slide_Dir,
        swipeToSlide: true,
        focusOnSelect: true,
        cssEase: 'ease-in-out',
        asNavFor: ".mt__contentSlick",
        prevArrow: $(".mt-prev"),
        nextArrow: $(".mt-next"),
    });
    

      $(".mt__contentSlick").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speed: 300,
        rtl: slide_Dir,
        draggable: false,
        adaptiveHeight: !0,
        asNavFor: ".mt__yearSlick"
      });


    $(".offices__slick").slick({
        centerMode: true,
        centerPadding: "0",
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        rtl: slide_Dir,
        cssEase: 'ease-in-out',
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: ".oh__slick",
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 551,
                settings: {
                  slidesToShow: 1,
                  centerPadding: "10",
                }
            }
        ]
      });
      
      $(".oh__slick").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        draggable: false,
        speed:300,
        cssEase: 'linear',
        rtl: slide_Dir,
        asNavFor: ".offices__slick"
      });

      $('.offices__slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(".slick-slide:not('.slick-current')").removeClass('js-active');
        $('.slick-current').toggleClass('js-active'); 
     });


     $('.gallery-slider').slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        /*autoplay: true,
        autoplaySpeed: 2000,*/
        arrows: true,
        dots: false,
        rtl: slide_Dir,
        prevArrow: $(".post-gallery .slick-prev"),
        nextArrow: $(".post-gallery .slick-next"),
      });
      
      
      $('.gallery-slider').slickLightbox({
        itemSelector: 'a',
        navigateByKeyboard: true
      });


     

    var rev = $('.cards__slick .slick-wrapper');
    rev.on('init', function(event, slick, currentSlide) {
    var
        cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        prev = cur.prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    cur.removeClass('slick-snext').removeClass('slick-sprev');
    slick.$prev = prev;
    slick.$next = next;
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    //console.log('beforeChange');
    var
        cur = $(slick.$slides[nextSlide]);
    //console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    next = cur.next(),
        prev = cur.prev();
    prev.prev();
    prev.next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev');
    });

    rev.slick({
        speed: 1500,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        prevArrow: '<button> prev</button>',
        nextArrow: '<button> next</button>',
        infinite: false,
        centerMode: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        swipe: true,
        rtl: slide_Dir,
        draggable: true,
        customPaging: function(slider, i) {
            return '';
        },
    });


    $('.js-videobtn').each(function(index, element) {
        var href = $(element).find('.video-link').attr('href');
        $(element).magnificPopup({
            items: {
                src: href
            },
            type: 'iframe',
            iframe: {
              markup: '<div class="mfp-iframe-scaler">' +
              '<div class="mfp-close"></div>' +
              '<iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe>' +
              '</div>',
              patterns: {
                  youtube: {
                      index: 'youtube.com',
                      id: 'v=',
                      src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                  }
              }
          },
        });
    });


    $(".js-slideBtn").click(function(e) {
        e.preventDefault();
        $('.mb__info').slideUp();
        $('.js-slideContent').removeClass('active');
        $(this).parents('.js-slideContent').addClass('active');
        $(this).parents('.js-slideContent').find('.mb__info').slideDown();
    });
    $(".mb-slideUp").click(function(e) {
        $(this).parents('.js-slideContent').removeClass('active');
        $(this).parents('.js-slideContent').find('.mb__info').slideUp();
    });

    const svg = document.querySelector('.project__icon svg path');
    var $elements = $('.project__item');
    $elements.click(function() {
        if(!$(this).hasClass('active')) {
            $('.project__item').removeClass('active');
            $(this).toggleClass('active');
            $(this).parents('.projects__slick .slick-slide').siblings().addClass('shrink').removeClass('grow');
            $(this).parents('.projects__slick .slick-slide').addClass('grow').removeClass('shrink');
            gsap.to('.projects__slick .slick-slide.shrink .project__item .box-bg', {
                duration: 1,
                autoAlpha: 0,
                ease:Power1.easeOut
            }), gsap.to('.projects__slick .slick-slide.grow .project__item .box-background', {
                duration: 1,
                autoAlpha: 1,
                x: pt,
            }, 0), gsap.to('.projects__slick .slick-slide.shrink .project__item .box-background', {
                duration: 1,
                autoAlpha: 0,
                x: 0,
                ease:Power1.easeOut
            }, 0);
        }
        else {
            $(this).removeClass('active');
            $('.project__item').removeAttr("style");
            $(this).parents('.projects__slick .slick-slide').siblings().removeClass('shrink');
            $(this).parents('.projects__slick .slick-slide').removeClass('grow');
            gsap.to($('.box-bg'), {
                duration: 1,
                autoAlpha: 1,
                ease:Power1.easeOut
            });
                gsap.to($('.box-background'), {
                    duration: 0.5,
                    autoAlpha: 1,
                    x: 0,
                    ease:Power1.easeOut
                }, 0);
        }
    })
    $('.projects__slick .slick-slide').hover(function() {
        if(!$(this).hasClass('grow')) {
            gsap.fromTo($(this).find('.project__icon svg path'), {drawSVG:"0%"}, {drawSVG:"100%",duration:.7 })
            /*gsap.to($(this).find('.box-background'), {
                duration: 1,
                autoAlpha: 1,
                x: pt,
                ease:Power1.easeOut,
            }, 0);*/
        }
    }, function() {
        if(!$(this).hasClass('grow')) {
            /*gsap.to($(this).find('.box-background'), {
                duration: 1,
                x: 0,
                autoAlpha: 0,
                ease:Power1.easeOut
            }, 0);*/
        }  
    });

    gsap.utils.toArray(".js__component").forEach((section, i) => {
        const w = section.querySelectorAll('.js-progress');
        const count = $(w).data("percentage") + "%";
        gsap.to( w, {
            width: count,
            delay:.5,
            onUpdate: countPercent,
            scrollTrigger: {
                trigger: section,
                toggleActions: "restart pause resume pause"
            }, 
        });
    });
    function countPercent() {
        newPercent = (gsap.progress()*100).toFixed();
       
        $('#count').text(newPercent + "%");
    }

    
    if (window.matchMedia('(min-width: 992px)').matches) {
        var pinAmount = $(".pinned-box").height();
        const tlfour = gsap.timeline({
            scrollTrigger: { 
                trigger: ".pin-element", 
                //markers: true,
                pin: ".pinned-box",
                pinSpacing: false,
                start: "top top",
                end: function() {
                    return "bottom bottom-=" + ( $(".pinned-box").height()/ 2)
                },
            }
        })
    }
    $('.theme-mode').click(function() {
        if($(this).hasClass('light-mode')) {
            $('body').removeClass('dark-style');
            $('body').addClass('light-style');
        } else {
            if($(this).hasClass('dark-mode')) {
                $('body').removeClass('light-style');
                $('body').addClass('dark-style');
            }
        }
    });


    /*ScrollTrigger.create({
        trigger: ".video-section",
        start: "top top", 
        end: "bottom+=3000px",
        pin: ".video-section"
    });*/
    var pinAmount = ($(".video-holder").outerHeight()/2) - 150;
    var horizontal_scroll_tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".video-holder",
          scrub: 1,
          pin: ".video-section",
          start: "top top",
          end: `bottom ${pinAmount}px`
          //end: () => `+=${pinAmount}`
        }})
      horizontal_scroll_tl
        .to(".video-section .video-content", {yPercent: -150, duration:1 ,ease: 'none'})
        
});