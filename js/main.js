$(document).ready(function() {
    $('.button[filter]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off').removeClass('active');
            $(this).attr('val', 'on').addClass('active');
            $('.filter > div').hide(300);
            $('.filter > div[filter=' + $(this).attr('filter') + ']').show(300);
            if ($(this).attr('filter') == 'all') {
                $('.button[filter]').attr('val', 'off').removeClass('active');
                $(this).attr('val', 'on').addClass('active');
                $('.filter > div').show(300);
            }
        }
    });
    $('.multiple-items').slick({
        infinite: true,
        sldeToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style'
    });
});