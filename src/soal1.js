import { kamusHurufBesar, kamusHurufKecil } from "./kamus.js";

export function soal1(kalimat) {
    const result = [];

    for (let char of kalimat) {
       let value = null;
       
       const kamus = char === char.toUpperCase() ? kamusHurufBesar : kamusHurufKecil;
       for (let item of kamus) {
        if (item.chars.includes(char)) {
            value = item.value;
            break;
        }
       }
       result.push(value);
    }
    return result;
}