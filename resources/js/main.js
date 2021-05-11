// fullpage
var fullpage = $("#fullpage").fullpage({
    onLeave: function (origin, destination, direction) {
        if (origin == 2 && direction == "down") {              
            $(".section").eq(1).addClass("v1");
        } else if (origin == 3 && direction == "up") {
            $(".section").eq(1).addClass("v1");
        } else if (origin == 4 && direction == "down") {
            $("header").fadeOut();          
        } else if (origin == 5 && direction == "up") {
            $("header").fadeIn();                       
        } else {
            $(".v1").removeClass("v1");
        }
    },
    afterLoad: function (anchorLink, origin) {
        if (origin == 5) {
            return true;
        } else if (origin == 4) {
            $("header").addClass("black");
        } else {
            $("header").removeClass("black");
        }

        if (flag) $(".section").eq(origin - 1).addClass("inter").siblings().removeClass("inter");
    }
});

var flag = false;
setTimeout(function () { $(".section").eq(0).addClass("inter"); flag = true; }, 500);

// tab 
var idx = 0;

$(".tabNav .tab li").on("click", function () {
    $(".section").eq(2).removeClass("inter");
    var _this = $(this);
    idx = _this.index();
    _this.addClass("on").siblings().removeClass("on");
    $(".tabNav .ment li").eq(idx).addClass("on").siblings().removeClass("on");
    $(".tabBody ul").eq(idx).addClass("on").siblings().removeClass("on");
    $(".tabBody ul").eq(idx).find("li:first-child").addClass("on").siblings().removeClass("on");
    $(".section:eq(2) .bg img").eq(idx * 3).addClass("on").siblings().removeClass("on");
    setTimeout(function () { $(".section").eq(2).addClass("inter"); }, 500);
});

$(".tabBody li").on("mouseenter", function () {
    var _this = $(this);
    var idx2 = _this.index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".section:eq(2) .bg img").eq((idx * 3) + idx2).addClass("on").siblings().removeClass("on");
});


// top
$(".top").on("click", function () {
    $.fn.fullpage.setScrollingSpeed(1500); 
    $.fn.fullpage.moveTo(1);
});

// pc 모바일 구분
if (!navigator.userAgent.match(/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)){
    //PC에서만 실행 될 스크립트   alert("PC 브라우저");
} else {
    //alert("사이트는 PC 브라우저로 보실수 있습니다. PC에서 확인해주세요");
    location.href = "mobile.html";
}

// popup
$(document).on("click", "a[href='popup.html']", function () {
    var oHtml = "<div class='popup'>";
    oHtml += '<h2>이메일무단수집거부<img src="resources/img/close.png"/></h2>';
    oHtml += '<div>재단법인 청소년그루터기재단(이하"재단"이라 함)은 정보통신망법 제50조의 2, 제50조의 7 등에 의거하여, 재단이 운영·관리하는 웹페이지 상에서 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며 이를 위반시 정보통신망법에 의해 형사처벌됨을 유념하시기 바랍니다.</div>';

    $("body").append(oHtml);

    return false;
}).on("click", ".popup h2 img", function () {
    $(".popup").remove();
});

// family site
$(document).on("change", ".familySite", function () {
    var val = $(this).val();

    if (val.indexOf("http") > -1) {
        window.open(val);
    }
});
