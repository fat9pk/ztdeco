(function ($) {
    if (!$.omr) {
        $.omr = new Object();
    }
    ;
    $.omr.mosaic = function (el, options) {
        var base = this;
        base.$el = $(el);
        base.el = el;
        base.$el.data("omr.mosaic", base);
        base.init = function () {
            base.options = $.extend({}, $.omr.mosaic.defaultOptions, options);
            base.load_box();
        };
        base.load_box = function () {
            if (base.options.preload) {
                $(base.options.backdrop, base.el).hide();
                $(base.options.overlay, base.el).hide();
                $(window).load(function () {
                    if (base.options.options.animation == 'fade' && $(base.options.overlay, base.el).css('opacity') == 0)$(base.options.overlay, base.el).css('filter', 'alpha(opacity=0)');
                    $(base.options.overlay, base.el).fadeIn(200, function () {
                        $(base.options.backdrop, base.el).fadeIn(200);
                    });
                    base.allow_hover();
                });
            } else {
                $(base.options.backdrop, base.el).show();
                $(base.options.overlay, base.el).show();
                base.allow_hover();
            }
        };
        base.allow_hover = function () {
            switch (base.options.animation) {
                case'fade':
                    $(base.el).hover(function () {
                        $(base.options.overlay, base.el).stop().fadeTo(base.options.speed, base.options.opacity);
                    }, function () {
                        $(base.options.overlay, base.el).stop().fadeTo(base.options.speed, 0);
                    });
                    break;
                case'slide':
                    startX = $(base.options.overlay, base.el).css(base.options.anchor_x) != 'auto' ? $(base.options.overlay, base.el).css(base.options.anchor_x) : '0px';
                    startY = $(base.options.overlay, base.el).css(base.options.anchor_y) != 'auto' ? $(base.options.overlay, base.el).css(base.options.anchor_y) : '0px';
                    ;
                    var hoverState = {};
                    hoverState[base.options.anchor_x] = base.options.hover_x;
                    hoverState[base.options.anchor_y] = base.options.hover_y;
                    var endState = {};
                    endState[base.options.anchor_x] = startX;
                    endState[base.options.anchor_y] = startY;
                    $(base.el).hover(function () {
                        $(base.options.overlay, base.el).stop().animate(hoverState, base.options.speed);
                    }, function () {
                        $(base.options.overlay, base.el).stop().animate(endState, base.options.speed);
                    });
                    break;
            }
            ;
        };
        base.init();
    };
    $.omr.mosaic.defaultOptions = {
        animation: 'fade',
        speed: 150,
        opacity: 1,
        preload: 0,
        anchor_x: 'left',
        anchor_y: 'bottom',
        hover_x: '0px',
        hover_y: '0px',
        overlay: '.mosaic-overlay',
        backdrop: '.mosaic-backdrop'
    };
    $.fn.mosaic = function (options) {
        return this.each(function () {
            (new $.omr.mosaic(this, options));
        });
    };
})(jQuery);