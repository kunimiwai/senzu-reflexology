# OpenCode Implementation Prompt — Senzu Reflexology

Anda bertindak sebagai senior frontend engineer dan reviewer kualitas perangkat lunak. Kerjakan repository `senzu-reflexology` yang sudah berisi starter landing page.

## Tujuan produk
Bangun website landing page informatif untuk Senzu Reflexology. Website memperkenalkan bisnis, kategori layanan, suasana tempat, lokasi, jam operasional, dan jalur kontak WhatsApp. Website ini bukan aplikasi booking penuh, bukan e-commerce, dan tidak memerlukan backend/database pada fase pertama.

## Aturan wajib
1. Audit seluruh repository sebelum mengubah file. Pertahankan struktur dan teknologi yang sudah dipilih: React, TypeScript, Vite, Tailwind CSS v4, ESLint, Vitest.
2. Jangan mengubah atau menyentuh repository/proyek Senzu Home.
3. Jangan mengarang alamat, harga, nomor telepon, jam operasional, daftar treatment, durasi, sertifikasi, testimoni, atau klaim medis. Jika data belum tersedia, gunakan placeholder yang jelas dan jelaskan pada README.
4. Jangan mengklaim website sudah teruji atau ter-deploy sebelum benar-benar menjalankan verifikasi yang sesuai.
5. Jangan menambahkan backend, database, autentikasi, CMS, analitik, atau dependensi besar tanpa kebutuhan yang jelas.
6. Jangan menaruh secret di frontend atau file yang masuk Git. `.env` harus tetap diabaikan Git dan `.env.example` hanya berisi contoh nonrahasia.
7. Gunakan Bahasa Indonesia yang alami, profesional, ringkas, dan mudah dipahami pelanggan.
8. Jaga aksesibilitas: semantic HTML, urutan heading logis, alt text yang bermakna, label kontrol, focus state, navigasi keyboard, kontras memadai, dan dukungan `prefers-reduced-motion`.
9. Prioritaskan performa mobile, responsive layout, SEO dasar, metadata, favicon, serta tautan eksternal yang aman (`rel="noreferrer"` bila membuka tab baru).
10. Foto eksternal saat ini hanya ilustrasi. Tandai statusnya dan siapkan penggantian dengan foto resmi; jangan menyebutnya sebagai dokumentasi asli lokasi Senzu.

## Arah desain
- Estetika wellness/reflexology premium yang tenang, hangat, bersih, dan tidak berlebihan.
- Palet hijau hutan, krem, beige, dan aksen tanah.
- Tipografi serif elegan untuk headline dan sans-serif untuk isi.
- Ruang putih yang cukup, visual kuat, CTA jelas, animasi minimal.
- Jangan membuat desain terlihat seperti template generik atau dashboard admin.
- Pastikan menu mobile benar-benar berfungsi.

## Bagian halaman
1. Navbar dengan logo/wordmark dan anchor yang bekerja.
2. Hero dengan headline, deskripsi, CTA kontak.
3. Tentang Senzu dan nilai/keunggulan yang tidak mengandung klaim tak terverifikasi.
4. Daftar kategori layanan dengan label yang dapat diperbarui oleh pemilik.
5. Galeri foto yang secara eksplisit menandai foto ilustrasi sampai foto asli tersedia.
6. Kontak, alamat, jam operasional, tautan peta, dan WhatsApp berbasis konfigurasi.
7. Footer dengan hak cipta dinamis.

## Integrasi kontak
- Gunakan variabel konfigurasi yang sudah ada di `src/config.ts`.
- Nomor WhatsApp harus format internasional tanpa tanda `+`, spasi, atau tanda hubung.
- Jika nomor WhatsApp belum diisi, CTA jangan menghasilkan URL WhatsApp yang rusak; arahkan pengguna ke bagian kontak atau tampilkan pesan bahwa nomor perlu dikonfigurasi.
- Validasi bahwa tautan Maps hanya ditampilkan jika URL tersedia.
- Jangan mengumpulkan data pengunjung atau menambahkan formulir yang tidak diperlukan.

## Tugas implementasi
1. Audit kode dan catat risiko, placeholder, serta masalah teknis.
2. Perbaiki struktur dan kualitas kode secukupnya, hindari rewrite tanpa alasan.
3. Pastikan navigasi anchor, menu mobile, CTA WhatsApp, dan konfigurasi bisnis bekerja.
4. Tambahkan test untuk komponen utama dan perilaku penting, termasuk fallback ketika nomor WhatsApp belum tersedia.
5. Pastikan metadata SEO dan title deskriptif, bahasa dokumen `id`, favicon, dan robots.txt sesuai.
6. Periksa responsive breakpoint untuk 320px, 375px, 768px, 1024px, dan desktop.
7. Jalankan `npm install` bila perlu, kemudian `npm run lint`, `npm run test`, dan `npm run build`. Perbaiki kegagalan yang disebabkan proyek. Jika tidak dapat menjalankan perintah, jelaskan keterbatasannya; jangan mengklaim lulus.
8. Periksa aksesibilitas dasar dan tautan eksternal. Jangan menganggap foto Unsplash sebagai aset resmi.
9. Perbarui README dengan instruksi setup, konfigurasi, test, build, dan deployment.
10. Jangan melakukan push, deploy, mengubah remote Git, atau menambahkan layanan berbayar tanpa instruksi eksplisit pengguna.

## Kriteria selesai
- Instalasi dan build dapat dilakukan dengan instruksi README.
- Tidak ada TypeScript/ESLint/test error yang diketahui tanpa penjelasan.
- CTA tidak rusak saat data bisnis belum dikonfigurasi.
- Konten bisnis yang belum terverifikasi ditandai sebagai placeholder.
- Tampilan usable di mobile dan desktop, dengan fokus pada aksesibilitas.
- Laporan akhir mencantumkan file yang berubah, verifikasi yang benar-benar dijalankan, placeholder yang perlu dikonfirmasi pemilik, dan risiko tersisa.

Mulai dengan audit repository. Setelah itu implementasikan perubahan yang paling berdampak, jalankan verifikasi, lalu laporkan hasil aktual secara ringkas dan faktual.
