// biodata.js

const biodata = {
    nama: "Muhammad Adi Satria Ferdiansah",
    tempatLahir: "Garut",
    tanggalLahir: "16 September 2002",
    alamat: "DESA Cihideung Ilir RT.02 RW. 04 "
};

function getNama() {
    return biodata.nama;
}

function getTempatLahir() {
    return biodata.tempatLahir;
}

function getTanggalLahir() {
    return biodata.tanggalLahir;
}

function getAlamat() {
  return biodata.alamat;
}

module.exports = {
    getNama,
    getTempatLahir,
    getTanggalLahir,
    getAlamat
};
