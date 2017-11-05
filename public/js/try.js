$(document).ready(function() {



    $('.nav .bottom dd').hover(function() {
        var mainbody = $('.mainbody').children('div');
        var i = $('.nav .bottom dd').index($(this));
        $(this).addClass('blue').siblings().removeClass('blue');
        $(mainbody[i]).show().siblings().hide();
        console.log(mainbody[i]);
        if (i == 1 || i == 2) {
            $('.second').slideUp();
        } else {
            $('.second').slideDown();
        }
    }, function() {});

    $('.canpin').hover(function() {
        $(this).addClass('canpin_on');
    }, function() {
        $('.canpin').removeClass('canpin_on');
    });






});