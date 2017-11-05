$(document).ready(function() {

    $('.bodymain .ad .smallphoto div').hover(function() {

        var i = $('.bodymain .ad .smallphoto div').index($(this)); //获取被点元素在jQuery中的下标
        $(this).children('p').hide();
        $(this).siblings().children('p').show();
        var img = $('.bodymain .ad .bigphoto img');
        $(img).hide();
        $(img[i]).show();
        console.log($(img[i]));

    }, function() {

    });


    $('.webinar .box').hover(function() {
        $(this).children('.zhemu').slideDown();
    }, function() {
        $('.webinar .box').children('.zhemu').slideUp();
    });


    $('.jinxuan .main ul dd').hover(function() {
        $(this).css({
            'transform': 'scale3d(1.1,1.1,1.1)',
            color: "skyblue"
        })

    }, function() {
        $('.jinxuan .main ul dd').css({
            'transform': 'scale3d(1,1,1)',
            color: "#666666"
        });
    });

    $('.top ul dd').hover(function() {
        $(this).css({
            'transform': 'scale3d(1.1,1.1,1.1)',
            color: "skyblue",
            textshadow: "2px 2px 3px #ccc"
        })

    }, function() {
        $('.top ul dd').css({
            'transform': 'scale3d(1,1,1)',
            color: "#666666"
        });
    });

    // $('.top ul dt').hover(function() {
    //     $(this).children('a').css({
    //         display: 'block',
    //         transform: 'scale3d(1.1,1.1,1.1)',
    //         color: "red",
    //         textshadow: "2px 2px 3px #ccc",
    //     })

    // }, function() {
    //     $('.top ul dt a').css({
    //         'transform': 'scale3d(1,1,1)',
    //         color: "#666666"
    //     });
    // });

});