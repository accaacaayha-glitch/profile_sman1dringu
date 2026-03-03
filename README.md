# 🏫 Website Profile SMAN 1 Dringu
## Kabupaten Probolinggo, Jawa Timur

---

## 📁 Struktur File

```
sman1dringu/
├── index.html     ← File utama website
├── script.js      ← Semua logika JavaScript
├── README.md      ← Panduan ini
├── logo.png       ← Logo sekolah (taruh di sini)
└── gedung.png     ← Foto gedung sekolah (taruh di sini)
```

---

## 🚀 Cara Menjalankan

1. **Pastikan file `logo.png` dan `gedung.png` ada** di folder yang sama dengan `index.html`
2. Buka VS Code → klik kanan `index.html` → **"Open with Live Server"**
3. Website akan terbuka di browser otomatis

> Jika belum punya Live Server, install dari Extensions VS Code:  
> Cari "Live Server" oleh Ritwick Dey → Install

---

## ✨ Fitur Website

| Fitur | Keterangan |
|---|---|
| 🖼️ Hero Gedung | Foto `gedung.png` sebagai background fullscreen |
| 🏅 Logo | `logo.png` tampil di navbar & footer |
| 🔤 Font Cinzel Decorative | Font elegan bergaya klasik untuk judul |
| 📊 Statistik Animasi | Counter angka otomatis saat di-scroll |
| 💬 Form Ulasan | Pengunjung bisa tambah ulasan + rating bintang |
| 🎓 Kata Alumni | 4 kartu alumni dengan kutipan inspiratif |
| 🗺️ Google Maps | Embed peta lokasi sekolah |
| 🤖 AI Chat | Tanya jawab menggunakan Claude AI |
| 📱 Responsive | Tampil baik di HP, tablet, dan desktop |
| ✨ Animasi Scroll | Elemen muncul smooth saat di-scroll |
| 🔝 Scroll To Top | Tombol kembali ke atas |

---

## 🤖 Konfigurasi AI Chat

Fitur AI Chat menggunakan **Anthropic Claude API**.

> ⚠️ **PENTING**: Untuk produksi/publik, jangan taruh API key langsung di frontend!  
> Gunakan backend server (Node.js/PHP) sebagai proxy untuk keamanan.

Untuk testing lokal, AI akan merespons dengan:
1. **Knowledge base lokal** untuk pertanyaan umum (cepat, tanpa API)
2. **Claude API** untuk pertanyaan yang lebih spesifik

---

## 🎨 Kustomisasi

### Ubah Informasi Sekolah
Edit di `index.html` bagian:
- Nomor telepon: cari `(0335) XXXXXXX` → ganti dengan nomor asli
- Email: cari `sman1dringu@gmail.com` → ganti jika berbeda
- Alamat: cari `Jl. Raya Dringu No.81` → sesuaikan

### Ubah Warna Tema
Edit CSS variables di `index.html`:
```css
:root {
  --navy: #0a1f44;     /* Biru gelap utama */
  --gold: #c9a84c;     /* Emas */
  --gold-light: #f0d080; /* Emas terang */
  --cream: #f9f3e3;    /* Krem latar */
}
```

### Tambah Galeri Foto
Di bagian `#galeri`, ganti `galeri-placeholder` dengan tag `<img>`:
```html
<div class="galeri-item">
  <img src="foto-kegiatan.jpg" alt="Kegiatan"/>
  <div class="galeri-overlay"><i class="fas fa-expand"></i></div>
</div>
```

---

## 📞 Kontak & Dukungan

Website ini dibuat untuk keperluan profil sekolah SMAN 1 Dringu.  
Untuk pertanyaan teknis, hubungi tim IT sekolah.

---

*© 2025 SMAN 1 Dringu — Kabupaten Probolinggo*
