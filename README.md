# Praktikum 5 — JavaScript Dasar

<p align="center">
  <strong>Laporan Tugas Pertemuan 3 Pemrograman Web</strong><br>
  <strong>Praktikum JavaScript Dasar</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Structure-orange?logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/JavaScript-Dasar-yellow?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Editor-VS%20Code-blue?logo=visualstudiocode&logoColor=white" alt="Visual Studio Code">
</p>

## Informasi Praktikum

| Keterangan | Detail |
|---|---|
| Nama | Yusuf Hamdani |
| NIM | 312510049 |
| Kelas | I.25.3D |
| Program Studi | Teknik Informatika |
| Fakultas | Fakultas Teknik |
| Universitas | Universitas Pelita Bangsa |
| Repository | `Lab5Web` |

## Deskripsi

Repository ini berisi hasil **Praktikum 5 — JavaScript Dasar** pada mata kuliah Pemrograman Web. Praktikum berfokus pada pengenalan sintaks JavaScript dan penerapannya untuk membuat halaman web yang interaktif, mulai dari menampilkan output, menggunakan variabel dan function, menerapkan percabangan serta perulangan, hingga memanipulasi elemen HTML dan memvalidasi input pengguna.

Seluruh latihan utama disusun menggunakan `index.html` dan `script.js`. Hasil pengujian didokumentasikan melalui screenshot.

## Tujuan Praktikum

- Memahami sintaks dasar JavaScript dan cara menghubungkannya dengan HTML.
- Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
- Menampilkan informasi melalui `console.log()`, `alert()`, `prompt()`, dan elemen HTML.
- Memanipulasi konten serta gaya elemen HTML menggunakan DOM.
- Membuat interaksi sederhana pada form dan melakukan validasi input.
- Mendokumentasikan pekerjaan praktikum beserta hasil pengujiannya.

## Teknologi dan Peralatan

- **HTML5** — menyusun struktur halaman.
- **JavaScript** — menambahkan logika dan interaksi.
- **Visual Studio Code** — menulis dan mengedit kode.
- **Web browser** — menjalankan halaman serta memeriksa Console melalui DevTools.
- **GitHub** — menyimpan kode dan dokumentasi praktikum.

## Struktur Repository

```text
Lab5Web/
├── index.html
├── script.js
├── Screenshot/
│   ├── ss1.png
│   ├── ss2.png
│   ├── ss3.png
│   ├── ...
│   └── ss16.png
└── README.md
```

> **Catatan:** Nama folder dan file screenshot harus sama persis dengan yang ada di repository. Jika nama atau ekstensi file berbeda, sesuaikan tautan gambar di bagian dokumentasi hasil.

## Persiapan dan Cara Menjalankan

1. Clone atau unduh repository `Lab5Web`.
2. Buka folder proyek menggunakan Visual Studio Code.
3. Pastikan `index.html` dan `script.js` berada dalam folder yang sama.
4. Pastikan `index.html` memuat JavaScript eksternal di bagian akhir elemen `body`:

   ```html
   <script src="script.js"></script>
   ```

5. Buka `index.html` menggunakan web browser.
6. Ikuti instruksi pada halaman, seperti menekan tombol latihan atau mengisi form.
7. Untuk melihat output `console.log()`, buka DevTools dengan menekan `F12`, lalu pilih tab **Console**.

## Materi dan Latihan

### 1. Menampilkan Output

Mengubah teks elemen HTML menggunakan `document.getElementById()` dan `textContent`, serta menampilkan pesan di Console menggunakan `console.log()`.

### 2. Alert dan Prompt

Menggunakan `prompt()` untuk meminta nama pengguna dan `alert()` untuk menampilkan sapaan. Input kosong, pembatalan, atau input yang hanya berisi spasi ditangani melalui validasi.

### 3. Function dan Operasi Aritmetika

Membuat function `operasiDasar(a, b)` untuk melakukan penjumlahan, pengurangan, perkalian, pembagian, dan modulus.

### 4. Percabangan `if–else`

Memeriksa nilai mahasiswa pada rentang 0–100 dan menentukan status kelulusan dengan batas nilai minimal 60.

### 5. Percabangan `switch`

Mengubah input angka 1–5 menjadi nama bilangan menggunakan `switch`, `case`, `break`, dan `default`.

### 6. Form Bilangan Genap atau Ganjil

Memeriksa input bilangan bulat menggunakan `Number.isInteger()` dan operator modulus (`%`).

### 7. Mengubah Warna Halaman

Menggunakan function berparameter `ubahWarnaLatar(warna)` untuk mengubah warna latar halaman menjadi hijau muda, putih, atau kuning muda.

### 8. DOM dan Checkbox Menu Makanan

