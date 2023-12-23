const mahasiswa1={
    nama:"Faiz",
    nim:225150,
    asal:'Bekasi',
    keminatan:'cybersecurity'
};

let informasi="";
for(i in mahasiswa1){
    informasi+=(mahasiswa1[i] + "--");
}
document.write(informasi);
document.write("<br>")
mahasiswa1.tempatLahir='Bandung';
informasi+=mahasiswa1.tempatLahir;
document.write(informasi);
