$(document).ready(function () {
    $('.product').click(function () {
        $(this).toggleClass('highlight-bg');
    });

    $('.product').hover(
        function () { $(this).find('.details').slideDown(); },
        function () { $(this).find('.details').slideUp(); }
    );

    $('.fav-btn').click(function (e) {
        e.stopPropagation();
        $(this).parent().toggleClass('selected');
    });

    $('.product').click(function () {
        if ($(this).data('stock') === 0) {
            alert("Sorry, this item is out of stock!");
        }
    });
});