$(document).ready(function() {

    $('.bodyleft .war .left').hover(function() {
        var dot = $('.bodyleft .war div .dot');
        var i = $('.bodyleft .war .left dl');
        $(i).children('ul').hide();
        $(this).children('ul').show();
        $(this).siblings().children('ul').hide();
        $(this).children('dl').children('.dot').show();
        $(this).siblings().children('dl').children('.dot').hide();

    }, function() {
        var dot = $('.bodyleft .war div .dot');
        var i = $('.bodyleft .war .left dl');
        $(i).siblings('ul').hide();
        $(dot).hide();

    });

    $('.bodyright .top dl dt').hover(function() {
        $(this).addClass('xuanz');
    }, function() {

        $(this).removeClass('xuanz');
    });

    $('.bodyright .top dl dd').hover(function() {
        $(this).addClass('xuanz');
    }, function() {

        $(this).removeClass('xuanz');
    });


    $('.bodyright .content ul dt').hover(function() {
        var i = $('.bodyright .content ul dt').index($(this));
        var show = $('.bodyright .content ul div');
        $(this).addClass('blue').siblings().removeClass('blue');
        $(show[i]).show().siblings('div').hide();
        console.log(show);


    }, function() {
        $(this).removeClass('xuanz');
    });


    $('.bodymain .nav dd').hover(function() {

        $(this).addClass('nav_show').siblings().removeClass('nav_show');
        var i = $('.bodymain .nav dd').index($(this));
        var nav_show = $('.bodymain .mode1').children('div');

        $(nav_show[i]).show().siblings().hide();
    }, function() {
        $(".bodymain .nav dd").removeClass('nav_show');
    });


    $('.bodymain .nav dd').hover(function() {
        $(this).addClass('nav_show');
        var i = $('.bodymain .nav dd').index($(this));
        var nav_show = $('.bodymain .mode1').children('div');
        $(nav_show[i]).show().siblings().hide();
    }, function() {
        $(".bodymain .nav dd").removeClass('nav_show');
    });

    $('.toptop').hover(function() {
        $('.adadadad img').slideDown();
    }, function() {});

    $('.trysomethingbetter').hover(function() {
        $('.adadadad img').slideToggle();
    }, function() {});







});