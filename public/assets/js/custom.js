
jQuery(document).ready(function($) {

    "use strict";

    var win = $(window);
    //$("#loading").delay(2000).fadeOut(500);
    win.on('load', function() {
        $("#pre_loader").addClass('down');
    });
    //============================================
    //Screen height
    //=============================================
    $(".screen-height").css({
        'height': window.innerHeight - 110
    });

    win.resize(function() {
        $(".screen-height").css({
            'height': window.innerHeight - 110
        });
    });
    $(".wrapper").css({
        'height': window.innerHeight
    });

    win.resize(function() {
        $(".wrapper").css({
            'height': window.innerHeight
        });
    });
    //============================================
    //Time
    //=============================================
    window.onload = function(){date()}, setInterval(function(){date()}, 1000);

    function date() {
        var now = new Date(),
            now = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
        $('#currentDate').html(now);
    }

    //============================================
    // Mobile sub menu
    //============================================
    if (win.width() <= 767) {
        $("#slide-nav #menu_nav ul > li.dropdown").append('<div class="more"></div>');

        $("#slide-nav #menu_nav").on("click", ".more", function(e) {
            e.stopPropagation();

            $(this).parent().toggleClass("current")
                .children("#slide-nav #menu_nav ul > li.dropdown > ul").toggleClass("open");

        });

    }

    win.resize(function() {
        if (window.innerWidth > 767) {
            if ($('#slide-nav #menu_nav ul > li.dropdown .more').length !== 0) {
                $('#slide-nav #menu_nav ul > li.dropdown div').remove('.more');
            }
        } else {
            $("#slide-nav #menu_nav ul > li.dropdown").append('<div class="more"></div>');
        }
    });

    var $body = $('body'),
        $wrapper = $('.body-innerwrapper'),
        $toggler = $('.navbar-toggle'),
        $close = $('.closs'),
        $offCanvas = $('.navbar-collapse');

    $toggler.on('click', function(event) {
        event.preventDefault();
        stopBubble(event);
        setTimeout(offCanvasShow, 50);
    });

    $close.on('click', function(event) {
        event.preventDefault();
        offCanvasClose();
    });

    var offCanvasShow = function() {
        $body.addClass('offcanvas');
        $wrapper.on('click', offCanvasClose);
        $close.on('click', offCanvasClose);
        $offCanvas.on('click', stopBubble);

    };

    var offCanvasClose = function() {
        $body.removeClass('offcanvas');
        $wrapper.off('click', offCanvasClose);
        $close.off('click', offCanvasClose);
        $offCanvas.off('click', stopBubble);
    };

    var stopBubble = function(e) {
        e.stopPropagation();
        return true;
    };



});
