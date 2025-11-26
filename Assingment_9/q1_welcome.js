$(document).ready(function () {
    const hour = new Date().getHours();
    let message = "Good Evening";

    if (hour < 12) {
        message = "Good Morning";
    } else if (hour < 18) {
        message = "Good Afternoon";
    }

    $('#greeting').text(message);

    $('#btn-quote').click(function () {
        $('#greeting').text("Believe you can and you're halfway there.");
    });

    $('#btn-toggle').click(function () {
        $('#welcome-msg').toggle();
    });

    $('#greeting').click(function () {
        alert("You clicked the greeting!");
    });
});