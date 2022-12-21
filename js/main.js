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
});