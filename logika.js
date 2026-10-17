// Tugas 1A — Data & Logika
// ATURAN: untuk TIAP fungsi, tulis LANGKAH 1–3 sebagai komentar DULU, baru kode.
// Pakai for...of + if. JANGAN pakai .map / .filter / .find / .reduce dulu (lihat soal.md).

console.table(daftarItem);

// ──────── ─────────────────────────────────────
// FUNGSI 1 — hitungTersedia(daftar)
// ─────────────────────────────────────────────
// Berapa banyak item yang properti true/false-nya bernilai true?
// LANGKAH 1 — PAHAMI
// Masukan: Daftar item 
// Keluaran: Angka yang menunjukan item yang "tersedia"

// LANGKAH 2 — CONTOH 
// Kasus normal = ada 4 menu yang tersedia
// Kasus tepi = ada daftar kosong []

// LANGKAH 3 — LANGKAH (pseudocode): 
// Mulai
// Jumlah = 0
// Untuk setiap item dalam daftarItem:  
//      jika item.tersedia bernilai true:
//          jumlah = jumlah + 1
// kembalikan jumlah 
//Selesai

// LANGKAH 4 — TERJEMAHKAN

function hitungTersedia(daftarItem){
    let jumlah = 0;

    for (let item of daftarItem){
        if (item.tersedia === true) {
            jumlah = jumlah + 1;
        }
    }
return jumlah;

}
// ─────────────────────────────────────────────
// FUNGSI 2 — cariBerdasarkanId(daftar, id)
// Kembalikan item yang id-nya cocok. Kalau tidak ada, kembalikan null.
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI
// Masukan : daftar item 
// Keluaran: memberikan id yang diminta

// LANGKAH 2 — CONTOH
// kasus normal : ada 6 id yang berbeda, apabila tidak ada akan menghasilkan null
// kasus tepi: id tidak ditemukan

// LANGKAH 3 — LANGKAH (pseudocode)
// Mulai
//     untuk setiap item dalam daftarItem
//          jika item.id sama dengan id
//              kembalikan item
//      Kembalikan null
//Selesai

// LANGKAH 4 — TERJEMAHKAN

function cariId(daftarItem, id){    
    for (let item of daftarItem){
        if (item.id === id){
            return item;
        }
    }
    return null;
}

// ─────────────────────────────────────────────
// FUNGSI 3 — saringKategori(daftar, kategori)
// Kembalikan ARRAY BARU berisi item dengan kategori itu. Kalau tidak ada, array kosong [].
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI
// Masukan : daftar item 
// Keluaran: memberikan kategori yang diminta

// LANGKAH 2 — CONTOH
// kasus normal : ada 2 kategori yang berbeda, yaitu coffee dan non-coffee
// kasus tepi: mengembalikan array kosong apabila bukan coffee atau non-coffee

// LANGKAH 3 — LANGKAH (pseudocode)
// Mulai
//     buat array hasil yang kosong
//     untuk setiap item dalam daftarItem
//         jika item.kategori sama dengan kategori
//             masukkan item ke dalam hasil
//     kembalikan hasil
// Selesai

// LANGKAH 4 — TERJEMAHKAN
function saringKategori(daftarItem, kategori){
    let hasil = [   ]

    for (let item of daftarItem){
        if (item.kategori === kategori){
            hasil.push(item)
        }
    }
    return hasil;
}

// ─────────────────────────────────────────────
// FUNGSI 4 — rataRataTersedia(daftar)
// Rata-rata properti angka, HANYA dari item yang bernilai true.
// Kalau tidak ada satu pun yang true, kembalikan null.
// ─────────────────────────────────────────────
// LANGKAH 1 — PAHAMI
// Masukan : daftar item 
// Keluaran: angka rata-rata

// LANGKAH 2 — CONTOH
// kasus normal : memiliki nilai / tersedia
// kasus tepi: tidak ada satupun yang bernilai true maka null

// LANGKAH 3 — LANGKAH (pseudocode)
// Mulai
//     total = 0
//     jumlah = 0
//     untuk setiap item didalam daftarItem
//          jika item didalm tersedia bernilai true
//              total = total + harga
//                jumlah = jumlah + 1
//      jika jumlah sama dengan 0
//          kembalikan null
//  kembalikan total dibagi jumlah
//Selesai

// LANGKAH 4 — TERJEMAHKAN
function rataRataTersedia(daftarItem){
    let total = 0
    let jumlah = 0

    for (let item of daftarItem){
        if (item.tersedia === true){
            total = total + item.harga
            jumlah = jumlah + 1
        }
    }
    if (jumlah === 0) {
        return null;
    }
    return total / jumlah;
}
// ─────────────────────────────────────────────
// UJI — minimal 2 panggilan per fungsi: satu kasus normal, satu kasus tepi
// ─────────────────────────────────────────────
// Fungsi 1
console.log("F1 normal:", hitungTersedia(daftarItem));
console.log("F1 tepi:", hitungTersedia([]));

// Fungsi 2
console.log("F2 normal:", cariId(daftarItem, 4));
console.log("F2 tepi:", cariId(daftarItem, 99));

// Fungsi 3
console.log("F3 normal:", saringKategori(daftarItem, "Coffee"));
console.log("F3 tepi:", saringKategori(daftarItem, "Dessert"));

// Fungsi 4
console.log("F4 normal:", rataRataTersedia(daftarItem));
console.log("F4 tepi:", rataRataTersedia([
    { id: 7, nama: "Teh", kategori: "Tea", harga: 10000, tersedia: false }
]));