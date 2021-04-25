$(function () {
    $(document).on("mouseenter", "header .headerInner nav > ul > li", function () {
        $("header").addClass("on");
    }).on("mouseleave", "header .headerInner nav > ul > li", function () {
        $("header").removeClass("on");
    });

});