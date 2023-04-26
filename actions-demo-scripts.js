$(document).ready(function () {
    $('.days li').on('click', function () {
        // $('.event-list-items')
        $(this).siblings().removeClass('clicked');
        $(this).addClass('clicked');
        if ($(this).find('span').hasClass('event-block')) {
            $('.events-list-block .events-list-has-data').show();
            $('.events-list-block .events-list-no-data').hide();
        } else {
            $('.events-list-block .events-list-no-data').show();
            $('.events-list-block .events-list-has-data').hide();
        }
    });
});