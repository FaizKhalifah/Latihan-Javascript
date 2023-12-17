//Latihan object Date
const tanggal = new Date();
document.write(tanggal);
document.write("<br>");
const tanggal_lahir = new Date("2004-04-13");
document.write(tanggal_lahir);
document.write("<br>");
const tanggal_Masuk= new Date();
tanggal_Masuk.setDate(30);
tanggal_Masuk.setMonth(8);
tanggal_Masuk.setFullYear(2022);
document.write(`Aku masuk kuliah pada tanggal ${tanggal_Masuk}`)
document.write("<br>");
document.write(`Tulisan yang lebih rapih : `);
document.write("<br>");
document.write(tanggal.toDateString());
document.write("<br>");
document.write(tanggal_lahir.toDateString());
document.write("<br>");
document.write(`Aku masuk kuliah pada tanggal ${tanggal_Masuk.toDateString()}`)