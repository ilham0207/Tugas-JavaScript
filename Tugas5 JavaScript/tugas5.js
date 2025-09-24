// Data Produk (minimal 5)
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Headset", harga: 500000 },
  { id: 5, nama: "Keyboard", harga: 350000 }
];

// Fungsi reset ID agar tetap urut
function resetID() {
  produkList = produkList.map((p, index) => ({
    id: index + 1,
    nama: p.nama,
    harga: p.harga
  }));
}

// Fungsi tambah produk (pakai Spread Operator)
function tambahProduk(nama, harga) {
  const produkBaru = { id: produkList.length + 1, nama, harga };
  produkList = [...produkList, produkBaru];
}

// Fungsi hapus produk (pakai Rest Parameter)
function hapusProduk(...id) {
  produkList = produkList.filter(p => !id.includes(p.id));
  resetID(); // rapikan ulang ID setelah dihapus
}

// Fungsi tampilkan produk (pakai Destructuring)
function tampilkanProduk() {
  console.clear();
  if(produkList.length === 0){
    console.log("Tidak ada produk tersedia");
    return;
  }
  produkList.forEach(({id, nama, harga}) => {
    console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp ${harga.toLocaleString("id-ID")}`);
  });
}

// --- Contoh Penggunaan ---
// tampil awal
tampilkanProduk();

// tambah produk
tambahProduk("Monitor", 2500000);
tampilkanProduk();

// hapus produk dengan id 2 dan 4
hapusProduk(2, 4);
tampilkanProduk();
