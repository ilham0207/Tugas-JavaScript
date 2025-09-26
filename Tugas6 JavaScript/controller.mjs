// controller.mjs
import users from "./data.mjs";

// Melihat semua data
const index = () => {
  console.log("=== Daftar Data Pengguna ===");
  users.map((user, i) => {
    const no = String(i + 1).padStart(2, " "); // tambahkan spasi agar rata
    console.log(`${no}. Nama: ${user.nama.padEnd(7)} | Umur: ${String(user.umur).padEnd(2)} | Alamat: ${user.alamat}`);
  });
  console.log("============================\n");
};

// Menambah data
const store = (user) => {
  users.push(user); // tambah data baru
  console.log(`Data "${user.nama}" berhasil ditambahkan!\n`);
};

// Menghapus data (hapus data terakhir)
const destroy = () => {
  const deleted = users.pop();
  console.log(`Data "${deleted.nama}" berhasil dihapus!\n`);
};

export { index, store, destroy };
