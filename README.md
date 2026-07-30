# Website Portofolio — Rafly Dzikrul Hakim

Website portofolio pribadi statis (HTML/CSS/JS murni — tanpa framework, jadi ringan dan mudah di-hosting di mana saja, termasuk Vercel).

## 📁 Struktur File

```
portfolio-site/
├── index.html          → struktur halaman (jarang perlu diedit)
├── styles.css           → semua tampilan/desain
├── app.js                → logika render konten (jarang perlu diedit)
├── data.js               ⭐ EDIT FILE INI untuk update konten
├── vercel.json
└── assets/
    ├── profile-photo.svg     → ganti dengan foto asli kamu
    └── portfolio/
        ├── placeholder-1.svg → ganti dengan gambar karya kamu
        ├── placeholder-2.svg
        └── placeholder-3.svg
```

## ✏️ Cara Update Konten (Tanpa Coding)

Hampir semua perubahan konten cukup dilakukan di file **`data.js`**. Buka file itu dengan text editor apa saja (Notepad, VS Code, dll), lalu:

- **Ganti foto profil**: taruh file foto (jpg/png) di folder `assets/`, lalu ubah baris `photo:` di `data.js` menjadi nama file fotomu, misal `photo: "assets/foto-saya.jpg"`.
- **Tambah/ubah pengalaman kerja**: edit array `experience`, copy salah satu blok `{ role, company, period, points }` untuk menambah baris baru.
- **Tambah karya portofolio**: taruh gambar di `assets/portfolio/`, lalu tambahkan blok baru di array `portfolio` (title, description, image, tags, link).
- **Update sertifikasi, skill, pendidikan, kontak**: semua ada di bagian masing-masing dalam `data.js`, tinggal ubah teksnya.
- **Unduh CV**: taruh file CV (PDF) di folder `assets/`, lalu isi nama filenya di `cvFile`.

Setelah edit, simpan file, lalu **deploy ulang** (lihat langkah di bawah) — perubahan akan otomatis tampil di website.

## 🚀 Cara Publish ke Vercel

Ada dua cara. **Cara 1 direkomendasikan** karena setelah setup awal, setiap kali kamu update `data.js` dan upload ulang, website otomatis ter-update — cocok dengan kebutuhanmu untuk terus diperbarui.

### Cara 1: Lewat GitHub (Direkomendasikan — auto-update selamanya)

1. **Buat akun GitHub** (jika belum punya) di [github.com](https://github.com).
2. Buat repository baru, contoh nama: `portofolio-rafly`.
3. Upload semua file di folder `portfolio-site` ini ke repository tersebut:
   - Bisa lewat browser: klik "Add file" → "Upload files" → drag semua file & folder.
   - Atau lewat Git (jika familiar): 
     ```
     git init
     git add .
     git commit -m "Website portofolio awal"
     git branch -M main
     git remote add origin https://github.com/USERNAME/portofolio-rafly.git
     git push -u origin main
     ```
4. Buat akun di [vercel.com](https://vercel.com), pilih **Sign up with GitHub** (supaya langsung terhubung).
5. Di dashboard Vercel, klik **"Add New..." → "Project"**.
6. Pilih repository `portofolio-rafly` yang tadi dibuat, klik **Import**.
7. Karena ini website statis (bukan framework khusus), biarkan pengaturan default (Framework Preset: **Other**), lalu klik **Deploy**.
8. Tunggu 30-60 detik. Vercel akan memberi kamu link seperti `https://portofolio-rafly.vercel.app` — itulah website kamu yang sudah online.

**Untuk update selanjutnya:** edit `data.js` (atau ganti foto), upload perubahan itu ke repository GitHub yang sama (via "Upload files" lagi di browser, atau `git push` jika pakai Git) — Vercel otomatis mendeteksi perubahan dan mem-publish ulang website dalam hitungan detik, tanpa perlu setting apa pun lagi.

### Cara 2: Drag & Drop Langsung (paling cepat, tapi update manual tiap kali)

1. Buat akun di [vercel.com](https://vercel.com).
2. Di dashboard, klik **"Add New..." → "Project"**.
3. Pilih tab **"Deploy without Git"** atau gunakan [Vercel CLI](https://vercel.com/docs/cli):
   ```
   npm install -g vercel
   cd portfolio-site
   vercel
   ```
   Ikuti instruksi di terminal (login, pilih nama project, dsb), lalu jalankan `vercel --prod` untuk publish ke domain final.
4. Setiap kali ada update konten, ulangi perintah `vercel --prod` dari folder ini untuk mem-publish ulang.

> 💡 **Saran:** pakai **Cara 1 (GitHub)** kalau kamu ingin website ini terus kamu perbarui dalam jangka panjang — prosesnya jadi tinggal edit file dan upload, tanpa install apa pun di komputer.

## 🎨 Tentang Desain

Tema visual mengangkut konsep "buku ledger/passbook resmi" — garis-garis halus seperti kertas ledger, entri pengalaman kerja disusun seperti catatan buku besar, dan sertifikasi ditampilkan sebagai "stempel resmi". Ini dipilih untuk mencerminkan latar belakangmu di bidang administrasi, dokumentasi, dan layanan formal (perbankan/customer service), sekaligus terasa hangat dan personal lewat foto dan tipografi.

Palet warna: navy tua (`#16324F`), hijau ledger pucat (`#EEF3EC`), aksen emas/perunggu (`#B98B33`), dan teal (`#2F6F62`).

## 🛠️ Menjalankan di Komputer Sendiri (opsional, untuk cek sebelum publish)

Tidak wajib — kamu bisa langsung buka `index.html` di browser. Tapi kalau ingin lebih akurat (menghindari isu keamanan browser lokal), jalankan server sederhana:

```
cd portfolio-site
python3 -m http.server 8080
```

Lalu buka `http://localhost:8080` di browser.
