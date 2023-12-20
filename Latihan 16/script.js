class Mahasiswa{
    constructor(nama,nim){
        this.nama=nama;
        this.nim=nim;
    }

    angkatan(){
        let angkatan=this.nim.toString();
        return angkatan.slice(0,2);
    }
}

let mahasiswa1= new Mahasiswa("Faiz",225150);
let mahasiswa2=new Mahasiswa("Ravi",21551);
document.write(mahasiswa1.nama);
document.write("<br>");
document.write(mahasiswa1.angkatan());
document.write("<br>");
document.write(mahasiswa2.nama);
document.write("<br>");
document.write(mahasiswa2.angkatan());