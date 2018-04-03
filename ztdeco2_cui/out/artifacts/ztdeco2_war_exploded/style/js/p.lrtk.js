jQuery(function ($) {
    $('.circle').mosaic({opacity: 0.8});
    $('.fade').mosaic();
    $('.bar').mosaic({animation: 'slide'});
    $('.bar2').mosaic({animation: 'slide'});
    $('.bar3').mosaic({animation: 'slide', anchor_y: 'top'});
    $('.cover').mosaic({animation: 'slide', hover_x: '400px'});
    $('.cover2').mosaic({animation: 'slide', anchor_y: 'top', hover_y: '80px'});
    $('.cover3').mosaic({animation: 'slide', hover_x: '400px', hover_y: '300px'});
});