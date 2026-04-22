export function moodMusicPlayer() {
  const tracks = [
    {
      title: "내 노래 제목",
      artist: "아티스트명",
      src: "내_음악파일.mp3",
    },
  ];
}

// ─── 오디오 세팅 ───────────────────────────────────────────────
// 무료 공개 음원 (Wikimedia / Free Music Archive)
// 자신의 음원 파일로 교체하려면 아래 src를 바꾸세요.
const tracks = [
  {
    title: "사라진 기억 (Remember)",
    artist: "펀치",
    // 무료 샘플 - Bensound "Sunny"
    src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    date: "2022.06.25",
    place: "스타벅스 대구중앙로역점",
    memo: "오늘도 평범한 하루를 보내고 커피 한 잔하며\n하루를 마무리 했다~",
  },
  {
    title: "Acoustic Breeze",
    artist: "Bensound",
    src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    date: "2022.07.03",
    place: "스타벅스 동성로점",
    memo: "비 오는 날 창가에 앉아 여유롭게 🌧",
  },
  {
    title: "Creative Minds",
    artist: "Bensound",
    src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
    date: "2022.07.15",
    place: "카페 봄",
    memo: "새로운 아이디어가 떠오른 날 ✨",
  },
];

let currentIndex = 0;
let isPlaying = false;
let audio = new Audio();
audio.volume = 0.7;
audio.crossOrigin = "anonymous";

// ─── Web Audio API 비주얼라이저 ──────────────────────────────
let audioCtx, analyser, source, dataArray;

function setupAnalyser() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 64;
  source = audioCtx.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioCtx.destination);
  dataArray = new Uint8Array(analyser.frequencyBinCount);
}

// ─── 비주얼라이저 바 생성 ───────────────────────────────────
const vizEl = document.getElementById("visualizer");
const BAR_COUNT = 20;
const bars = [];
for (let i = 0; i < BAR_COUNT; i++) {
  const b = document.createElement("div");
  b.className = "bar";
  vizEl.appendChild(b);
  bars.push(b);
}

function animateBars() {
  if (!isPlaying) {
    bars.forEach((b) => (b.style.height = "4px"));
    return;
  }
  if (analyser) {
    analyser.getByteFrequencyData(dataArray);
    bars.forEach((b, i) => {
      const val = dataArray[Math.floor((i * dataArray.length) / BAR_COUNT)];
      const h = Math.max(4, Math.floor((val / 255) * 26));
      b.style.height = h + "px";
    });
  } else {
    // fallback: random bounce
    bars.forEach((b) => {
      const h = Math.random() * 22 + 4;
      b.style.height = h + "px";
    });
  }
  requestAnimationFrame(animateBars);
}

// ─── UI 업데이트 ───────────────────────────────────────────
function loadTrack(idx) {
  const t = tracks[idx];
  audio.src = t.src;
  document.querySelector(".song-title").textContent = t.title;
  document.querySelector(".artist-name").textContent = t.artist;
  document.querySelector(".location-date").textContent = t.date;
  document.querySelector(".location-name").textContent = t.place;
  document.querySelector(".memo-text").innerHTML = t.memo.replace("\n", "<br>");
  document.getElementById("progressFill").style.width = "0%";
  document.getElementById("currentTime").textContent = "0:00";
  document.getElementById("totalTime").textContent = "0:00";
}

function formatTime(sec) {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// ─── 재생/일시정지 ─────────────────────────────────────────
const playBtn = document.getElementById("playBtn");
const albumArt = document.getElementById("albumArt");

playBtn.addEventListener("click", async () => {
  // iOS/Safari: AudioContext는 사용자 제스처 후 시작
  try {
    setupAnalyser();
  } catch (e) {}

  if (audio.paused) {
    try {
      if (audioCtx && audioCtx.state === "suspended") await audioCtx.resume();
      await audio.play();
      isPlaying = true;
      playBtn.textContent = "⏸";
      albumArt.classList.add("playing");
      animateBars();
    } catch (e) {
      showToast("재생 오류: CORS 또는 네트워크 문제");
      console.error(e);
    }
  } else {
    audio.pause();
    isPlaying = false;
    playBtn.textContent = "▶";
    albumArt.classList.remove("playing");
  }
});

// ─── 이전/다음 ─────────────────────────────────────────────
document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentIndex);
  if (isPlaying) audio.play().catch(() => {});
  showToast(tracks[currentIndex].title);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % tracks.length;
  loadTrack(currentIndex);
  if (isPlaying) audio.play().catch(() => {});
  showToast(tracks[currentIndex].title);
});

// ─── 진행바 업데이트 ───────────────────────────────────────
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("currentTime").textContent = formatTime(
    audio.currentTime,
  );
  document.getElementById("totalTime").textContent = formatTime(audio.duration);
});

audio.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % tracks.length;
  loadTrack(currentIndex);
  audio.play().catch(() => {});
  showToast(tracks[currentIndex].title);
});

// ─── 진행바 클릭으로 탐색 ─────────────────────────────────
document.getElementById("progressBar").addEventListener("click", (e) => {
  if (!audio.duration) return;
  const rect = e.currentTarget.getBoundingClientRect();
  const ratio = (e.clientX - rect.left) / rect.width;
  audio.currentTime = ratio * audio.duration;
});

// ─── 볼륨 ─────────────────────────────────────────────────
document.getElementById("volumeSlider").addEventListener("input", (e) => {
  audio.volume = e.target.value;
});

// ─── Toast 알림 ───────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2000);
}

// 초기 트랙 로드
loadTrack(0);
