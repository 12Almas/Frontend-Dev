$(document).ready(function () {
    $('#add-post').click(() => $('#blog-list').append('<article>New Standard Post appended.</article>'));

    $('#prepend-post').click(() => $('#blog-list').prepend('<article><strong>FEATURED: Top News!</strong></article>'));

    $('#remove-last').click(() => $('#blog-list article:last-child').remove());

    $('#add-tag').click(() => {
        $('#blog-list article').before('<span>[Start] </span>').after('<span> [End]</span><br>');
    });

    $('#highlight-key').click(() => {
        $('#blog-list article:contains("JS")').css('background', 'yellow');
    });
});