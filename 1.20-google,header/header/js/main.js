$(document).ready(function () {
    // 햄버거바 클릭시
  $("#hamburger-menu").click(function () {
    $("#mobile-nav").animate(
      {
        right: 0,
      },
      300
    );
  });
  // 모바일용 메뉴 클릭시
  $(".mobile-nav .gnb > li > a").click(function(){
    // this는 내가 누르는 것임
    // console.log(this);
    $(this).next(".mobile-nav .depth2").stop().slideToggle()
  })
  // 모바일용 메뉴닫기버튼
  $("#close-menu").click(function () {
    $("#mobile-nav").animate(
      {
        right: "-300px", //메뉴가 오른쪽 밖으로 나감
      },
      300
    );
  });
  // 메뉴에 호버했을때
  $("nav .gnb").hover(
    function () {
      // 마우스 호버했을때
      $("nav .depth2 , .header-bg").stop().slideDown();
    },
    function () {
      // 마우스 호버안할때
      $("nav .depth2 , .header-bg").stop().slideUp();
    }
  );
});
// javascrip는 $와 다르게 밑이나 위에 씀
// window.onload = function(){ }