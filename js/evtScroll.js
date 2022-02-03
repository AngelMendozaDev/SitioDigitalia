$(function() {

    $("#up").click(function(e) {
        console.log("Click en Ups");
        e.preventDefault();

        $('html, body').animate({ scrollTop: 0 }, 1000);
    })
});