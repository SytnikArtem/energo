$(document).ready(function() {
    $('.main-partner-slider').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        // variableWidth: true
    });
    $('.certificate-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    var $body = $(window.document.body);

    function bodyFreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('overflow-y', 'hidden');
        $body.css('marginRight', ($body.css('marginRight') ? '+=' : '') + ($body.innerWidth() - bodyWidth))
    }

    function bodyUnfreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('marginRight', '0')
        $body.css('overflow-y', 'auto');
    }
    $('.employees-item').click(function () {
        $(this).find('.employees-popup').addClass('active');
        var popupHeight = $(this).find('.employees-popup-block').outerHeight();
        var windowHeight = $(window).height();
        bodyFreezeScroll()
        if(windowHeight < popupHeight + 100) {
            $(this).find('.employees-popup').addClass('flex-start')
        }
    });
    $('.employees-popup-close').click(function (e) {
        e.stopPropagation();
        bodyUnfreezeScroll();
        $('.employees-popup, .news-popup').removeClass('active');
        $('.employees-popup, .news-popup').removeClass('flex-start');
    });
    $('.news-item').click(function (e) {
        e.preventDefault();
        $('.news-popup').addClass('active');
        bodyFreezeScroll();
        var popupHeight = $('.news-popup-container').outerHeight();
        var windowHeight = $(window).height();
        console.log(popupHeight);
        console.log(windowHeight);
        bodyFreezeScroll();
        if(windowHeight < popupHeight + 100) {
            $('.news-popup').addClass('flex-start')
        }
    });
    function fixHeight() {
        var i;
        for (i = 0; i < $('.news-item-block').length; i++) {
            var blockHeight = $('.news-item-block').eq(i).height();
        }
        $('.news-item-block').height(Math.max(blockHeight));
    }
    fixHeight();
    $('.partners-right-link').click(function(e){
        e.preventDefault();
        $('.partners-info').removeClass('active');
        $(this).parent().find('.partners-info').addClass('active');
    });
    $('.partners-info-close').click(function () {
        $(this).parent().removeClass('active');
    });
    $('.certificate-item').click(function(){
        $('.news-popup').addClass('active');
        var index = $(this).index();
        $('.certificate-slider').slick('slickGoTo', index);
        var popupHeight = $('.certificate-slider-relative').outerHeight();
        var windowHeight = $(window).height();
        bodyFreezeScroll();
        if(windowHeight < popupHeight + 100) {
            $('.news-popup').addClass('flex-start')
        }
        bodyFreezeScroll();
    });
    $('.certificate-btn_next').click(function () {
        $('.certificate-slider').slick('slickNext');
    });
    $('.certificate-btn_back').click(function () {
        $('.certificate-slider').slick('slickPrev');
    });
});
