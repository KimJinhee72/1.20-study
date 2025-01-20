$(document).ready(function(){
    $("#hamburger-menu").click(function(){
        $("#mobile-nav").animate({
            right:0,
        }, 300)
    })
    // 모바일용 메뉴닫기버튼
    $("#close-menu").click(function(){
        $("#mobile-nav").animate({
            right: "-300px",//메뉴가 오른쪽 밖으로 나감
        },300)
    })
})