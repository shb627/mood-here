window.onload = function () {
  kakao.maps.load(function () {
    const ps = new kakao.maps.services.Places();

    const searchBtn = document.getElementById("searchBtn");
    const keyword = document.getElementById("keyword");
    const placeList = document.getElementById("placeList");
    const placeName = document.getElementById("placeName");
    const placeAddress = document.getElementById("placeAddress");

    searchBtn.addEventListener("click", () => {
      const value = keyword.value.trim();

      if (!value) return;

      ps.keywordSearch(value, placesSearchCB);
    });

    function placesSearchCB(data, status) {
      placeList.innerHTML = "";

      if (status === kakao.maps.services.Status.OK) {
        data.forEach((place) => {
          const li = document.createElement("li");

          li.innerHTML = `
            <strong>${place.place_name}</strong>
            <span>${place.address_name}</span>
          `;

          li.addEventListener("click", () => {
            // 아래 선택된 장소 영역에 출력
            placeName.textContent = place.place_name;
            placeAddress.textContent =
              place.road_address_name || place.address_name;

            // 검색창에도 가게명 넣기
            keyword.value = place.place_name;

            // 검색 결과 목록 숨기기
            placeList.innerHTML = "";
          });

          placeList.appendChild(li);
        });
      }
    }
  });
};

// 무드 선택
const moodItems = document.querySelectorAll(".choose-mood");

moodItems.forEach((item) => {
  item.addEventListener("click", () => {
    moodItems.forEach((mood) => {
      mood.classList.remove("active");
    });

    item.classList.add("active");
  });
});

// 사진추가
const photoInput = document.querySelector("#photoInput");
const photoGrid = document.querySelector("#photoGrid");

let photoFiles = [];

photoInput.addEventListener("change", function (e) {
  const selectedFiles = Array.from(e.target.files);

  selectedFiles.forEach((file) => {
    if (photoFiles.length >= 6) {
      alert("사진은 최대 6개까지 업로드할 수 있어요.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("사진 1개당 10MB 이하만 업로드할 수 있어요.");
      return;
    }

    photoFiles.push(file);
  });

  renderPhotos();
  photoInput.value = "";
});

function renderPhotos() {
  photoGrid.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const box = document.createElement("div");
    box.className = "photo-box";

    if (photoFiles[i]) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(photoFiles[i]);

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "photo-delete-btn";
      deleteBtn.type = "button";
      deleteBtn.innerHTML = "×";

      deleteBtn.addEventListener("click", () => {
        photoFiles.splice(i, 1);
        renderPhotos();
      });

      box.appendChild(img);
      box.appendChild(deleteBtn);
    }

    photoGrid.appendChild(box);
  }
}
renderPhotos();

// 모달
const modal = document.getElementById("modal");
const openBtn = document.getElementById("saveMoodBtn");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

/* 배경 클릭시 닫기 */
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
