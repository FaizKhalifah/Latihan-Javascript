const request= new XMLHttpRequest();

setTimeout(()=>{
request.open('GET','https://jsonplaceholder.typicode.com/posts'); //membuat request data dari endpoint
request.send(); //mengirim request
}, 5000);

request.addEventListener('readystatechange',()=>{
    console.log(request,request.readyState);
    if(request.readyState===4){
        document.write(request.responseText); //Menampilkan data json yang didapat
    }
})

