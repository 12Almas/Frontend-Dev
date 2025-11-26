$(document).ready(function () {
    $('#subscribe-all').click(function () {
        alert("Notifications Enabled for all topics!");
    });

    $('#add-topic').click(function () {
        $('#topics').append('<div class="topic">Sports <button class="unsub">Unsubscribe</button></div>');

        $('body').append('<p class="success">New Topic Added Successfully!</p>');
        setTimeout(() => $('.success').fadeOut(), 2000);
    });

    $('#topics').on('click', '.unsub', function () {
        $(this).parent().remove();
        alert("Unsubscribed successfully.");
    });
});