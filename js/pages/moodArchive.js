document.addEventListener("DOMContentLoaded", () => {
  kakao.maps.load(function () {
    const mapContainer = document.getElementById("map");

    const mapOption = {
      center: new kakao.maps.LatLng(37.5665, 126.978),
      level: 4,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);
  });
});

document
  .getElementById("currentLocationBtn")
  .addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const currentPos = new kakao.maps.LatLng(lat, lng);

        // 지도 중심 이동
        map.setCenter(currentPos);

        // 확대
        map.setLevel(3);

        // 마커 표시
        new kakao.maps.Marker({
          map: map,
          position: currentPos,
        });
      },
      function () {
        alert("위치 권한을 허용해주세요.");
      },
    );
  });

window.onload = function () {
  kakao.maps.load(function () {
    const mapContainer = document.getElementById("map");

    const mapOption = {
      center: new kakao.maps.LatLng(35.8691, 128.5944), // 대구
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커 이미지
    const imageSrc = "assets/icons/svg/peace.png";

    const imageSize = new kakao.maps.Size(57, 36);

    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    const markerPosition = new kakao.maps.LatLng(35.8691, 128.5944);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    marker.setMap(map);
  });
};

// 바텀시트 드래그
const mapEl = document.getElementById("map");
const bottomSheet = document.getElementById("bottomSheet");
const handle = bottomSheet.querySelector(".bottom-sheet-handle");
const COLLAPSED_HEIGHT = window.innerHeight * 0.35; // 35vh
const HEADER_H = 190 + 10; // 79px (헤더 아래 ~10px 여백)

let startY = 0;
let startHeight = 0;
let isDragging = false;

// --- 터치 ---
handle.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
  startHeight = bottomSheet.offsetHeight;
  isDragging = true;
  bottomSheet.style.transition = "none"; // 드래그 중 transition 끄기
});

handle.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const delta = startY - e.touches[0].clientY; // 위로 올리면 양수
  const newHeight = Math.min(
    Math.max(startHeight + delta, COLLAPSED_HEIGHT),
    window.innerHeight - HEADER_H, // 헤더 아래 전체
  );
  bottomSheet.style.height = newHeight + "px";
});

handle.addEventListener("touchend", (e) => {
  isDragging = false;
  bottomSheet.style.transition = "height 0.3s ease"; // transition 복구

  const currentH = bottomSheet.offsetHeight;
  const threshold = window.innerHeight * 0.65; // 65% 넘으면 전체로 snap

  if (currentH > threshold) {
    // 전체화면으로 snap
    bottomSheet.style.height = window.innerHeight - HEADER_H + "px";
    bottomSheet.classList.add("expanded");
  } else {
    // 원래 45%로 snap
    bottomSheet.style.height = COLLAPSED_HEIGHT + "px";
    bottomSheet.classList.remove("expanded");
  }
});

// --- 마우스 (PC 테스트용) ---
handle.addEventListener("mousedown", (e) => {
  startY = e.clientY;
  startHeight = bottomSheet.offsetHeight;
  isDragging = true;
  bottomSheet.style.transition = "none";
  mapEl.style.pointerEvents = "none"; //
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const delta = startY - e.clientY;
  const newHeight = Math.min(
    Math.max(startHeight + delta, COLLAPSED_HEIGHT),
    window.innerHeight - HEADER_H,
  );
  bottomSheet.style.height = newHeight + "px";
});

document.addEventListener("mouseup", () => {
  if (!isDragging) return;
  isDragging = false;
  bottomSheet.style.transition = "height 0.3s ease";
  mapEl.style.pointerEvents = "auto";
  const currentH = bottomSheet.offsetHeight;
  const threshold = window.innerHeight * 0.65;

  if (currentH > threshold) {
    bottomSheet.style.height = window.innerHeight - HEADER_H + "px";
    bottomSheet.classList.add("expanded");
  } else {
    bottomSheet.style.height = COLLAPSED_HEIGHT + "px";
    bottomSheet.classList.remove("expanded");
  }
});
