function initOnboardingSwiper() {
  const onboardingEl = document.querySelector(".onboarding-swiper");

  if (onboardingEl && typeof Swiper !== "undefined") {
    new Swiper(".onboarding-swiper", {
      spaceBetween: 12,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initOnboardingSwiper();

  const bannerEl = document.querySelector(".banner-swiper");

  if (bannerEl && typeof Swiper !== "undefined") {
    new Swiper(".banner-swiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
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
        delay: 300000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    });
  }
});

// 뒤로가기 버튼 기록
const backBtn = document.getElementById("backBtn");

if (backBtn) {
  backBtn.addEventListener("click", () => {
    if (window.history.length > 1) {
      history.back();
    } else {
      window.location.href = "/home.html";
    }
  });
}
