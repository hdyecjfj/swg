$(document).ready(function() {

    $('.content .new').hover(function() {
        $(this).addClass('hover_on').siblings().removeClass('hover_on');
    }, function() {
        $('.content .new').removeClass('hover_on');
    });

});