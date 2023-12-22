//Latihan if else
let nilai =40;
if(nilai>80){
    document.write('Selamat kamu mendapat nilai A');
} else if(nilai>70){
    document.writeln('Kamu mendapat nilai B, pertahankan');
}
else{
    document.writeln('Coba lagi di kesempatan berikutnya');
}

document.write("<br>");

//Latihan Switch
let semester = 4;
    switch(semester){
        case 1 :
            document.write('Kamu adalah mahasiswa semester 1');
            break;
        case 2 :
            document.writeln('Kamu adalah mahasiswa semester 2');
            break;
        case 3 : 
            document.writeln('Kamu adalah mahasiswa semester 3');
            break;
        case 4 :
            document.writeln('Kamu adalah mahasiswa semester 4');
            break;
    }