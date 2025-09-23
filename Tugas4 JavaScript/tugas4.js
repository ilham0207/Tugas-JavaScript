// ===============================
// Class Kendaraan (Super Class)
// ===============================
class Kendaraan {
  constructor(nama, jenis) {
    this.nama = nama;
    this.jenis = jenis;
  }

  info() {
    return `${this.jenis} - ${this.nama}`;
  }
}

// Subclass Kendaraan
class Mobil extends Kendaraan {
  constructor(nama, kapasitas) {
    super(nama, "Mobil");
    this.kapasitas = kapasitas;
  }

  info() {
    return `${super.info()} (Kapasitas: ${this.kapasitas} orang)`;
  }
}

class Motor extends Kendaraan {
  constructor(nama, cc) {
    super(nama, "Motor");
    this.cc = cc;
  }

  info() {
    return `${super.info()} (Mesin: ${this.cc}cc)`;
  }
}

class Bus extends Kendaraan {
  constructor(nama, kapasitas) {
    super(nama, "Bus");
    this.kapasitas = kapasitas;
  }

  info() {
    return `${super.info()} (Kapasitas: ${this.kapasitas} penumpang)`;
  }
}

// ===============================
// Class Pelanggan
// ===============================
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null;
  }

  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    console.log(
      `${this.nama} menyewa ${kendaraan.info()} (Telepon: ${this.nomorTelepon})`
    );
  }
}

// ===============================
// Class Transaksi
// ===============================
class Transaksi {
  constructor(pelanggan, kendaraan, tanggal) {
    this.pelanggan = pelanggan;
    this.kendaraan = kendaraan;
    this.tanggal = tanggal;
  }

  info() {
    return `${this.tanggal} | ${this.pelanggan.nama} (${this.pelanggan.nomorTelepon}) menyewa ${this.kendaraan.info()}`;
  }
}

// ===============================
// Class Manajemen Transportasi
// ===============================
class ManajemenTransportasi {
  constructor() {
    this.daftarPelanggan = [];
    this.daftarTransaksi = [];
  }

  tambahPelanggan(pelanggan) {
    if (pelanggan.kendaraanDisewa) {
      this.daftarPelanggan.push(pelanggan);
      // Catat transaksi otomatis
      this.catatTransaksi(pelanggan, pelanggan.kendaraanDisewa);
    } else {
      console.log(
        `Pelanggan ${pelanggan.nama} belum memilih kendaraan untuk disewa.`
      );
    }
  }

  catatTransaksi(pelanggan, kendaraan) {
    const tanggal = new Date().toLocaleString();
    const transaksi = new Transaksi(pelanggan, kendaraan, tanggal);
    this.daftarTransaksi.push(transaksi);
  }

  tampilkanDaftarPelanggan() {
    console.log("\n=== Daftar Pelanggan yang Menyewa Kendaraan ===");
    if (this.daftarPelanggan.length === 0) {
      console.log("Belum ada pelanggan yang menyewa kendaraan.");
    } else {
      this.daftarPelanggan.forEach((p, i) => {
        console.log(
          `${i + 1}. Nama: ${p.nama}, Telepon: ${
            p.nomorTelepon
          }, Kendaraan: ${p.kendaraanDisewa.info()}`
        );
      });
    }
  }

  tampilkanDaftarTransaksi() {
    console.log("\n=== Daftar Transaksi Penyewaan ===");
    if (this.daftarTransaksi.length === 0) {
      console.log("Belum ada transaksi tercatat.");
    } else {
      this.daftarTransaksi.forEach((t, i) => {
        console.log(`${i + 1}. ${t.info()}`);
      });
    }
  }
}

// ===============================
// Contoh Penggunaan Sistem
// ===============================
const sistem = new ManajemenTransportasi();

// Membuat beberapa kendaraan
const mobil1 = new Mobil("Toyota Avanza", 7);
const motor1 = new Motor("Honda Vario", 150);
const bus1 = new Bus("Mercedes-Benz", 40);

// Membuat pelanggan
const pelanggan1 = new Pelanggan("Andi", "08123456789");
const pelanggan2 = new Pelanggan("Budi", "08234567890");
const pelanggan3 = new Pelanggan("Citra", "08345678901");

// Pelanggan menyewa kendaraan
pelanggan1.sewaKendaraan(mobil1);
pelanggan2.sewaKendaraan(motor1);
pelanggan3.sewaKendaraan(bus1);

// Mencatat transaksi
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);

// Menampilkan daftar pelanggan
sistem.tampilkanDaftarPelanggan();

// Menampilkan daftar transaksi
sistem.tampilkanDaftarTransaksi();
