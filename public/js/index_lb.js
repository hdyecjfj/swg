(function($) {
    $.fn.extend({
        slider: function(options) {
            var _that = this,
                main = null, //主函数，入口
                start = null, //开始动画
                stop = null, //停止动画
                init = null, //初始化 
                dot = null,
                next = null, //播放下一张
                prev = null, //播放上一张
                timeout = null, //定时器
                elems = {}, //元素集合
                defaults = {
                    speed: 800,
                    delay: 1000,
                }
            options = $.extend(defaults, options);

            init = function() {
                elems._index = 0; //当前播放的图片编号
                elems.sliderDiv = _that.children('.bigphoto');
                _that.hover(function() {
                    stop();
                }, function() {
                    timeout = setInterval(function() { start(1); }, options.delay + options.speed);
                });
            }

            start = function() {
                var img = elems.sliderDiv.children(img);
                console.log(elems._index);
                console.log();
                $(img[elems._index]).show().siblings().hide();
                var smalimg = $('.bodymain .ad .smallphoto div');
                $(smalimg[elems._index]).children('p').hide();
                $(smalimg[elems._index]).siblings().children('p').show();
                elems._index++;
                if (elems._index == 8) {
                    elems._index = 0;
                }
            }

            $('.bodymain .ad .smallphoto div').hover(function() {

                var i = $('.bodymain .ad .smallphoto div').index($(this)); //获取被点元素在jQuery中的下标
                $(this).children('p').hide();
                $(this).siblings().children('p').show();
                var img = $('.bodymain .ad .bigphoto img');
                $(img).hide();
                $(img[i]).show();
                elems._index = i;

            }, function() {
                $('.bodymain .ad .smallphoto div').children('p').show();
            });



            stop = function() {
                elems.sliderDiv.stop(true, true);
                clearInterval(timeout);
            }

            main = function() {
                init();
                timeout = setInterval(function() { start(); }, options.delay + options.speed);
            }

            main();

        }
    });
})(jQuery)