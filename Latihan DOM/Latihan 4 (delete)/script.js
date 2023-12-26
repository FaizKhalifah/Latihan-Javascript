let hapus = document.querySelectorAll(".kumpulanNama .hapus");

hapus.forEach(function(i){
    i.addEventListener('click',function(e){
        const list = e.target.parentElement;
        list.parentNode.removeChild(list);
    })
})
