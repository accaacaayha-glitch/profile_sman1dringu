// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hide');
  }, 2000);
});

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('back-top').classList.toggle('show', window.scrollY > 400);
  revealOnScroll();
});

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ===== TYPEWRITER =====
const phrases = [
  "Unggul, Berkarakter, Berprestasi 🌟",
  "Merdeka Belajar, Merdeka Berprestasi 🚀",
  "Sekolahku, Banggaku, Masa Depanku 🎓",
  "Bersama Menuju Generasi Emas 2045 🇮🇩"
];
let pIdx = 0, cIdx = 0, isDeleting = false;
function type() {
  const el = document.getElementById('typewriter');
  const phrase = phrases[pIdx];
  if (!isDeleting) {
    el.textContent = phrase.slice(0, ++cIdx);
    if (cIdx === phrase.length) { isDeleting = true; setTimeout(type, 2000); return; }
  } else {
    el.textContent = phrase.slice(0, --cIdx);
    if (cIdx === 0) { isDeleting = false; pIdx = (pIdx + 1) % phrases.length; }
  }
  setTimeout(type, isDeleting ? 40 : 80);
}
setTimeout(type, 1000);

// ===== HERO SLIDESHOW =====
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.slide-dot');

function goSlide(idx) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = idx;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}
setInterval(() => {
  goSlide((currentSlide + 1) % slides.length);
}, 5000);

// ===== SCROLL REVEAL =====
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
revealOnScroll();

// ===== THEME TOGGLE =====
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  document.getElementById('themeBtn').textContent =
    document.body.classList.contains('dark-mode') ? '☀️ Light' : '🌙 Dark';
}

// ===== BERITA FILTER =====
function filterBerita() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('#beritaGrid .berita-card').forEach(card => {
    card.style.display = card.dataset.title.toLowerCase().includes(q) ? 'block' : 'none';
  });
}

// ===== GALERI FILTER =====
function filterGaleri(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#galeriGrid .galeri-item').forEach(item => {
    item.style.display = (cat === 'all' || item.dataset.cat === cat) ? 'flex' : 'none';
  });
}

// ===== LIGHTBOX =====
function openLightbox(emoji, caption) {
  document.getElementById('lightboxEmoji').textContent = emoji;
  document.getElementById('lightboxCaption').textContent = caption;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target.id === 'lightbox') closeLightbox();
});

// ===== FORM SUBMIT =====
function submitForm() {
  alert('✅ Pesan terkirim! Tim kami akan segera menghubungi Anda.');
}

// ===== AI CHAT =====
let aiOpen = false;

function toggleAI(e) {
  if (e) e.preventDefault();
  aiOpen = !aiOpen;
  const w = document.getElementById('aiWindow');
  if (aiOpen) {
    w.classList.add('open');
    document.getElementById('aiInput').focus();
  } else {
    w.classList.remove('open');
  }
}

function appendMsg(text, type) {
  const msgs = document.getElementById('aiMessages');
  const div = document.createElement('div');
  div.className = 'msg-bubble ' + type;
  div.innerHTML = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function askSuggestion(el) {
  document.getElementById('aiInput').value = el.textContent;
  sendMessage();
}

async function sendMessage() {
  const input = document.getElementById('aiInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  document.getElementById('aiSuggestions').style.display = 'none';
  appendMsg(text, 'user');
  const loadingEl = appendMsg(
    '<div class="typing-dots"><span></span><span></span><span></span></div>',
    'bot'
  );

  const systemPrompt = `Kamu adalah asisten AI resmi SMAN 1 Dringu, Kabupaten Probolinggo, Jawa Timur.

Informasi lengkap sekolah:
- Nama: SMA Negeri 1 Dringu
- Alamat: Jl. Raya Dringu, Kec. Dringu, Kab. Probolinggo, Jawa Timur 67271
- NPSN: 20519034
- Tahun berdiri: 1986
- Status: Negeri | Akreditasi: A (Unggul)
- Jumlah siswa: 800+ | Guru: 62 | Kelas: 24 rombel
- Kurikulum: Merdeka Belajar (kelas X & XI), K13 (kelas XII)
- Jam masuk: 07.00 WIB
- Jam pulang: 15.30 WIB (Senin-Kamis), 11.30 WIB (Jumat)
- Email: sman1dringu@sch.id
- Telepon: (0335) 421XXX
- Ekstrakurikuler: Paskibra, Seni Musik, Sepak Bola, Basket, Teater, Fotografi, IT & Coding, Pencak Silat, KIR, Rohis, Seni Lukis, Pramuka
- Fasilitas: Lab IPA, Lab Komputer, Perpustakaan, Lapangan Olahraga, Musholla, UKS, Aula Serbaguna, Kantin Sehat
- Prestasi: Juara 1 OSN Matematika Kab. Probolinggo, Juara 1 Paskibra Provinsi Jatim, Juara 2 Debat, Finalis O2SN
- PPDB: Setiap Juni, jalur zonasi/prestasi/afirmasi, pendaftaran online
- Visi: Terwujudnya sekolah yang menghasilkan lulusan beriman, berakhlak mulia, berprestasi, berbudaya, dan berwawasan global

Aturan:
- Jawab HANYA pertanyaan tentang SMAN 1 Dringu
- Jika di luar topik, arahkan balik ke topik sekolah
- Gunakan Bahasa Indonesia yang ramah, sopan, dan informatif
- Tambahkan emoji yang sesuai agar menarik
- Jawaban ringkas tapi lengkap`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 800,
        system: systemPrompt,
        messages: [{ role: 'user', content: text }]
      })
    });
    const data = await response.json();
    loadingEl.remove();
    const reply = data.content?.map(c => c.text || '').join('') || 'Maaf, tidak dapat merespons saat ini.';
    appendMsg(reply, 'bot');
  } catch (err) {
    loadingEl.remove();
    appendMsg('⚠️ Koneksi bermasalah. Silakan coba lagi ya!', 'bot');
  }
}
```

---

## 📁 Struktur Folder Final
```
sman1dringu/
├── index.html   ← File 1
├── style.css    ← File 2
├── script.js    ← File 3
├── logo.png     ← Download dari chat sebelumnya
└── gedung.png   ← Download dari chat sebelumnya
