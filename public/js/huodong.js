$(document).ready(function() {

    $('.content .main .top dt').on('click', function() {
        $(this).addClass('top_click').siblings().removeClass('top_click');
        var i = $('.content .main .top dt').index($(this));
        var box = $('.content .main .kuai');
        $(box[i]).show();
        $(box[i]).siblings('.kuai').hide();
    });

    $('.floatleft li').on('click', function() {
        var i = $('.floatleft li').index($(this));
        var box = $('.content .main .kuai2');
        $('.content .main .top dt').removeClass('top_click');
        console.log(i);
        $(box[i]).show();
        $(box[i]).siblings('.kuai').hide();
    });





});