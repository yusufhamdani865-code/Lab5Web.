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

Repository ini berisi hasil Praktikum 5 — JavaScript Dasar pada mata kuliah Pemrograman Web. Praktikum ini membahas dasar-dasar JavaScript dan penerapannya untuk membuat halaman web interaktif, mulai dari menampilkan output, menggunakan variabel dan function, menerapkan percabangan dan perulangan, hingga memanipulasi elemen HTML dan memvalidasi input pengguna.

Latihan dikerjakan menggunakan HTML dan JavaScript. Hasil pengerjaan didokumentasikan melalui screenshot yang disimpan di folder `Screenshot/`.

## Tujuan Praktikum

- Memahami sintaks dasar JavaScript dan cara menghubungkannya dengan HTML.
- Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
- Menampilkan informasi melalui `console.log()`, `alert()`, `prompt()`, dan elemen HTML.
- Memanipulasi konten dan gaya elemen HTML menggunakan DOM.
- Membuat interaksi sederhana pada form dan melakukan validasi input.
- Mendokumentasikan hasil pengerjaan praktikum.

## Teknologi dan Peralatan

- **HTML5** — menyusun struktur halaman web.
- **JavaScript** — menambahkan logika dan interaksi.
- **Visual Studio Code** — menulis dan mengedit kode program.
- **Web Browser** — menjalankan halaman web dan memeriksa Console.
- **GitHub** — menyimpan kode program dan dokumentasi praktikum.

## Struktur Repository

```text
Lab5Web/
├── index.html
├── script.js
├── Screenshot/
│   ├── ss1 (3).png
│   ├── ss2 (3).png
│   ├── ss3 (3).png
│   ├── ss4 (3).png
│   ├── ss5 (2).png
│   ├── ss6 (3).png
│   ├── ss7 (3).png
│   ├── ss8 (2).png
│   ├── ss9 (2).png
│   ├── ss10 (2).png
│   ├── ss11.png
│   ├── ss12 (2).png
│   ├── ss13 (3).png
│   ├── ss14.png
│   ├── ss15 (2).png
│   ├── ss15.png
│   └── ss16 (3).png
└── README.md
```

## Persiapan dan Cara Menjalankan

1. Clone atau unduh repository `Lab5Web`.
2. Buka folder proyek menggunakan Visual Studio Code.
3. Pastikan file `index.html` dan `script.js` berada dalam folder proyek yang sesuai.
4. Pastikan file HTML memanggil JavaScript eksternal menggunakan:

   ```html
   <script src="script.js"></script>
   ```

5. Buka `index.html` menggunakan browser.
6. Jalankan latihan dan ikuti instruksi yang tersedia.
7. Untuk melihat output `console.log()`, tekan `F12` pada browser dan buka tab **Console**.

## Materi dan Latihan

### 1. Menampilkan Output

Menggunakan `document.getElementById()` dan `textContent` untuk mengubah teks pada elemen HTML serta `console.log()` untuk menampilkan informasi di Console.

### 2. Alert dan Prompt

Menggunakan `prompt()` untuk meminta nama pengguna dan `alert()` untuk menampilkan pesan. Input pengguna dapat diperiksa sebelum diproses.

### 3. Function dan Operasi Aritmetika

Membuat function `operasiDasar(a, b)` untuk melakukan operasi penjumlahan, pengurangan, perkalian, pembagian, dan modulus.

### 4. Percabangan `if-else`

Memeriksa nilai mahasiswa dan menentukan status berdasarkan kondisi yang telah ditetapkan.

### 5. Percabangan `switch`

Menggunakan `switch`, `case`, `break`, dan `default` untuk memilih keluaran berdasarkan nilai input.

### 6. Form Bilangan Genap atau Ganjil

Memeriksa bilangan menggunakan operator modulus (`%`) untuk menentukan apakah bilangan termasuk genap atau ganjil.

### 7. Mengubah Warna Halaman

Menggunakan function untuk mengubah warna latar halaman web sesuai pilihan pengguna.

### 8. DOM dan Checkbox Menu Makanan

Menggunakan elemen checkbox untuk memilih menu makanan dan menghitung total harga berdasarkan pilihan.

## Mini Project — Kalkulator Nilai Mahasiswa

Mini project ini digunakan untuk menghitung nilai akhir mahasiswa berdasarkan nilai Tugas, UTS, dan UAS, kemudian menentukan predikat serta status kelulusan.

### Bobot Penilaian

| Komponen | Bobot |
|---|---:|
| Tugas | 30% |
| UTS | 30% |
| UAS | 40% |

Rumus perhitungan nilai akhir:

```text
Nilai Akhir = (Tugas × 30%) + (UTS × 30%) + (UAS × 40%)
```

