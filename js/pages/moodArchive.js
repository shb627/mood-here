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
