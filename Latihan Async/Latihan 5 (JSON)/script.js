const response = new XMLHttpRequest;
response.open("GET", "data.json");
response.send();

response.addEventListener('readystatechange',()=>{
    if(response.readyState===4 && response.status===200){
       const data = JSON.parse(response.responseText);
        data.forEach(function(i) {
            document.writeln(`nama : ${i.nama} nim : ${i.NIM}`);
            document.writeln('<br>')
        });
    }else if(response.readyState===4){
        console.log("Error");
    }
   
})