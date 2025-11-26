$(document).ready(function () {
    $('#reg-form').submit(function (e) {
        e.preventDefault();
        let isValid = true;

        $('input').css('border', '1px solid #ccc');
        $('#msg').text('');

        if ($('#name').val().trim() === "") {
            $('#name').css('border', '2px solid red');
            isValid = false;
        }

        const emailVal = $('#email').val();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailVal)) {
            $('#email').css('border', '2px solid red');
            isValid = false;
        }

        if ($('#pass').val().length < 8) {
            $('#pass').css('border', '2px solid red');
            isValid = false;
        }

        if (isValid) {
            $('#msg').text("Registration Successful!").css('color', 'green');
        } else {
            $('#msg').text("Please fix the errors highlighted in red.").css('color', 'red');
        }
    });
});