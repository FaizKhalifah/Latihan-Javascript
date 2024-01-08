const request =new XMLHttpRequest;
request.open("GET","https://api.artic.edu/api/v1/swagger.json");
request.send();

request.addEventListener('readystatechange',()=>{
    if(request.readyState===4 && request.status===200){
        console.log("Data bisa di fetch");
        console.log(request.responseText);
    }else if(request.readyState===4){
        console.log("Data tidak dapat di-fetch")
    }
})
