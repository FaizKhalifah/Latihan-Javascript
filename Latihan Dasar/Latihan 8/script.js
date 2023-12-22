//Latihan for loop
for(i=0;i<10;i++){
    document.write("Halo namaku Faiz");
    document.write("<br>");
}
document.write("<br>");

//Fungsi sigma
let batas=0;
document.writeln(`Nilai awal adalah ${batas}`);
document.write("<br>");
for(i=0;i<10;i++){
    batas+=i;
    document.writeln(`Nilai sekarang adalah ${batas}`);
    document.write("<br>");
}
document.writeln(`Nilai akhir adalah ${batas}`);
document.write("<br>");
document.write("<br>");
//Fungsi faktorial
let batas_faktorial = 5;
document.write(`Nilai awal adalah ${batas_faktorial}`)
document.write("<br>");
for(i=batas_faktorial;i>1;i--){
        batas_faktorial*=(i-1); 
}
document.write("<br>");
document.write(`Nilai akhir adalah ${batas_faktorial}`)