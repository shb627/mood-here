document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (!href || href.startsWith("#")) return;

    e.preventDefault();

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = href;
    }, 100);
  });
});

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
      window.location.href = "home.html";
    }
  });
}

//바텀 네비게이션 로고 색상 변경
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  const navLinks = document.querySelectorAll(".bottom-nav a");

  navLinks.forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");

      const img = link.querySelector("img");
      img.src = img.src.replace("dis-", "");
    }
  });
});
