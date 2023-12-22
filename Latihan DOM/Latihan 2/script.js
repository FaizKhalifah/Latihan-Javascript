let nama =document.querySelectorAll("li");
for(i =0;i<nama.length;i++){
    console.log(nama[i].textContent);
}
nama.forEach(function(i){
    document.write(i.textContent);
})