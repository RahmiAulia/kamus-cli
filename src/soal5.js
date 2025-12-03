import { soal1 } from "./soal1.js";

function tambahGenap(arr) {
    return arr.map(n => (n % 2 === 0 ? n + 1 : n));
}

export function soal5(inputHuruf) {
    // a. huruf → angka
    const angka = soal1(inputHuruf);

    // b. operasi: tambah 1 untuk angka genap
    const angkaBaru = tambahGenap(angka);

    return angkaBaru;
}