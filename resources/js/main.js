var contents = new Swiper(".contents", {
    direction: "vertical",
    mousewheel: true
});

contents.on("activeIndexChange", function () {
    var idx = this.realIndex;
    var pIdx = this.previousIndex;
    var slide = $(".contents > .swiper-wrapper > .swiper-slide");

    $(".contents").addClass("v1"); 
    slide.eq(1).removeClass("v1");    
    $("header").removeClass("black");

    if (idx == 2 && pIdx == 1) {
        slide.eq(1).addClass("v1");
        $(".contents").removeClass("v1"); 
    } else if (idx == 1 && pIdx == 2) {
        slide.eq(1).addClass("v1");    
    } else if (idx == 3) {
        $("header").addClass("black", 800);
    }   
});

var tabIdx = 0;
var fromClass = "v2_1_1";
var toClass = "v2_1_1";

$(".contents .tabHeader li").on("click", function () {
    tabIdx = $(this).index();
    $(".contents .tabHeader li").eq(tabIdx).addClass("on").siblings().removeClass("on");
    $(".contents .tabHeader div p").eq(tabIdx).addClass("on").siblings().removeClass("on");
    $(".contents .tabBody > section").eq(tabIdx).addClass("on").siblings().removeClass("on");
    $(".contents .tabBody > .on").find("li:eq(0)").trigger("mouseenter");

    return false;
});

$(".contents .boxWrap li").on("mouseenter", function () {
    $(this).addClass("on").siblings().removeClass("on"); 

    toClass = "v2_" + (tabIdx + 1) + "_" + ($(this).index() + 1);

    if (fromClass != toClass) {
        $(".tabWrap .toBg").addClass(toClass);
        setTimeout(function () {
            $(".tabWrap .fromBg").removeClass(fromClass).addClass(toClass);
            $(".tabWrap .toBg").removeClass(toClass);
            fromClass = toClass;
        }, 300);
    }

    return false;
});