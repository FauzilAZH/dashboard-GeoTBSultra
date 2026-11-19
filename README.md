# 🗺️ GeoTB-Sultra — Dashboard Spasial Prioritisasi ACF Tuberkulosis

Dashboard interaktif penentuan prioritas **Active Case Finding (ACF)** penyakit Tuberkulosis (TB) di 17 Kabupaten/Kota Provinsi Sulawesi Tenggara, dikembangkan berdasarkan Karya Tulis Ilmiah Nasional (LKTIN) 2026 Tim Peneliti KASUAMI.

---

## 🚀 Cara Menjalankan Secara Lokal (Menggunakan JavaScript / Node.js)

### Opsi 1: Menjalankan Server Node.js Bawaan (Rekomendasi)
Proyek ini telah dilengkapi dengan file `server.js` bawaan (tanpa perlu install library tambahan / zero external dependencies):
```bash
# 1. Buka terminal di folder proyek ini (c:\Semester-5\Kasuami)
# 2. Jalankan perintah berikut:
node server.js
```
Atau:
```bash
npm start
```
Buka browser Anda dan akses: **`http://localhost:3000`**

---

### Opsi 2: Menggunakan Paket `npx serve` (One-Liner)
Jika di komputer Anda sudah terpasang Node.js & npm:
```bash
npx serve .
```

---

## 🌐 Cara Deploy ke Web (Gratis & Online dalam 2 Menit)

### 1. Deploy ke GitHub Pages (Sangat Mudah & Gratis)
1. Buat repositori baru di [GitHub](https://github.com/new), misalnya beri nama `geotb-sultra`.
2. Buka terminal di folder ini, lalu inisialisasi Git:
   ```bash
   git init
   git add .
   git commit -m "Initial commit GeoTB Sultra Dashboard"
   git branch -M main
   git remote add origin https://github.com/USERNAME_ANDA/geotb-sultra.git
   git push -u origin main
   ```
3. Buka repositori Anda di GitHub &rarr; pilih tab **Settings** &rarr; klik menu **Pages** di sebelah kiri.
4. Pada bagian **Branch**, pilih `main` dan folder `/(root)`, lalu klik **Save**.
5. Tunggu sekitar 1 menit. Website dashboard Anda akan langsung online di:
   `https://USERNAME_ANDA.github.io/geotb-sultra/`

---

### 2. Deploy ke Vercel (Menggunakan CLI JavaScript)
1. Install Vercel CLI (atau jalankan langsung via npx):
   ```bash
   npx vercel
   ```
2. Ikuti panduan di layar terminal (tekan `Y` untuk konfirmasi).
3. Dashboard Anda langsung online dengan domain otomatis gratis (misal: `geotb-sultra.vercel.app`).

---

### 3. Deploy ke Netlify
- **Cara Drag & Drop**: Buka [Netlify Drop](https://app.netlify.com/drop), lalu seret dan jatuhkan (*drag-and-drop*) folder `Kasuami` ke jendela browser. Selesai!
- **Cara CLI JavaScript**:
  ```bash
  npx netlify deploy --prod
  ```

---

### 4. Deploy sebagai Web Service Node.js (Render / Railway)
Jika ingin mendeploy `server.js` ke cloud platform seperti [Render](https://render.com) atau [Railway](https://railway.app):
- **Build Command**: Kosongkan atau `npm install`
- **Start Command**: `node server.js` atau `npm start`
- Port otomatis dideteksi dari `process.env.PORT`.

---

## 📊 Fitur Interaktif Dashboard
- **Peta Spasial Vektor Halus**: Poligon resmi 17 Kabupaten/Kota berbasis shapefile QGIS dengan badge angka $I_i$ kontras tinggi.
- **Interaksi Hover & Klik**: Klik wilayah mana saja pada peta atau tabel untuk membuka pop-up profil lengkap dan rekomendasi aksi ACF.
- **Filter Cepat Prioritas**: Memisahkan wilayah Prioritas Tinggi, Sedang, dan Rendah secara instan pada peta dan tabel.
- **Pencarian Real-Time**: Ketik nama kabupaten/kota untuk langsung menemukan dan menyorot wilayahnya.
- **Pengurutan Kolom Tabel**: Klik nama kolom ($B_i$, $A_i$, $I_i$, nama kota) untuk mengurutkan secara dinamis.
- **Zoom & Reset Peta**: Tombol perbesar (+), perkecil (-), dan reset tampilan peta.
- **Ekspor Data CSV & Cetak PDF**: Unduh data tabular lengkap ke format CSV atau cetak langsung ke format dokumen PDF.

---
&copy; 2026 Tim Peneliti LKTI KASUAMI — Universitas Halu Oleo.
