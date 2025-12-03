export function soal2(angka) {
  let hasil = angka[0];

  for (let i = 1; i < angka.length; i++) {
    if (i % 2 === 1) {
      hasil += angka[i];
    } else {
      hasil -= angka[i];
    }
  }
  return hasil;
}

// export function hitungBergantian(angka) {
//   // angka sudah berupa array number
//   let total = angka[0];

//   for (let i = 1; i < angka.length; i++) {
//     if (i % 2 === 1) total += angka[i];
//     else total -= angka[i];
//   }

//   return total;
// }
