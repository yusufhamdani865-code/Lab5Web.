// ==========================================
// LATIHAN 1: Menampilkan Output
// ==========================================
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");


// ==========================================
// LATIHAN 2: Alert dan Prompt
// ==========================================
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}


// ==========================================
// LATIHAN 3: Function dan Operasi Aritmetika
// ==========================================
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}

// Menjalankan function operasi dasar
operasiDasar(9, 4);


// ==========================================
// LATIHAN 4: Seleksi Kondisi If-Else
// ==========================================
const inputNilai = prompt("Masukkan nilai (0-100):");
const nilaiMahasiswa = Number(inputNilai);

if (inputNilai === null || inputNilai.trim() === "" || Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
} else {
    alert("Belum lulus");
}


// ==========================================
// LATIHAN 5: Seleksi Kondisi Switch
// ==========================================
const inputPilihan = prompt("Masukkan angka 1-5:");
switch (inputPilihan) {
    case "1": 
        alert("Bilangan satu"); 
        break;
    case "2": 
        alert("Bilangan dua"); 
        break;
    case "3": 
        alert("Bilangan tiga"); 
        break;
    case "4": 
        alert("Bilangan empat"); 
        break;
    case "5": 
        alert("Bilangan lima"); 
        break;
    default: 
        alert("Pilihan tidak tersedia");
}


// ==========================================
// LATIHAN 6: Form Bilangan Genap atau Ganjil
// ==========================================
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}


// ==========================================
// LATIHAN 7: Mengubah Warna Halaman
// ==========================================
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}


// ==========================================
// LATIHAN 8: DOM dan Checkbox Menu Makanan
// ==========================================
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// ==========================================
// MINI PROJECT: Kalkulator Nilai Mahasiswa
// ==========================================
function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function nilaiValid(teks) {
    const angka = Number(teks);
    return teks.trim() !== "" && !Number.isNaN(angka) && angka >= 0 && angka <= 100;
}

function tampilkanHasil(akhir, predikat, status) {
    document.getElementById("hasilNilai").textContent =
        "Nilai akhir: " + akhir.toFixed(2) +
        " | Predikat: " + predikat +
        " | Status: " + status;
}

function prosesNilai() {
    const teksTugas = document.getElementById("inputTugas").value;
    const teksUts = document.getElementById("inputUts").value;
    const teksUas = document.getElementById("inputUas").value;

    if (!nilaiValid(teksTugas) || !nilaiValid(teksUts) || !nilaiValid(teksUas)) {
        document.getElementById("hasilNilai").textContent =
            "Semua nilai harus diisi dengan angka pada rentang 0–100.";
        return;
    }

    const akhir = hitungNilaiAkhir(
        Number(teksTugas), Number(teksUts), Number(teksUas)
    );
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";
    tampilkanHasil(akhir, predikat, status);
}

// ==========================================
// EKSPERIMEN MANDIRI (1 - 6)
// ==========================================

// Eksperimen 1
function eksperimen1() {
    const inputA = prompt("Masukkan bilangan pertama:");
    const inputB = prompt("Masukkan bilangan kedua:");
    const angkaA = Number(inputA);
    const angkaB = Number(inputB);

    if (inputA === null || inputB === null || inputA.trim() === "" ||
        inputB.trim() === "" || Number.isNaN(angkaA) || Number.isNaN(angkaB)) {
        alert("Input harus berupa dua bilangan yang valid.");
        return;
    }

    operasiDasar(angkaA, angkaB);
    document.getElementById("hasilEks1").textContent =
        "Operasi pada " + angkaA + " dan " + angkaB + " ditampilkan di Console.";
}

// Eksperimen 2
function eksperimen2() {
    let hasil = "";
    for (let i = 1; i <= 10; i++) {
        hasil += "7 x " + i + " = " + (7 * i) + "\n";
    }
    document.getElementById("hasilEks2").textContent = hasil;
    console.log(hasil);
}

// Eksperimen 3
function cekGenap(angka) {
    return angka % 2 === 0;
}

function eksperimen3() {
    const input = document.getElementById("eks3Angka").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilEks3");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else {
        hasil.textContent = "cekGenap(" + angka + ") = " + cekGenap(angka);
    }
}

// Eksperimen 4
function eksperimen4() {
    const nama = document.getElementById("eks4Nama").value.trim();
    const email = document.getElementById("eks4Email").value.trim();
    const hasil = document.getElementById("hasilEks4");

    if (nama === "" && email === "") {
        hasil.textContent = "Kolom Nama dan Email tidak boleh kosong.";
    } else if (nama === "") {
        hasil.textContent = "Kolom Nama tidak boleh kosong.";
    } else if (email === "") {
        hasil.textContent = "Kolom Email tidak boleh kosong.";
    } else {
        hasil.textContent = "Data lengkap, form valid.";
    }
}

// Eksperimen 5
const daftarMenuBaru = document.querySelectorAll(".menu-baru");

daftarMenuBaru.forEach((item) => {
    item.addEventListener("change", hitungTotalBaru);
});

function hitungTotalBaru() {
    let total = 0;
    daftarMenuBaru.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("totalBaru").textContent = total.toLocaleString("id-ID");
}

// Eksperimen 6
function tampilSembunyi() {
    const elemen = document.getElementById("elemenToggle");
    elemen.style.display = elemen.style.display === "none" ? "block" : "none";
}

function validasiNamaNilai() {
    const nama = document.getElementById("tugasNama").value.trim();
    const teksNilai = document.getElementById("tugasNilai").value;
    const nilai = Number(teksNilai);
    const hasil = document.getElementById("hasilTugas7");

    if (nama === "") {
        hasil.textContent = "Nama tidak boleh kosong.";
    } else if (teksNilai.trim() === "" || Number.isNaN(nilai) ||
               nilai < 0 || nilai > 100) {
        hasil.textContent = "Nilai harus berupa angka pada rentang 0–100.";
    } else {
        hasil.textContent = "Data valid: " + nama + " dengan nilai " + nilai + ".";
    }
}

