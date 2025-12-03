# Konversi Huruf ↔ Angka & Operasi Matematika

Project ini adalah implementasi dari serangkaian soal konversi huruf ke angka dan sebaliknya, menggunakan kamus khusus, serta melakukan operasi matematika tertentu terhadap angka atau huruf.  

Project ini menggunakan JavaScript dan bisa dijalankan via cli.
---

 # Kamus
 A : 0
 B, C, D : 1 
 E : 2 
 F, G, H: 3 
 I : 4 
 J, K, L, M, N : 5 
 O : 6 
 P, Q, R, S, T : 7 
 U : 8 
 V, W, X, Y, Z : 9 

 a : 9 
 b, c, d : 8 
 e : 7 
 f, g, h, : 6
 i : 5 
 j, k, l, m, n : 4 
 o : 3 
 p, q, r, s, t : 2 
 u : 1 
 v, w, x, y, z : 0 
 (spasi)  : 0 

1. **Konversi Huruf ke Angka**  
   - Huruf besar (A-Z), huruf kecil (a-z), dan spasi diubah ke angka sesuai kamus.
   - Contoh:
     ```
     Titanic → 7 5 2 9 4 5 8
     Avenger Endgame → 0 0 7 4 6 7 2 0 2 4 8 6 9 4 7
     ```

2. **Operasi Matematika Bergantian**  
   - Penjumlahan dan pengurangan secara bergantian dari angka hasil konversi.  
   - Contoh:
     ```
     7 + 5 - 2 + 9 - 4 + 5 - 8 → 12
     0 + 0 - 7 + 4 - 6 + 7 - 2 + 0 - 2 + 4 - 8 + 6 - 9 + 4 - 7 → -16
     ```

3. **Konversi Angka ke Huruf**  
   - Angka positif dikembalikan menjadi huruf besar sesuai kamus.  
   - Contoh:
     ```
     12 → 0 1 2 3 4 0 1 0 1 → A B E F I A B A B
     -16 → 16 → 0 1 2 3 4 5 0 1 → A B E F I J A B
     ```

4. **Modifikasi Huruf Terakhir**  
   - Dua huruf terakhir ditambah 1 saat dikonversi dari angka ke huruf.  
   - Contoh:
     ```
     A B E F I A B A B → 0 1 2 3 4 0 1 0 1 → 0 1 2 3 4 0 1 1 2 → A B E F I A B B E
     A B E F I J A B → 0 1 2 3 4 5 0 1 → 0 1 2 3 4 5 1 2 → A B E F I J B E
     ```

5. **Perubahan Huruf → Angka Genap +1**  
   - Dari hasil sebelumnya, setiap angka genap (termasuk 0) ditambah 1 → menghasilkan array angka baru.  
   - Contoh:
     ```
     A B E F I A B B E → 0 1 2 3 4 0 1 1 2 → 1 1 3 3 5 1 1 1 3
     A B E F I J B E → 0 1 2 3 4 5 1 2 → 1 1 3 3 5 5 1 3
     ```

---

