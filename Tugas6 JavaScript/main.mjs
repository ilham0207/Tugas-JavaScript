// main.mjs
import { index, store, destroy } from "./controller.mjs";

const main = () => {
  // tampilkan data awal
  index();

  // tambah minimal 2 data baru
  store({ nama: "Data 11", umur: 30, alamat: "Jl. Data 11", email: "data11@mail.com" });
  store({ nama: "Data 12", umur: 31, alamat: "Jl. Data 12", email: "data12@mail.com" });

  // tampilkan data setelah ditambah
  index();

  // hapus data terakhir
  destroy();

  // tampilkan data setelah dihapus
  index();
};

main();
