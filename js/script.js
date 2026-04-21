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

// 실제 반응형 적용 (ResizeObserver 사용)
const observer = new ResizeObserver((entries) => {
  const width = entries[0].contentRect.width;
  shell.classList.toggle("is-desktop", width >= 768);
  shell.classList.toggle("is-mobile", width < 768);
});
observer.observe(document.body);

// 비밀번호 에러
const pw = document.getElementById("pw");
const pwConfirm = document.getElementById("pw-confirm");
const pwError = document.getElementById("pw-error");

pwConfirm.addEventListener("input", () => {
  if (pwConfirm.value === "") {
    pwConfirm.classList.remove("error");
    pwError.classList.remove("show");
    return;
  }

  if (pw.value !== pwConfirm.value) {
    pwConfirm.classList.add("error");
    pwError.classList.add("show");
  } else {
    pwConfirm.classList.remove("error");
    pwError.classList.remove("show");
  }
});
