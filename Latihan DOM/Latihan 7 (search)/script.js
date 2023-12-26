const formSearch = document.forms["formSearch"].querySelector("input");
formSearch.addEventListener('keyup',function(e){
    const masukan = e.target.value.toLowerCase();
    const kumpulanNama = document.querySelectorAll("li");
    kumpulanNama.forEach(function(i){
        const nama = i.innerText;
        if(nama.toLowerCase().indexOf(masukan)!=-1){
            i.style.display="block";
        }else{
            i.style.display="none";
        }
    })
})
