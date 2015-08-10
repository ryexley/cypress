/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */

(function ($) {
    "use strict";

    // initialize discussion tabs
    $(".discussion-tabs").on("click", "li", function (e) {
        var target = $(e.currentTarget);
        var toShow = $("#" + target.data("show") + "-comments-container");
        $(".discussion-tabs li").removeClass("active");
        target.addClass("active");
        $(".comments-container").addClass("hidden");
        toShow.removeClass('hidden');
    });

    // initialize magnific-popup
    var $photos = $(".photo-group");
    if ($photos.length) {
        $photos.magnificPopup({
            delegate: "a",
            type: "image",
            mainClass: 'mfp-with-fade',
            preloader: true,
            removalDelay: 300,
            showCloseBtn: false,
            gallery: {
                enabled: true
            }
        });
    }

}(jQuery));
