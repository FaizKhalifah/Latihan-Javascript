//Jam digital sederhana
function waktu(){
    var waktuSekarang = new Date();
    var jam=waktuSekarang.getHours();
    var menit = waktuSekarang.getMinutes();
    var detik = waktuSekarang.getSeconds();
    const hari =["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    var jam_Digital=`${jam} : ${menit} : ${detik} `;
    document.getElementById("jamDigital").innerText=jam_Digital;
    document.getElementById("hari").innerText=hari[waktuSekarang.getDay()];
}

setInterval(waktu,1000);
waktu();


