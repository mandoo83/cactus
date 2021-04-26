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


var tab = new Swiper(".tab");

tab.on("activeIndexChange", function () {
    var idx = this.realIndex;
    var tabs = $(".contents .tabHeader li");

    tabs.eq(idx).addClass("on").siblings().removeClass("on"); 
})

$(".contents .tabHeader li").on("click", function () {
    var idx = $(this).index();
    tab.slideTo(idx);
    $(".contents .boxWrap").eq(idx).find("li:eq(0)").trigger("mouseenter");
    return false;
});

$(".contents .boxWrap li").on("mouseenter", function () {
    $(this).addClass("on").siblings().removeClass("on"); 
    $(this).parents(".tab").removeClass("v2_1_1 v2_1_2 v2_1_3 v2_2_1 v2_2_2 v2_2_3 v2_3_1 v2_3_2 v2_3_3").addClass("v2_" + (tab.realIndex + 1) + "_" + ($(this).index() + 1));
    return false;
});