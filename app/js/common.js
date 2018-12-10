$(document).ready(function() {
    $('.tech-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        infinite: false,
        touchMove: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    // $('#menu-item-518 .header-item-link').click(function(e){
    //    $('.header-sublist').toggleClass('active');
    // });
    $('#menu-item-518 .header-item-link').hover(function(){
        $('.header-sublist').addClass('active');
    }, function(){
        $('.header-sublist').removeClass('active');
    });
    $('.career-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        touchMove: true
    });
    $('.team-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        variableWidth: true,
        centerMode: true,
        touchMove: true
    });
    $('.tech-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.tech-current').text(nextSlide + 1);
    });
    var wow = new WOW(
        {
            boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
            animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
            offset:       200,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
            mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
            live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
            callback:     function(box) {
                // функция срабатывает каждый раз при старте анимации
                // аргумент box — элемент, для которого была запущена анимация
            },
            scrollContainer: null, // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
            resetAnimation: true
        }
    );
    wow.init();
    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onCenter", duration: "200%"}});
    $('.parallax').each(function() {
        var trigg = $('body'),
            parallax = this.getAttribute('data-parallax'),
            speed = parallax * 100 + '%';
        new ScrollMagic.Scene({triggerElement: trigg})
            .setTween(this, {y: speed, ease: Linear.easeNone})
            .addTo(controller);
    });
    var controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%", offset: '100'}});
    $('.parallax2').each(function() {
        var trigg = this.parentNode,
            parallax = this.getAttribute('data-parallax'),
            speed = parallax * 100 + '%';

        new ScrollMagic.Scene({triggerElement: trigg})
            .setTween(this, {y: speed, ease: Linear.easeNone})
            .addTo(controller2);
    });
    $(".about-menu-link").click(function () {
        $(this).addClass('active');
        $(this).parent().siblings().find(".about-menu-link").removeClass('active');
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html, body').animate({ scrollTop: destination }, 400);
        positionLine();
        return false;
    });
    function fixedBlock() {
        var controller3 = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            triggerElement: ".about-flex",
            // duration: "800",
            offset: "-30",
            triggerHook: "onLeave"
        }).setPin(".about-left").addTo(controller3);
    }
    fixedBlock();
    function positionLine() {
        if($('.about-line').length > 0) {
            var positionTop = $('.about-menu-link.active').position().top;
            $('.about-line').css("top", positionTop);
        }
    }
    positionLine();
    $('.menu-open').click(function(){
       $(this).toggleClass('active');
       $('.header-list').toggleClass('active')
    });
});
var lastScrollTop = 0;
$(window).scroll(function(){
    var windowTop,
        blockTop,
        windowHeight,
        items,
        animDeg;
    function rotateBlock(){
        if($('.main_rotate').length > 0) {
            windowTop = $(window).scrollTop();
            blockTop = $('.main_rotate').offset().top;
            windowHeight = $(window).height();
            if (windowTop + windowHeight > blockTop) {
                items = Math.ceil((windowTop + windowHeight - blockTop) / 180);
                animDeg = items * 180;
                $('.anim-img22').css({transform: 'rotateX(' + animDeg + 'deg)'});
            }
            else {
                $('.anim-img22').css({transform: 'rotateX(0deg)'});
            }
        }
    }
    rotateBlock();

    function transformLines() {
        windowTop = $(window).scrollTop();
        if($('.tech-block_chain').length > 0) {
            blockTop = $('.tech-block_chain').offset().top;
            if(windowTop + $(window).height() > blockTop && windowTop > lastScrollTop) {
                console.log(lastScrollTop);
                console.log(windowTop);
                $('.tech-lines').addClass('down');
                if($('.tech-lines').hasClass('down')) {
                    $('.tech-lines').removeClass('down');
                    setTimeout(function(){
                        $('.tech-lines').addClass('down');
                    }, 100);
                }
            }
            lastScrollTop = windowTop;
        }
    }
    transformLines();

    if($(window).scrollTop() > 0) {
        $('.header').addClass('active');
    }
    else {
        $('.header').removeClass('active');
    }

});
