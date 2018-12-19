$(document).ready(function() {
    $('.main-partner-slider').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        // variableWidth: true
    });
    var $body = $(window.document.body);

    function bodyFreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('overflow', 'hidden');
        $body.css('marginRight', ($body.css('marginRight') ? '+=' : '') + ($body.innerWidth() - bodyWidth))
    }

    function bodyUnfreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('marginRight', '0')
        $body.css('overflow', 'auto');
    }
    $('.employees-item').click(function () {
        $(this).find('.employees-popup').addClass('active');
        var popupHeight = $(this).find('.employees-popup-block').outerHeight();
        var windowHeight = $(window).height();
        console.log(popupHeight);
        console.log(windowHeight);
        bodyFreezeScroll()
        if(windowHeight < popupHeight + 100) {
            $(this).find('.employees-popup').addClass('flex-start')
        }
    });
    $('.employees-popup-close').click(function (e) {
        e.stopPropagation();
        bodyUnfreezeScroll();
        $('.employees-popup').removeClass('active');
        $('.employees-popup').removeClass('flex-start');
    });
});
