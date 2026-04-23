const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progressBar = document.getElementById("progressBar");
const progressFill = document.getElementById("progressFill");
const currentTimeEl = document.getElementById("currentTime");
const totalTimeEl = document.getElementById("totalTime");
const visualizer = document.getElementById("visualizer");

const playIcon = "fa-circle-play";
const pauseIcon = "fa-circle-pause";

let isPlaying = false;

/* ---------------------------
   visualizer bar 만들기
--------------------------- */
const BAR_COUNT = 20;
const bars = [];

for (let i = 0; i < BAR_COUNT; i++) {
  const bar = document.createElement("span");
  bar.classList.add("bar");
  visualizer.appendChild(bar);
  bars.push(bar);
}

/* ---------------------------
   시간 포맷 함수
--------------------------- */
function formatTime(time) {
  if (isNaN(time)) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

/* ---------------------------
   재생 버튼 아이콘 변경
--------------------------- */
function updatePlayButton() {
  const icon = playBtn.querySelector("i");

  if (isPlaying) {
    icon.classList.remove(playIcon);
    icon.classList.add(pauseIcon);
  } else {
    icon.classList.remove(pauseIcon);
    icon.classList.add(playIcon);
  }
}

/* ---------------------------
   재생
--------------------------- */
function playMusic() {
  audio.play();
  isPlaying = true;
  updatePlayButton();
  visualizer.classList.add("is-playing");
}

/* ---------------------------
   일시정지
--------------------------- */
function pauseMusic() {
  audio.pause();
  isPlaying = false;
  updatePlayButton();
  visualizer.classList.remove("is-playing");
}

/* ---------------------------
   재생/일시정지 토글
--------------------------- */
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

/* ---------------------------
   메타데이터 로드 시 전체 시간 표시
--------------------------- */
audio.addEventListener("loadedmetadata", () => {
  totalTimeEl.textContent = formatTime(audio.duration);
});

/* ---------------------------
   재생 중 진행바 업데이트
--------------------------- */
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;

  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = `${progressPercent}%`;

  currentTimeEl.textContent = formatTime(audio.currentTime);
});

/* ---------------------------
   진행바 클릭 시 이동
--------------------------- */
progressBar.addEventListener("click", (e) => {
  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;

  const newTime = (clickX / width) * audio.duration;
  audio.currentTime = newTime;
});

/* ---------------------------
   음악 끝났을 때 초기화
--------------------------- */
audio.addEventListener("ended", () => {
  isPlaying = false;
  updatePlayButton();
  visualizer.classList.remove("is-playing");
  progressFill.style.width = "0%";
  currentTimeEl.textContent = "0:00";
});

/* ---------------------------
   이전/다음 버튼
   지금은 곡 1개라 5초 이동용으로 처리
--------------------------- */
document.getElementById("prevBtn").addEventListener("click", () => {
  audio.currentTime = Math.max(0, audio.currentTime - 5);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 5);
});
