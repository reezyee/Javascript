const methodAnggota = {
  naikKelas: function(naik){
    this.kelas += naik;
    console.log(`Selamat Naik Kelas ${this.nama}, ke kelas ${this.kelas}`);
  },
  
  nambahUmur: function(nambah){
    this.umur += nambah;
    console.log(`Selamat Ulang Tahun ${this.nama}, yang ke ${this.umur}`);
  }
};


function Anggota(nama, kelas, umur){
  let anggota = Object.create(methodAnggota);
  anggota.nama = nama;
  anggota.kelas = kelas;
  anggota.umur = umur;

  return anggota;
}

let anggota1 = Anggota('Dhiyaul',11,15);