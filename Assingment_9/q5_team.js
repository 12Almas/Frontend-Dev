$(document).ready(function () {
    $('.manager').click(function () {
        $(this).siblings('.employee').toggleClass('highlight');
    });

    $('.employee').hover(
        function () { $(this).find('.info').show(); },
        function () { $(this).find('.info').hide(); }
    );

    $('.dept-title').click(function () {
        $(this).parent().children().css('background', '#e0e0e0');
    });

    $('.employee').first().click(function () {
        $(this).siblings('.employee').css('border', '2px solid red');
    });

    $('#collapse-btn').click(function () {
        $('.department').find('.manager, .employee').slideToggle();
    });
});