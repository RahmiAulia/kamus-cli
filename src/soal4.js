import { soal1 } from "./soal1.js";
import { soal2 } from "./soal2.js";
import { konversi, soal3 } from "./soal3.js";

function tambahDuaTerakhir(arr) {
    const hasil = [...arr]; // clone array
    const len = hasil.length;

    if (len >= 2) {
        hasil[len - 2] += 1;
        hasil[len - 1] += 1;
    } else if (len === 1) {
        hasil[len - 1] += 1;
    }

    return hasil;
}

export function soal4(hasilSoal3b) {
  //a. Ubah input yang didapat menjadi sebuah bilangan kembali
  const abjadKeAngka = soal1(hasilSoal3b);

  //b. Lakukan operasi matematika terhadap bilangan tersebut hingga menjadi bilangan baru
  const operasiHitung = tambahDuaTerakhir(abjadKeAngka);

  //c. Lakukan perubahan kembali ke bentuk abjad
//   const konversiAwal = konversi(operasiHitung);
  const angaKeAbjad = soal3(operasiHitung);

  return angaKeAbjad;
}
