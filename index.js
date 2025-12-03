import readline from "readline";
import { soal4 } from "./src/soal4.js";
import { soal5 } from "./src/soal5.js";
import { soal1 } from "./src/soal1.js";
import { soal2 } from "./src/soal2.js";
import { konversi, soal3 } from "./src/soal3.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan kalimat: ", (input) => {
  console.log("\n=== HASIL PROSES ===");

  const step1 = soal1(input);
  console.log("1. Konversi huruf → angka:", step1.join(" "));

  const step2 = soal2(step1);
  console.log("2. Hitung + - bergantian:", step2);

  const step3a = konversi(step2);
  console.log("3.1 Konversi hasil ke angka:", step3a.join(" "));

  const step3b = soal3(step3a);
  console.log("3.2 Konversi hasil ke huruf:", step3b.join(" "));

  const step4 = soal4(step3b);
  console.log("4. Modifikasi huruf:", step4.join(" "));

  const step5 = soal5(step4);
  console.log("5. Konversi huruf akhir → angka:", step5.join(" "));

  rl.close();
});