Menghitung total harga menu secara otomatis berdasarkan checkbox yang dipilih, dengan memanfaatkan `querySelectorAll()`, `addEventListener()`, dan `toLocaleString("id-ID")`.

## Mini Project — Kalkulator Nilai Mahasiswa

Mini project menerima nilai Tugas, UTS, dan UAS, kemudian menghitung nilai akhir, menentukan predikat, serta menampilkan status kelulusan.

**Bobot penilaian:**

| Komponen | Bobot |
|---|---:|
| Tugas | 30% |
| UTS | 30% |
| UAS | 40% |

Rumus nilai akhir:

```text
Nilai Akhir = (Tugas × 30%) + (UTS × 30%) + (UAS × 40%)
```

**Predikat nilai:**

| Rentang nilai akhir | Predikat |
|---|---|
| ≥ 85 | A |
| ≥ 75 dan < 85 | B |
| ≥ 60 dan < 75 | C |
| ≥ 50 dan < 60 | D |
| < 50 | E |

Mahasiswa dinyatakan **Lulus** apabila nilai akhir minimal 60. Program juga memvalidasi agar semua nilai diisi dan berada dalam rentang 0–100.

## Eksperimen Mandiri

Praktikum juga mencakup eksperimen berikut:

1. Menjalankan operasi aritmetika menggunakan dua input dari `prompt()`.
2. Menampilkan tabel perkalian 7 dari 1 sampai 10 menggunakan perulangan `for`.
3. Membuat function `cekGenap(angka)` yang mengembalikan nilai boolean.
4. Memvalidasi form agar nama dan email tidak kosong.
5. Menambahkan menu makanan Nasi Putih dan Es Teh Manis serta menghitung total harga.
6. Membuat tombol untuk menyembunyikan dan menampilkan kembali elemen HTML.

## Pertanyaan dan Tugas

Bagian tugas membahas konsep-konsep dasar JavaScript berikut:

- Perbedaan `console.log()`, `alert()`, `prompt()`, `textContent`, dan `innerHTML`.
- Perbedaan deklarasi variabel `let` dan `const`.
- Perbedaan operator perbandingan `==` dan `===`.
- Fungsi percabangan `if–else` dan `switch`.
- Peran parameter dan `return` pada function.
- Pemilihan elemen HTML menggunakan `document.getElementById()`.
- Pembuatan validasi form untuk nama dan nilai mahasiswa.

## Dokumentasi Hasil Praktikum

Screenshot hasil pengerjaan disimpan di folder `Screenshot/`. Berikut contoh penyematan gambar di README. Pastikan nama file pada tautan sesuai dengan nama file yang benar di repository.

### Hasil Latihan

| Kegiatan | Screenshot |
|---|---|
| Latihan 1 — Output | `Screenshot/ss1.png` |
| Latihan 2 — Alert dan Prompt | `Screenshot/ss2.png` |
| Latihan 3 — Operasi Aritmetika | `Screenshot/ss3.png` |
| Latihan 4 — `if–else` | `Screenshot/ss4.png` |
| Latihan 5 — `switch` | `Screenshot/ss5.png` |
| Latihan 6 — Genap atau Ganjil | `Screenshot/ss6.png` |
| Latihan 7 — Mengubah Warna | `Screenshot/ss7.png` |
| Latihan 8 — Total Menu | `Screenshot/ss8.png` |
| Mini Project — Kalkulator Nilai | `Screenshot/ss9.png` |
| Eksperimen dan Tugas | `Screenshot/ss10.png`–`Screenshot/ss16.png` |

> Untuk menampilkan gambar langsung pada halaman GitHub, gunakan sintaks seperti `![Hasil Latihan 1](Screenshot/ss1.png)`. Daftar di atas menggunakan nama file sebagai referensi agar tidak mengasumsikan bahwa semua screenshot memiliki nama atau urutan yang sama dengan dokumen laporan.

## Kesimpulan

Praktikum JavaScript Dasar memberikan pemahaman mengenai penggunaan JavaScript bersama HTML untuk membuat halaman web yang interaktif. Melalui latihan, mini project, dan eksperimen mandiri, konsep variabel, operator, percabangan, perulangan, function, DOM, serta validasi input diterapkan dalam kasus sederhana. Mini project Kalkulator Nilai Mahasiswa juga menunjukkan pentingnya memisahkan proses perhitungan, validasi, dan tampilan hasil agar program lebih terstruktur.

## Repository

Repository GitHub praktikum: **`Lab5Web`**

Repository ini digunakan untuk menyimpan file HTML, JavaScript, screenshot dokumentasi, dan README sebagai dokumentasi pengerjaan Praktikum 5 JavaScript Dasar.

---

<p align="center">
  <sub>Praktikum Pemrograman Web · Teknik Informatika · Universitas Pelita Bangsa</sub>
</p>
