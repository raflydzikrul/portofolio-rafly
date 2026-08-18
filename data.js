/**
 * ============================================================
 *  DATA PROFIL — edit file ini kapan pun kamu mau update konten
 * ============================================================
 *  Semua teks yang tampil di website diambil dari objek PROFILE
 *  di bawah ini. Kamu TIDAK perlu menyentuh file HTML/CSS/JS lain
 *  untuk mengubah data. Cukup edit di sini, simpan, lalu deploy
 *  ulang (lihat README.md untuk cara publish ke Vercel).
 * ============================================================
 */

const PROFILE = {
  name: "Rafly Dzikrul Hakim",
  initials: "RDH",

  roles: [
    "Service Advisor",
    "Customer Service Professional",
    "Staff Administrasi & Dokumentasi",
    "Hafidz Qur'an 10 Juz",
  ],

  location: "Bogor, Jawa Barat",
  email: "raflydzikrul99@gmail.com",
  phone: "085892736804",
  whatsapp: "6285892736804",

  photo: "assets/profile.jpeg", // ganti ke assets/profile-photo.jpg setelah upload foto asli

  cvFile: "assets/CV Rafly Dzikrul Hakim.pdf",

  about:
    "Lulusan S1 Sistem Informasi dengan pengalaman lebih dari 3 tahun di bidang administrasi, customer service, dan pembinaan/pendampingan. Terbiasa melayani pelanggan, mengelola database, menyusun dokumen resmi, membuat konten media sosial, dan mendesain materi visual. Kini fokus mengembangkan karier di bidang layanan perbankan sebagai Service Advisor — dengan modal komunikasi yang tenang, kedisiplinan tinggi, dan kebiasaan menjaga amanah, termasuk sebagai penghafal Al-Qur'an 10 juz.",

  experience: [
    {
      role: "Musyrif / Pembina Asrama Ikhwan",
      company: "Insan Cendekia Magnet School Caringin",
      period: "2024 — Sekarang",
      points: [
        "Membina, mengawasi, dan mendampingi santri dalam kegiatan harian di asrama",
        "Membimbing dan mengontrol progres hafalan Al-Qur'an santri",
        "Menegakkan kedisiplinan, keamanan, dan kenyamanan lingkungan asrama",
        "Berkoordinasi dengan pihak sekolah dan wali santri terkait perkembangan siswa",
      ],
    },
    {
      role: "Staff Administrasi & Customer Service",
      company: "Rumah Tahfidz Center — PPPA Daarul Qur'an",
      period: "2021 — 2023",
      points: [
        "Melayani calon santri dan wali santri sebagai Customer Service",
        "Mengelola dan memperbarui database santri dan operasional",
        "Menyusun surat-menyurat dan dokumen administratif lembaga",
        "Membuat konten media sosial dan mendesain poster promosi",
        "Melakukan monitoring dan evaluasi (monev) rutin kegiatan",
      ],
    },
  ],

  education: [
    {
      degree: "S1 Sistem Informasi",
      school: "STMIK Antar Bangsa",
      period: "Lulus 2024",
    },
    {
      degree: "D1 Sistem Informasi",
      school: "Pesantren TIK, Depok",
      period: "Lulus 2019",
    },
  ],

  skills: [
    "Customer Service",
    "Administrasi & Surat Menyurat",
    "Manajemen Database",
    "Microsoft Office",
    "Content Creation",
    "Desain Grafis (Junior)",
    "Web Development (Junior)",
    "Mentoring & Pembinaan",
    "AI Apps Fundamental",
  ],

  certifications: [
    {
      title: "Junior Office Operator",
      issuer: "LSP Informatika",
      year: "Tahun 2024",
    },
    {
      title: "Kompetensi Bidang Pendidikan Al-Qur'an",
      issuer: "SKK",
      year: "Tahun 2024",
    },
    {
      title: "Pelatihan dan Sertifikasi MikroTIK",
      issuer: "Hendevance Training Partner (HTP)",
      year: "Tahun 2025",
    },
    {
      title: "Sertifikat AI Powered Apps Fundamental",
      issuer: "WPU Course",
      year: "Tahun 2026",
    },
  ],

  languages: [
    { name: "Bahasa Indonesia", level: "Native", value: 100 },
    { name: "Bahasa Arab", level: "Menengah", value: 55 },
    { name: "Bahasa Inggris", level: "Menengah", value: 55 },
  ],

  // ============================================================
  // PORTOFOLIO — tambahkan karya kamu di sini (desain, dokumen,
  // konten sosmed, project web, dll). Taruh gambarnya di folder
  // assets/portfolio/ lalu tulis nama filenya di "image".
  // Tampilan portofolio otomatis jadi SLIDER yang bisa digeser
  // kanan-kiri di layar kecil, atau kalau jumlah item melebihi
  // lebar layar. Tidak perlu edit HTML/CSS untuk menambah item.
  // ============================================================
  portfolio: [
    {
      title: "Sistem Setoran Hafalan Siswa",
      description:
        "Mencatat seluruh data setoran harian siswa dan Absensi Guru Pembimbing",
      image: "assets/portfolio/setor-hafalan.png",
      tags: ["Setoran Hafalan"],
      link: "https://setoran-hafalan-icms.vercel.app/",
    },
    {
      title: "Sistem Absensi Kegiatan dan Kedisiplinan Siswa",
      description:
        "Sistem Absensi Kegiatan siswa dan catatan pelanggaran kedisiplinan siswa",
      image: "assets/portfolio/kedisiplinan.png",
      tags: ["Absensi", "Database", "Kedispilinan"],
      link: "https://asrama-icms.vercel.app/",
    },
    {
      title: "Sistem Absensi Karyawan",
      description:
        "Sistem Absensi Karyawan dengan menggunakan fitur foto dan melacak lokasi absen barada",
      image: "assets/portfolio/sistem-absensi.png",
      tags: ["Absensi", "Database"],
      link: "",
    },
    {
      title: "Aplikasi Tanya Jawab Ustadz",
      description:
        "Memfasilitasi dan memudahkan umat dalam bertanya dan berkonsultasi dengan Asatidz yang terpercaya",
      image: "assets/portfolio/contoh.svg",
      tags: ["Q&A", "Muslim Update"],
      link: "",
    },
  ],

  social: {
    linkedin: "",
    instagram: "https://www.instagram.com/raflyydzi/",
  },
};
