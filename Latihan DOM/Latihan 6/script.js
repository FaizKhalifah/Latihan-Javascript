let ul = document.querySelector(".containerNama ul");

const formTambah = document.forms['formTambah'];
formTambah.addEventListener('submit',function(e){
    e.preventDefault();
    const valueNama = document.querySelector('input[type="text"]').value;
    console.log(valueNama);


    //Menambah DOM
    const nama = document.createElement('li');
    nama.innerText=valueNama;
    ul.appendChild(nama);
})

let hapus = document.querySelector('#hapusNama');
hapus.addEventListener('click',function(e){
    ul.removeChild(ul.lastChild);
})