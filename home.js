// Target tanggal
const targetDate = new Date("Sep 3, 2025 07:00:00").getTime();
// const targetDate = new Date().getTime() + 5000; // demo 5 detik

const timerElement = document.getElementById("timer");
const countdown = document.getElementById("countdown");
const openContainer = document.getElementById("open-container");
const backsong = document.getElementById("backsong");

// Countdown
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(countdownInterval);
    countdown.classList.add("hidden");
    openContainer.classList.remove("hidden"); // munculin tombol open
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Fungsi Open Me
function openSurprise() {
  backsong.volume = 1;
  backsong.play().catch(() => alert("🎶 Klik lagi untuk memutar musik ya!"));
  showPopup("popup-main"); // buka popup utama
  openContainer.classList.add("hidden");
  startConfetti();
}

// 🔉 Helper untuk fade volume backsong
function fadeVolume(target, duration = 500) {
  const step = 50; // ms
  const volumeChange = (target - backsong.volume) / (duration / step);

  const fade = setInterval(() => {
    let newVolume = backsong.volume + volumeChange;
    if ((volumeChange < 0 && newVolume <= target) ||
        (volumeChange > 0 && newVolume >= target)) {
      backsong.volume = target;
      clearInterval(fade);
    } else {
      backsong.volume = newVolume;
    }
  }, step);
}

// 🎥 Popup Video
function openVideoPopup() {
  showPopup("popup-video");
  fadeVolume(0, 0); // kecilin backsong
  const video = document.getElementById("special-video");
  video.muted = false;
  video.currentTime = 0;
  video.play();
}
function closeVideoPopup() {
  showPopup("popup-main");
  fadeVolume(1, 800); // balikin backsong
  const video = document.getElementById("special-video");
  video.pause();
}

// 💌 Popup Collage
function openCollagePopup() {
  showPopup("popup-collage");

  // mulai slideshow
  const slideshow = document.getElementById("slideshow-img");
  collageInterval = setInterval(() => {
    collageIndex = (collageIndex + 1) % collageImages.length;
    slideshow.style.opacity = 0;
    setTimeout(() => {
      slideshow.src = collageImages[collageIndex];
      slideshow.style.opacity = 1;
    }, 500);
  }, 2500); // ganti gambar tiap 2.5 detik
}
function closeCollagePopup() {
  showPopup("popup-main");
  clearInterval(collageInterval); // stop slideshow
}

// 🎉 Confetti
function startConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    w: 5,
    h: 10,
    color: `hsl(${Math.random() * 360},100%,50%)`,
    speed: 2 + Math.random() * 3
  }));

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.y += p.speed;
      if (p.y > canvas.height) p.y = -10;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.w, p.h);
    });
    requestAnimationFrame(update);
  }
  update();
}

// 🔄 Helper untuk transisi antar popup
function showPopup(id) {
  document.querySelectorAll("[id^='popup-']").forEach(el => {
    el.classList.add("hidden");
  });

  const popup = document.getElementById(id);
  if (popup) {
    popup.classList.remove("hidden");
  }
}

// Gambar untuk slideshow (dari assets/img)
const collageImages = [
  "/assets/img/1.jpg",
  "/assets/img/2.jpg",
  "/assets/img/3.jpg",
  "/assets/img/4.jpg",
  "/assets/img/5.jpg",
  "/assets/img/6.jpg"
];

let collageIndex = 0;
let collageInterval;
