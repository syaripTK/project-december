# 📘 Mini App Data Mahasiswa

Mini App Data Mahasiswa adalah aplikasi web sederhana berbasis HTML, CSS (Bootstrap), dan JavaScript (Vanilla JS) yang digunakan untuk mengelola data mahasiswa. Aplikasi ini mengimplementasikan fitur CRUD (Create, Read, Update, Delete) serta dilengkapi dengan fitur Login & Register.

Aplikasi ini cocok untuk:

Latihan JavaScript DOM

Latihan CRUD tanpa backend

Project pembelajaran frontend dasar–menengah

✨ Fitur Utama
🔐 Autentikasi

Register

Membuat akun user baru

Validasi input sederhana

Login

Autentikasi user

Session berbasis localStorage

Logout

🎓 Manajemen Data Mahasiswa (CRUD)

Create → Tambah data mahasiswa

Read → Tampilkan data mahasiswa dalam tabel

Update → Edit data mahasiswa

Delete → Hapus data mahasiswa

🔔 Notifikasi & Interaksi

SweetAlert2

Konfirmasi hapus data

Alert error / warning penting

Notyf

Notifikasi sukses

Notifikasi error ringan (toast)

🛠️ Teknologi yang Digunakan
Teknologi	Keterangan
HTML5	Struktur halaman
CSS3	Styling dasar
Bootstrap 5	UI & layout responsif
JavaScript (Vanilla)	Logika aplikasi
SweetAlert2	Modal alert & konfirmasi
Notyf	Toast notification
localStorage	Penyimpanan data sementara
📂 Struktur Folder (Contoh)

project-december/
├── index.html          # Halaman Login
├── register.html       # Halaman Register
├── dashboard.html      # Halaman utama
├── mahasiswa.html      # CRUD Data Mahasiswa
├── css/
│   └── style.css
├── js/
│   ├── main.js         # Entry point
│   ├── auth.js         # Login & Register
│   ├── mahasiswa.js   # CRUD Mahasiswa
│   └── storage.js     # Helper localStorage
└── README.md

🔑 Alur Login & Register

User melakukan register

Data user disimpan ke localStorage

User melakukan login

Jika berhasil → redirect ke dashboard

Jika gagal → tampil notifikasi error

🧩 Alur CRUD Mahasiswa

User mengisi form mahasiswa

Data disimpan ke localStorage

Data dirender ke tabel

User bisa:

Edit data

Hapus data (dengan konfirmasi SweetAlert2)

🔔 Contoh Implementasi Library

SweetAlert2 (Konfirmasi Hapus)

Swal.fire({
  title: 'Hapus data?',
  text: 'Data tidak bisa dikembalikan',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Ya, hapus'
}).then(result => {
  if (result.isConfirmed) {
    deleteMahasiswa(id)
    notyf.success('Data berhasil dihapus')
  }
})
Notyf (Notifikasi)
const notyf = new Notyf({
  duration: 2500,
  position: { x: 'right', y: 'top' }
})


notyf.success('Data berhasil disimpan')
notyf.error('Terjadi kesalahan')

⚠️ Catatan Penting

Aplikasi ini tidak menggunakan backend

Data akan hilang jika localStorage dihapus

Tidak direkomendasikan untuk produksi

🚀 Cara Menjalankan Project

Clone repository:

git clone https://github.com/username/project-december.git

Masuk ke folder project:

cd project-december

Jalankan menggunakan Live Server / browser

📌 Pengembangan Selanjutnya (Opsional)

Integrasi API backend (Node.js / Laravel)

Autentikasi JWT

Pagination tabel

Search & filter data mahasiswa

👨‍💻 Author

Dibuat sebagai project pembelajaran frontend JavaScript.

"Belajar CRUD dan DOM adalah fondasi penting sebelum masuk framework modern." 💪
