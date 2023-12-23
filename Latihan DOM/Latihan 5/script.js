//Event bubbling
const ul = document.querySelector(".kumpulanNama ul");
ul.addEventListener('click',function(e){
    if(e.target.className=="hapus"){
        ul.removeChild(e.target.parentElement);
    }
})