### Predikat Nilai

| Rentang Nilai Akhir | Predikat |
|---|---|
| ≥ 85 | A |
| ≥ 75 dan < 85 | B |
| ≥ 60 dan < 75 | C |
| ≥ 50 dan < 60 | D |
| < 50 | E |

Mahasiswa dinyatakan lulus apabila nilai akhir memenuhi batas kelulusan yang diterapkan pada program.

## Eksperimen Mandiri

Praktikum juga mencakup eksperimen berikut:

1. Melakukan operasi aritmetika menggunakan input dari `prompt()`.
2. Menampilkan tabel perkalian 7 menggunakan perulangan `for`.
3. Membuat function `cekGenap(angka)` untuk memeriksa bilangan genap.
4. Melakukan validasi form agar input yang diperlukan tidak kosong.
5. Menambahkan pilihan menu makanan dan menghitung total harga.
6. Membuat tombol untuk menyembunyikan dan menampilkan kembali elemen HTML.

## Pertanyaan dan Tugas

Materi pertanyaan praktikum membahas:

- Perbedaan `console.log()`, `alert()`, `prompt()`, `textContent`, dan `innerHTML`.
- Perbedaan deklarasi variabel `let` dan `const`.
- Perbedaan operator perbandingan `==` dan `===`.
- Penggunaan percabangan `if-else` dan `switch`.
- Peran parameter dan `return` dalam function.
- Pemilihan elemen HTML menggunakan `document.getElementById()`.
- Validasi input form menggunakan JavaScript.

## Dokumentasi Hasil Praktikum

Bagian ini menampilkan screenshot hasil pengerjaan yang tersimpan dalam folder `Screenshot/`. Nama file pada tautan di bawah disesuaikan dengan nama file yang terdapat di repository GitHub.

### Screenshot 1 — Menampilkan Output

![Screenshot 1](Screenshot/ss1%20(3).png)

### Screenshot 2 — Alert dan Prompt

![Screenshot 2](Screenshot/ss2%20(3).png)

### Screenshot 3 — Operasi Aritmetika

![Screenshot 3](Screenshot/ss3%20(3).png)

### Screenshot 4 — Percabangan if-else

![Screenshot 4](Screenshot/ss4%20(3).png)

### Screenshot 5 — Percabangan switch

![Screenshot 5](Screenshot/ss5%20(2).png)

### Screenshot 6 — Bilangan Genap atau Ganjil

![Screenshot 6](Screenshot/ss6%20(3).png)

### Screenshot 7 — Mengubah Warna Halaman

![Screenshot 7](Screenshot/ss7%20(3).png)

### Screenshot 8 — Menghitung Total Menu

![Screenshot 8](Screenshot/ss8%20(2).png)

### Screenshot 9 — Mini Project Kalkulator Nilai Mahasiswa

![Screenshot 9](Screenshot/ss9%20(2).png)

### Screenshot 10 — Hasil Eksperimen

![Screenshot 10](Screenshot/ss10%20(2).png)

### Screenshot 11 — Hasil Eksperimen

![Screenshot 11](Screenshot/ss11.png)

### Screenshot 12 — Hasil Eksperimen

![Screenshot 12](Screenshot/ss12%20(2).png)

### Screenshot 13 — Hasil Eksperimen

![Screenshot 13](Screenshot/ss13%20(3).png)

### Screenshot 14 — Hasil Eksperimen

![Screenshot 14](Screenshot/ss14.png)

### Screenshot 15 — Hasil Eksperimen

![Screenshot 15](Screenshot/ss15%20(2).png)

### Screenshot 16 — Hasil Eksperimen

![Screenshot 16](Screenshot/ss16%20(3).png)

## Kesimpulan

Praktikum JavaScript Dasar memberikan pemahaman mengenai penggunaan JavaScript bersama HTML untuk membuat halaman web yang interaktif. Melalui latihan, mini project, dan eksperimen mandiri, konsep variabel, operator, percabangan, perulangan, function, DOM, dan validasi input dapat dipraktikkan dalam kasus sederhana.

Mini project Kalkulator Nilai Mahasiswa juga memberikan pengalaman dalam menerapkan logika perhitungan dan menampilkan hasil berdasarkan input pengguna.

## Repository

Repository GitHub praktikum: [Lab5Web](https://github.com/yusufhamdani865-code/Lab5Web)

Repository ini digunakan untuk menyimpan file HTML, JavaScript, screenshot dokumentasi, dan README sebagai dokumentasi pengerjaan Praktikum 5 JavaScript Dasar.

---

<p align="center">
  <sub>Praktikum Pemrograman Web · Teknik Informatika · Universitas Pelita Bangsa</sub>
</p>