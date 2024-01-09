function tampilHasil(hasil){
    document.writeln(hasil);
    document.writeln("<br>");
}

function penjumlahan(angka1, angka2,callback){
    total = angka1+angka2;
    callback(total);
}

const pengurangan = (angka1,angka2,callback)=>{
    hasil=angka1-angka2;
    callback(hasil);
}

const fungsiPositif = function(x){
    return (x>=0);
};


const array =[1,-7,8,1,9,-9,-11,12,15,13];

const arrayPositif = (array,callback,print)=>{
    const arrayBaru =[];
    for (i in array){
        if(callback(array[i])){
            arrayBaru.push(array[i]);
        }
    }
    print(arrayBaru);
}

penjumlahan(10,15,tampilHasil);
pengurangan(20,7,tampilHasil);
arrayPositif(array,fungsiPositif,tampilHasil);