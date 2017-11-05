(function($) {
    $.fn.extend({
        slider: function(options) {
            var _that = this,
                main = null, //主函数，入口
                start = null, //开始动画
                stop = null, //停止动画
                stop2 = null,
                init = null, //初始化 
                dot = null,
                next = null, //播放下一张
                prev = null, //播放上一张
                leftnum = 300,
                timeout = null, //定时器
                elems = {}, //元素集合
                defaults = {
                    speed: 600,
                    delay: 1000,
                    left: 300
                }
            options = $.extend(defaults, options);

            init = function() {
                elems._index = 1; //当前播放的图片编号
                elems.sliderDiv = _that.children('div');
                elems.btn = _that.children('span');

                elems.sliderDiv.append(elems.sliderDiv.children('img').first().clone());

                _that.hover(function() {
                    stop();
                }, function() {
                    timeout = setInterval(function() { start(1); }, options.delay + options.speed);
                });

                elems.btn.on('click', function() {
                    if (elems.btn.index($(this))) {
                        next();
                    } else {
                        prev();
                    }
                });

            }

            start = function(direction) {
                var left = "-=" + options.leftnum + "";
                if (!direction) {
                    left = "+=" + options.leftnum + "";
                    if (elems._index <= 1) {
                        var imglift = elems.sliderDiv.children('img').last().offset().left,
                            divleft = _that.offset().left;

                        elems._index = 4;
                        elems.sliderDiv.css('left', '-' + (imglift - divleft) + 'px');
                    }
                }
                elems.sliderDiv.animate({
                    left: left
                }, options.speed, function() {
                    if (direction) elems._index++;
                    else elems._index--;
                    if (elems._index == 5) {
                        elems.sliderDiv.css('left', 0);
                        elems._index = 1;
                    }
                }).delay(options.delay);
            }

            next = function() {
                stop();
                start(1);
            }

            prev = function() {
                stop();
                start(0);
            }

            stop = function() {
                elems.sliderDiv.stop(true, true);
                clearInterval(timeout);
            }


            main = function() {
                init();

                timeout = setInterval(function() { start(1); }, options.delay + options.speed);
            }

            main();

        }
    });
})(jQuery)