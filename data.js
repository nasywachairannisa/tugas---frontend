// TODO: Katalog menu cafe
// Aturan (lihat soal.md):
//   - minimal 6 item
//   - tiap item WAJIB punya: id (angka, tidak kembar), nama (teks), kategori (teks)
//   - plus SATU properti angka (mis. harga, halaman, rating)
//   - plus SATU properti true/false (mis. tersedia, buka, dipinjam)
//   - minimal 2 kategori berbeda, dan minimal 1 item yang bernilai false

const daftarItem = [ 
  { id: 1, nama: "Americano", kategori: "Coffee", harga: 12000, tersedia: true },
  { id: 2, nama: "Matcha Latte", kategori: "Non-Coffee", harga: 20000, tersedia: true },
  { id: 3, nama: "Aren Latte", kategori: "Coffee", harga: 22000, tersedia: true },
  { id: 4, nama: "Caramel macchiato", kategori: "Coffee", harga: 22000, tersedia: false },
  { id: 5, nama: "Belgian Chocolate", kategori: "Non-Coffee", harga: 25000, tersedia: true },
  { id: 6, nama: "Strawberry Milk", kategori: "Non-Coffee", harga: 24000, tersedia: false },
  // TODO: tambahkan item lain
];
