const perintah = (callback)=>{
    const request =new XMLHttpRequest;
    request.open("GET","https://api.artic.edu/api/v1/swagger.json");
    request.send();
    
    request.addEventListener('readystatechange',()=>{
        if(request.readyState===4 && request.status===200){
            callback(undefined,request.responseText);//error undefined karena tidak ada
        }else if(request.readyState===4){
            callback('Data tidak bisa di-fetch',undefined);//memasukkan perintah error
        }
    })
}


perintah((err, data)=>{ //Dua argumen untuk callback
    if(err){
        console.log(err);
    }else{
        console.log('fetch berhasil');
        console.log(data);
    }
});

