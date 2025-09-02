// Target tanggal (03 September 2025 00:00)
// const targetDate = new Date("Sep 3, 2025 00:00:00").getTime();
const targetDate = new Date().getTime() + 5000; // 5 detik dari sekarang

const timerElement = document.getElementById("timer");
const popup = document.getElementById("popup");
const countdown = document.getElementById("countdown");

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(countdownInterval);
    countdown.classList.add("hidden");
    popup.classList.remove("hidden");
    startConfetti();
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// tombol GIF
function openGif() {
  window.open("https://media.giphy.com/media/3o6ZsYm5hGZp1t1E7W/giphy.gif", "_blank");
}

// tombol Open
function openNext() {
  alert("💌 Ini hanya awal dari kejutan kecilku untukmu!");
}

// 🎉 Confetti
function startConfetti() {
  const canvas = document.getElementById("confetti-canvas");
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
