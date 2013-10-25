/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */

(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

        $(".discussion-tabs").on("click", "li", function (e) {
            var target = $(e.currentTarget);
            var toShow = $("#" + target.data("show") + "-comments-container");
            $(".discussion-tabs li").removeClass("active");
            target.addClass("active");
            $(".comments-container").addClass("hidden");
            toShow.removeClass('hidden');
        });

    });

}(jQuery));
