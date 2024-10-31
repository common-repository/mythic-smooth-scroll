/* global jQuery, smoothScrollData */
(function () {
    
    "use strict";
    jQuery(document).ready(function ($) {
        $('a[href*=\\#]:not([href=\\#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {
                var target = $(this.hash),
                    headerHeight = 0,
                    offset = parseInt(smoothScrollData.offsetAmount);

                if (smoothScrollData.headerID !== '') {
                    headerHeight += $('#' + smoothScrollData.headerId + "").outerHeight(); // Get fixed header height
                }

                if (smoothScrollData.offsetAmount === '') {
                    smoothScrollData.offsetAmount = 50;
                }

                headerHeight += offset; // Add Offset

                if (smoothScrollData.adminBar) {
                    headerHeight += $('#wpadminbar').outerHeight(); // Add Admin Bar Height
                }

                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - headerHeight
                    }, 500);

                    return false;
                }
            }
        });
    });
    
})(jQuery);