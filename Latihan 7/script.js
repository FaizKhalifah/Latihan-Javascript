//Pendalaman if else
const tanggal = new Date();
let hari = tanggal.getDay();
if(hari==0){
    document.writeln("Sekarang adalah hari Ahad");
}else if(hari==1){
    document.writeln("Sekarang adalah hari senin");
}else if(hari==2){
    document.writeln("Sekarang adalah hari Selasa");
}else if(hari==3){
    document.writeln("Sekarang adalah hari Rabu");
}else if(hari==4){
    document.writeln("Sekarang adalah hari Kamis");
}else if(hari==5){
    document.writeln("Sekarang adalah hari Jumat");
}else if(hari==6){
    document.writeln("Sekarang adalah hari Sabtu");
}