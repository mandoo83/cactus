var contents = new Swiper(".contents", {
    direction: "vertical",
    mousewheel: true
});

contents.on("activeIndexChange", function () {
    var idx = this.realIndex;
    var pIdx = this.previousIndex;
    var slide = $(".contents > .swiper-wrapper > .swiper-slide");

    slide.eq(1).removeClass("v1");    

    if (idx == 2 && pIdx == 1) {
        slide.eq(1).addClass("v1");
    } else if (idx == 1 && pIdx == 2) {
        slide.eq(1).addClass("v1");    
    } 
});


var tab = new Swiper(".tab");

tab.on("activeIndexChange", function () {
    var idx = this.realIndex;
    var tabs = $(".contents .tabHeader li");

    tabs.eq(idx).addClass("on").siblings().removeClass("on"); 
})

$(".contents .tabHeader li").on("click", function () {
    
    return false;
});