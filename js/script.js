// const swiper = new Swiper(".onboarding-swiper", {
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     loop: true,
//   },
// });

// const swiper = new Swiper(".onboarding-swiper", {
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     loop: true,
//   },
// });

function initOnboardingSwiper() {
  new Swiper(".onboarding-swiper", {
    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      loop: true,
    },
  });
}

document.addEventListener("DOMContentLoaded", initOnboardingSwiper);

// 배너 슬라이드
const bannerSwiper = new Swiper(".banner-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000, // 3초마다 넘어감
    disableOnInteraction: false, // 사용자가 눌러도 자동재생 계속
  },
});
