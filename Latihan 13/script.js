//Latihan form
function fungsiNilai(){
    let x = document.getElementById("nilai").value;
    let y =document.getElementById("pesan");

    if(isNaN(x)){
        y.innerText=("Input harus berupa angka");
    }
    else{
        if(x>100){
            y.innerText="Nilai yang diinput teralu tinggi";
        } else if(x>90){
            y.innerText="Selamat kamu mendapat A";
        }else if(x>70){
            y.innerText="Selamat kamu mendapat B";
        }else if(x>50){
            y.innerText="Kamu mendapat C, coba lagi";
        }
        else{
            y.innerText="Kamu gagal ujian ini";
        }
    }
 
}
