// 배너 스와이퍼
function initBannerSwiper() {
  const bannerEl = document.querySelector(".banner-swiper");

  if (bannerEl && typeof Swiper !== "undefined") {
    new Swiper(".banner-swiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initBannerSwiper();

  // 바텀 네비 활성화
  let currentPage = window.location.pathname.split("/").pop();

  if (!currentPage || currentPage === "index.html") {
    currentPage = "home.html";
  }

  const navLinks = document.querySelectorAll(".bottom-nav a");

  navLinks.forEach((link) => {
    const targetPage = link.dataset.page;
    const img = link.querySelector("img");

    if (targetPage === currentPage) {
      link.classList.add("active");

      if (img) {
        img.src = img.src.replace("dis-", "act-");
      }
    }
  });
});

// 뒤로가기 버튼 기록
document.addEventListener("DOMContentLoaded", () => {
  // 뒤로가기 버튼 — DOMContentLoaded 안으로 이동
  const backBtn = document.getElementById("backBtn");

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      if (history.length > 1) {
        history.back();
      } else {
        // 현재 경로 기준으로 home.html 상대경로 계산
        const pathParts = location.pathname.split("/");
        pathParts[pathParts.length - 1] = "home.html";
        location.href = pathParts.join("/");
      }
    });
  }
});

//바텀 네비게이션 로고 색상 변경
document.addEventListener("DOMContentLoaded", () => {
  let currentPage = window.location.pathname.split("/").pop();

  if (!currentPage || currentPage === "index.html") {
    currentPage = "home.html";
  }

  console.log(currentPage);

  const navLinks = document.querySelectorAll(".bottom-nav a");

  navLinks.forEach((link) => {
    const targetPage = link.dataset.page;
    const img = link.querySelector("img");

    if (targetPage === currentPage) {
      link.classList.add("active");

      if (img) {
        const src = img.getAttribute("src");
        img.src = src.replace("dis-", "act-");
      }
    }
  });
});
