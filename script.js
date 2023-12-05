let belanja = parseInt(prompt("Masukkan Belanja "));

if(belanja > 0 && belanja < 100000){
  document.writeln("Jumlah Belanja Anda :"+belanja+"<br>")
  document.writeln("Anda Tidak Mendapatkan Diskon"+"<br>")
  document.writeln("Total Belanja Yang Harus di Bayar :"+belanja+"<br>")
}
if(belanja >= 100000 && belanja <= 150000){
  diskon10 = 0.1 * belanja
  jumlah10 = belanja -  diskon10
  document.writeln("Jumlah Belanja Anda :"+belanja+"<br>")
  document.writeln("Anda Tidak Mendapatkan Diskon 10%"+"<br>")
  document.writeln("Total Belanja Yang Harus di Bayar :"+jumlah10+"<br>")
}
if(belanja > 150000){
  diskon25 = 0.25 * belanja
  jumlah25 = belanja - diskon25
  document.writeln("Jumlah Belanja Anda :"+belanja+"<br>")
  document.writeln("Anda Tidak Mendapatkan Diskon 25%"+"<br>")
  document.writeln("Total Belanja Yang Harus di Bayar :"+jumlah25+"<br>")
}
if(belanja < 0){
  document.writeln("Total Belanja Yang Anda Masukan Salah"+"<br>")
}