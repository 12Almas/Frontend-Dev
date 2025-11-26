$(document).ready(function () {
    $('#search').keyup(function () {
        const val = $(this).val().toLowerCase();
        let counter = 0;

        $('#course-list li').each(function () {
            const text = $(this).text().toLowerCase();

            if (text.includes(val)) {
                $(this).show();
                $(this).css('color', 'red');
                counter++;
            } else {
                $(this).hide();
                $(this).css('color', 'black');
            }
        });

        $('#count').text(counter);
    });

    $('#clear-btn').click(function () {
        $('#search').val('');
        $('#course-list li').show().css('color', 'black');
        $('#count').text($('#course-list li').length);
    });
});