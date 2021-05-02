// fullpage
var fullpage = $("#fullpage").fullpage({
    onLeave: function (origin, destination, direction) {
        if (origin == 2 && direction == "down") {
            $(".section").eq(1).addClass("v1");
        } else if (origin == 3 && direction == "up") {
            $(".section").eq(1).addClass("v1");
        } else {
            $(".v1").removeClass("v1");
        }
    },
    afterLoad: function (anchorLink, origin) {
        if (origin == 4 || origin == 5) {
            $("header").addClass("black");
        } else {
            $("header").removeClass("black");
        }
    }
});

// tab 
var idx = 0;

$(".tabNav .tab li").on("click", function () {
    var _this = $(this);
    idx = _this.index();
    _this.addClass("on").siblings().removeClass("on");
    $(".tabNav .ment li").eq(idx).addClass("on").siblings().removeClass("on");
    $(".tabBody ul").eq(idx).addClass("on").siblings().removeClass("on");
    $(".tabBody ul").eq(idx).find("li:first-child").addClass("on").siblings().removeClass("on");
    $(".section:eq(2) .bg img").eq(idx * 3).addClass("on").siblings().removeClass("on");
});

$(".tabBody li").on("mouseenter", function () {
    var _this = $(this);
    var idx2 = _this.index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".section:eq(2) .bg img").eq((idx * 3) + idx2).addClass("on").siblings().removeClass("on");
});


// top
$(".top").on("click", function () {
    $.fn.fullpage.moveTo(1);
    $.fn.fullpage.setScrollingSpeed(1000); 
});

// menu link
$("header nav a").on("click", function () {
    var url = $(this).attr("href");

    $.get(url, function (dom) {
        console.log(dom);
    });

    return false;
});