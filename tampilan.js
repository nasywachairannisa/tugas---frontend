// 1. Ambil wadah kartu
const wadahKartu = document.querySelector("#daftar-kartu");

// 2. Satu item -> teks HTML satu kartu
function buatKartu(item) {
  // label untuk item yang bernilai false
  const label = item.tersedia ? "Tersedia" : "Tidak Tersedia";
  const kelas = item.tersedia ? "kartu-menu" : "kartu-menu habis";

  return `
    <article class="${kelas}">
      <h3>${item.nama}</h3>
      <p>Kategori: ${item.kategori}</p>
      <p>Harga: Rp${item.harga.toLocaleString("id-ID")}</p>
      <p>Status: ${label}</p>
    </article>
  `;
}

// 3. Daftar item -> semua kartu di halaman
function tampilkan(daftar) {
  // kasus tepi: daftar kosong
  if (daftar.length === 0) {
    wadahKartu.innerHTML = "<p>Menu tidak ditemukan.</p>";
    return;
  }
  // .map lalu .join("")
  const semuaKartu = daftar.map((item) => buatKartu(item));
  wadahKartu.innerHTML = semuaKartu.join("");
}

tampilkan(daftarItem);

// 4. Tombol filter: addEventListener + .filter + tampilkan
const tombolFilter = document.querySelectorAll(".tombol-filter");

tombolFilter.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    const kategori = tombol.dataset.kategori;

    if (kategori === "Semua") {
      tampilkan(daftarItem);
    } else {
      const hasil = daftarItem.filter((item) => item.kategori === kategori);
      tampilkan(hasil);
    }
  });
});