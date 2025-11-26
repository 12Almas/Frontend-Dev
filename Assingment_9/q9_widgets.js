jq1(document).ready(function () {
    jq1('#widget1').css('border', '5px solid red');
});

jq2(document).ready(function () {
    jq2('#widget2').hover(function () {
        jq2(this).css('background', 'lightblue');
    });
});