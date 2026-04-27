document.addEventListener("DOMContentLoaded", () => {
  kakao.maps.load(function () {
    const mapContainer = document.getElementById("map");

    const mapOption = {
      center: new kakao.maps.LatLng(37.5665, 126.978),
      level: 4,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    const moods = [
      {
        title: "행복했던 카페",
        lat: 37.5665,
        lng: 126.978,
      },
      {
        title: "편안했던 공원",
        lat: 37.57,
        lng: 126.982,
      },
    ];

    const sheet = document.getElementById("sheet");
    const title = document.getElementById("title");

    moods.forEach((item) => {
      const markerPosition = new kakao.maps.LatLng(item.lat, item.lng);

      const marker = new kakao.maps.Marker({
        position: markerPosition,
        map: map,
      });

      kakao.maps.event.addListener(marker, "click", function () {
        title.textContent = item.title;
        sheet.classList.add("show");
      });
    });
  });
});
