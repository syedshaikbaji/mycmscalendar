$(document).ready(function () {
    $('.days li').on('click', function () {
        $(this).siblings().removeClass('clicked');
        $(this).addClass('clicked');
        
        if ($(this).find('span').hasClass('event-block')) {
            $('.events-list-block .events-list-has-data').removeClass('d-none');
            $('.events-list-block .events-list-no-data').addClass('d-none');
        } else {
            $('.events-list-block .events-list-no-data').removeClass('d-none');
            $('.events-list-block .events-list-has-data').addClass('d-none');
        }
    });
});