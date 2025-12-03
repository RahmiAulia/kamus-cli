import { kamusHurufBesar } from "./kamus.js";

export function konversi(hasilSoal2) {
  //Konversi pecah angka
  let sisa = Math.abs(hasilSoal2);
  const deret = [];

  while (sisa > 0) {
    for (let i = 0; i <= sisa; i++) {
      if (i > sisa) {
        break;
      }
      deret.push(i);
      sisa -= i;
      if (sisa <= 0) {
        break;
      }
    }
  }
  return deret;
}

//Konversi angka ke abjad
export function soal3(deret) {
  return deret.map((n) => {
    const entry = kamusHurufBesar.find((e) => e.value === n);
    return entry ? entry.chars[0] : "?";
  });
}
