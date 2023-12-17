const mahasiswa = new Map();
mahasiswa.set(225,"Faiz");
mahasiswa.set(226,"Ravi");
mahasiswa.set(227,"Bagas");
mahasiswa.set(228,"Ghaza");
document.write(mahasiswa.get(225));
document.write("<br>");
for(i of mahasiswa.entries()){
    document.write(i);
    document.write("<br>");
}
