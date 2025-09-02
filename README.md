# 🎁 Kado Untukmu

Proyek web sederhana untuk membuat **kejutan ulang tahun digital** 🎉.  
Terdiri dari hitung mundur, popup ucapan, confetti, dan backsound musik.  

---

## 📂 Struktur Folder
📦kado-untukmu
 ┣ 📂.git
 ┣ 📂assets
 ┃ ┣ 📂audio
 ┃ ┃ ┗ 📜hbd.mp3
 ┃ ┣ 📂img
 ┃ ┃ ┗ 📜birthday-cake.png
 ┃ ┗ 📂video
 ┣ 📜home.html
 ┣ 📜home.js
 ┣ 📜README.md
 ┗ 📜style.css


---

## 🚀 Cara Menjalankan
1. Download semua file di dalam folder `kado-untukmu`.
2. Pastikan file **musik** (`hbd.mp3`) sudah ada di folder yang sama.
3. Buka file `home.html` di browser (Chrome, Edge, Firefox).
4. Tunggu **countdown selesai** → popup ucapan muncul 🎂.
5. Klik tombol **"✨ Open Me"** untuk:  
   - Menyalakan musik 🎶  
   - Menampilkan pesan kejutan 💌  

---

## ✨ Fitur
- ⏳ **Countdown Timer** → hitung mundur ke tanggal ulang tahun.  
- 🎉 **Popup Ucapan** → muncul otomatis saat waktu habis.  
- 🎶 **Backsound Musik** → diputar setelah tombol "Open Me" diklik.  
- 🎊 **Confetti Animation** → meriah saat popup muncul.  
- 💖 **Teks & Button Customizable** → mudah diganti sesuai kebutuhan.  

---

## ⚙️ Konfigurasi
- **Atur target tanggal ulang tahun** di `home.js`:
  ```javascript
  const targetDate = new Date("Sep 3, 2025 00:00:00").getTime();
