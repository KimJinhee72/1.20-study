window.onload = function () {
  const wrapSwiper = new Swiper(".wrap", {
    // 슬라이드 방향 정하기
    loop: true, //계속 연결됨
    direction: "horizontal",
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 50,
      stretch: -100, //슬라이드 간의 간격
      depth: 400, //슬라이드의 3d 깊이
      modifier: 1, //효과의 강도 숫자가 높을 수록 효과 커짐
      slideShadows: false, //없애도 되고 그림자 false지우기, true 생기기      
      speed: 10000, // 전환 속도 (ms 값이 클수록 느려짐
    },
    navigation: {
      nextEl: ".wrap .swiper-button-next",
      prevEl: ".wrap .swiper-button-prev",
    },
    pagination: {
      el: ".wrap .swiper-pagination",
      type: "fraction", //페이지내이션 1/5로 나오게 함
      // clickable: true,-페이지내이션 점점점모양
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });
  // 재생멈춤
  //   재생버튼을 btnStart 변수에 저장
  const btnStart = document.querySelector(".btnStart");
  //   console.log(btnStart)
    btnStart.addEventListener("click", function () {
    // console.log("재생버튼 click")
    // 메인 랩스와이퍼 안에 오토플레이를 스타트해라
    wrapSwiper.autoplay.start();
  });
  //   멈춤버튼을 btnStart 변수에 저장
  const btnStop = document.querySelector(".btnStop");
  //   console.log(btnStop)//btnStop은 html의 class가 아니라 내가 정한이름
  // 내가정한이름.addE("이벤트내용(문자)")
    btnStop.addEventListener("click", function () {
    // console.log("멈춤버튼 click")
    // 메인 랩스와이퍼 안에 오토플레이를 멈춰라
    wrapSwiper.autoplay.stop();
  });
};
