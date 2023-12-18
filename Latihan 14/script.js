function fungsi(){
    let nama=document.getElementById("nama").value;
    let nilai=document.getElementById("nilai").value;
    let pesan = document.getElementById("pesan");
    try{
        if(!isNaN(nama)){
            throw "Nama tidak valid";
        }else{
            if(isNaN(nilai)){
                throw "Nilai harus berupa angka";
            }
            else{
                pesan.innerText=`Nilai dari mahasiswa bernama ${nama} adalah ${nilai}`;
            }
        }
    }catch(err){
        pesan.innerText=err;
    }

}