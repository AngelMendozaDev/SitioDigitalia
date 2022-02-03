$(function() {

    function clear() {
        $('#btn-inicio').removeClass('select');
        $('#btn-web').removeClass('select');
        $('#btn-marketing').removeClass('select');
        $('#btn-consultor').removeClass('select');
        $('#btn-contacto').removeClass('select');
    }

    $("#up").click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    $("#btn-inicio").click(function(e) {
        e.preventDefault();
        clear();
        $('#btn-inicio').addClass('select');
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    $("#btn-web").click(function(e) {
        e.preventDefault();
        clear();
        $('#btn-web').addClass('select');
        $('html, body').animate({ scrollTop: $('#web-app').offset().top - 100 }, 500);
    });

    $("#btn-marketing").click(function(e) {
        e.preventDefault();
        clear();
        $('#btn-marketing').addClass('select');
        $('html, body').animate({ scrollTop: $('#marketing-d').offset().top - 100 }, 500);
    });

    $("#btn-consultor").click(function(e) {
        e.preventDefault();
        clear();
        $('#btn-consultor').addClass('select');
        $('html, body').animate({ scrollTop: $('#consultoria').offset().top - 100 }, 500);
    });

    $("#btn-contacto").click(function(e) {
        e.preventDefault();
        clear();
        $('#btn-contacto').addClass('select');
        $('html, body').animate({ scrollTop: $('#contact').offset().top - 100 }, 500);
    });

});