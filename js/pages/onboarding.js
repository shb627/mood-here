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
  initBannerSwiper();

  const onboardingEl = document.querySelector(".onboarding-swiper");

  if (onboardingEl && typeof Swiper !== "undefined") {
    new Swiper(".onboarding-swiper", {
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
