# Senzu Reflexology

Landing page informatif untuk bisnis Senzu Reflexology. Proyek ini terpisah dari website Senzu Home.

## Teknologi
- React + TypeScript
- Vite
- Tailwind CSS v4
- ESLint
- Vitest + Testing Library (pengujian dasar)

## Persyaratan
- Node.js versi LTS (disarankan Node.js 20 atau lebih baru)
- npm
- Git

## Menjalankan proyek secara lokal

```bash
npm install
cp .env.example .env
npm run dev
```

Vite akan menampilkan alamat lokal di terminal, biasanya `http://localhost:5173`.

## Perintah tersedia

```bash
npm run dev       # server pengembangan
npm run build     # pemeriksaan TypeScript dan build produksi
npm run preview   # pratinjau build produksi
npm run lint      # pemeriksaan ESLint
npm run test      # pengujian
```

## Konfigurasi bisnis

Salin `.env.example` menjadi `.env` dan isi data yang sudah dikonfirmasi oleh pemilik bisnis:

- `VITE_BUSINESS_NAME`: nama bisnis.
- `VITE_WHATSAPP_NUMBER`: nomor WhatsApp format internasional tanpa tanda `+`, spasi, atau tanda hubung.
- `VITE_BUSINESS_ADDRESS`: alamat lengkap.
- `VITE_BUSINESS_HOURS`: jam operasional.
- `VITE_GOOGLE_MAPS_URL`: tautan Google Maps.

Jangan masukkan password, token privat, atau rahasia apa pun ke variabel `VITE_*`; nilainya akan terekspos ke browser. Data yang belum dikonfirmasi harus tetap menjadi placeholder dan tidak boleh dipublikasikan sebagai fakta.

## Struktur direktori

```text
senzu-reflexology/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── SectionHeading.tsx
│   ├── sections/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── HeroSection.tsx
│   │   └── ServicesSection.tsx
│   ├── App.tsx
│   ├── config.ts
│   ├── index.css
│   ├── main.tsx
│   └── test/
│       └── setup.ts
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
└── opencode/
    └── IMPLEMENTATION_PROMPT.md
```

## Alur Git dan GitHub

Buat repository kosong bernama `senzu-reflexology` di akun GitHub. Jangan centang opsi untuk membuat README, `.gitignore`, atau lisensi di GitHub karena berkas dasar sudah ada di proyek lokal.

```bash
git init
git add .
git commit -m "chore: initialize Senzu Reflexology landing page"
git branch -M main
git remote add origin https://github.com/USERNAME/senzu-reflexology.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub Anda. Jika repository sudah memiliki commit awal, tarik dan rekonsiliasikan riwayat terlebih dahulu; jangan langsung memaksa push.

## Deployment

### Vercel
- Import repository `senzu-reflexology`.
- Framework preset: Vite.
- Build command: `npm run build`.
- Output directory: `dist`.
- Tambahkan variabel lingkungan bisnis dari `.env.example` melalui pengaturan proyek.

### Cloudflare Pages
- Hubungkan repository.
- Build command: `npm run build`.
- Build output directory: `dist`.
- Tambahkan variabel lingkungan yang diperlukan.

## Status data konten

Konten awal sengaja menggunakan teks umum dan placeholder untuk detail yang belum diverifikasi. Sebelum publikasi, konfirmasi nama/identitas brand, daftar treatment, harga, durasi, foto asli, alamat, jam buka, tautan peta, dan nomor WhatsApp. Jangan menambahkan klaim medis atau janji hasil terapi tanpa dasar yang dapat dipertanggungjawabkan.
