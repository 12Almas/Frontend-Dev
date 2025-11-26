$(document).ready(function () {
    $('#hide-btn').click(() => $('.banner').hide());
    $('#show-btn').click(() => $('.banner').show());

    $('#slide-btn').click(() => $('.banner').slideToggle());

    $('#fade-btn').click(() => $('.banner').fadeToggle());

    setInterval(function () {
        const current = $('.banner:visible').first();
        const next = current.next('.banner').length ? current.next() : $('.banner:first');

        current.fadeOut(500, function () {
            next.fadeIn(500);
        });
    }, 5000);
});