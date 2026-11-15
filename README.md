# KASIRKITA
**Project Mata Kuliah Software Development**

## Nama Anggota

1. [Firman Rahmat Nur] - [QA, DevOps & Integration Specialist]
2. [Nasreyhan Tri Ahimza] - [Backend & Database Engineer]
3. [Winda Alfi Yanuarti] - [Frontend & UI/UX Specialist]

## Deskripsi Singkat Proyek

KasirKita merupakan aplikasi berbasis web yang dikembangkan untuk membantu pengelolaan transaksi penjualan dan persediaan barang pada toko pakan.

Aplikasi ini dirancang untuk mempermudah proses kasir, pengelolaan produk, pengaturan harga, pengelolaan stok gudang dan area kasir, serta pencatatan transaksi secara terkomputerisasi.

## Fitur Utama

- Login dan Register
- Hak akses berdasarkan role (Administrator dan Customer)
- Pengelolaan data produk
- Pengelolaan kategori produk
- Pengelolaan supplier
- Pengelolaan pelanggan
- Transaksi penjualan
- Transaksi pembelian
- Manajemen stok gudang dan area kasir
- Transfer stok antar lokasi
- Riwayat perubahan harga produk
- Pencarian dan filter produk
- Dashboard dan laporan
- Upload foto produk (rencana pengembangan)

## Teknologi yang Digunakan

### Frontend
- React.js
- Vite
- CSS
- Lucide React
- Recharts

### Backend
- Node.js
- Express.js
- MySQL2
- bcrypt

### Database
- MySQL 8
- Laragon

### Tools
- Visual Studio Code
- Git dan GitHub
- Figma

## Desain UI/UX

Desain antarmuka KasirKita dibuat menggunakan Figma.

Link Figma:
https://www.figma.com/design/jpS3ly0BZqxTw1IMUfT25y/softdes?node-id=0-1&t=28mAeFxe3T1M8SbT-1

## Struktur Project

```text
SOFTDEV_kelompok_9/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env.example
│
├── .gitignore
└── README.md
```

## Persyaratan Sistem

- Node.js
- npm
- MySQL 8
- Laragon
- Visual Studio Code

## Cara Menjalankan Project

### 1. Menjalankan Database

1. Buka Laragon.
2. Jalankan MySQL.
3. Buat database dengan nama `kasirkita`.
4. Siapkan struktur tabel database.

### 2. Menjalankan Backend

Masuk ke folder backend:

```bash
cd backend
npm install
```

Buat file `.env` berdasarkan `.env.example`, kemudian sesuaikan konfigurasi database.

Jalankan backend:

```bash
npm run dev
```

Backend berjalan pada:

`http://localhost:3000`

### 3. Menjalankan Frontend

Buka terminal baru dan masuk ke folder frontend:

```bash
cd frontend
npm install
npm run dev
```

Buka alamat yang ditampilkan oleh Vite, biasanya:

`http://localhost:5173`

## Repository

GitHub:
https://github.com/DreamFirman/SOFTDEV_kelompok_9

## Status Pengembangan

KasirKita masih dalam tahap pengembangan. Frontend awal, backend, dan koneksi database telah disiapkan. Integrasi fitur aplikasi akan dikembangkan secara bertahap.