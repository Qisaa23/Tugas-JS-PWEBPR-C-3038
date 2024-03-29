const konten = document.getElementById("konten")
const judul_konten = document.getElementById("judul-konten");
const teks_desc = document.getElementById("teks-desc");
const kotak = document.getElementById("kotak")
const gambar = document.getElementById("gambar");
const tombol_tombol = document.getElementById("tombol-tombol");
const tombol_iya = document.getElementById("tombol-iya");
const tombol_tidak = document.getElementById("tombol-tidak");

tombol_iya.addEventListener('click', ()=> {
  judul_konten.innerHTML = "Anda Berbohong!";
  teks_desc.innerHTML = "Anda adalah seorang Teknisi";
  kotak.style.backgroundColor = "#E12E2E";
  gambar.src = "Assets/Teknisi.png";
  tombol_tombol.style.display = 'none';
  konten.classList.add("animasi-fadeIn");
});

tombol_tidak.addEventListener('click', ()=> {
  judul_konten.innerHTML = "Anda Benar!";
  teks_desc.innerHTML = "Anda adalah seorang Mahasiswa";
  kotak.style.backgroundColor = "#6FD240"
  gambar.src = "Assets/Mahasiswa.png";
  tombol_tombol.style.display = 'none';
  konten.classList.add("animasi-fadeIn");
});
