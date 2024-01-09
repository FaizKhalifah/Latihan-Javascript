const perintah = (callback)=>{

    return new Promise((resolve, reject)=>{
        const request =new XMLHttpRequest;
        request.open("GET","https://api.artic.edu/api/v1/swagger.json");
        request.send();
        
        request.addEventListener('readystatechange',()=>{
            if(request.readyState===4 && request.status===200){
                resolve(request.responseText);
            }else if(request.readyState===4){
                reject('error mendapatkan data');
            }
        })
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

perintah();