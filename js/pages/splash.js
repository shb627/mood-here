setTimeout(() => {
  location.href = "onboarding.html";
}, 1500);

window.onload = () => {
  if (window.innerWidth >= 1024) {
    // PC
    setTimeout(() => {
      location.href = "home.html";
    }, 1000);
  } else {
    // 모바일
    setTimeout(() => {
      location.href = "onboarding.html";
    }, 1500);
  }
};
