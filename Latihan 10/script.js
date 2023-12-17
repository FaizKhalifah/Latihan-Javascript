const prodi = new Set();
prodi.add("Teknik informatika");
prodi.add("Teknik komputer");
prodi.add("Sistem informasi");
prodi.add("Teknologi informasi");
prodi.add("Pendidikan teknologi informasi");

prodi.forEach(function(value){
    document.writeln(value);
    document.writeln("<br>");
})
//Menggunakan iterator
document.writeln("<br>");
for(i of prodi.values()){
    document.writeln(i);
    document.writeln("<br>");
}
document.writeln("<br>");
const mahasiswa = ["Faiz", "Faiz", "Yasin", "Zufar", "Bagas", "Davin", "Davin"];
for (i in mahasiswa){
    document.writeln(mahasiswa[i]);
    document.writeln("<br>");
}
document.writeln("<br>");
document.writeln("<br>");

const mahasiswa2=new Set(mahasiswa);
for(i of mahasiswa2.values()){
    document.writeln(i);
    document.writeln("<br>");
}