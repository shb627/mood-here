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
