const fungsi1 = function(a, b){
    return a+b;
}

document.write(fungsi1(5,7));
document.write("<br>");


//self invoke
(function(){
    document.write("Ini adalah fungsi self invoke");
    document.write("<br>");
})();


//arrow function
const fungsi2 = (a,b)=>a*b;

// Sama saja dengan var x = function(a,b){
//     return a*b;
// }

document.write(fungsi2(5,10));
document.write("<br>");

//function call
const orang = {
    namaLengkap:function(){
        document.write(`${this.namaAwal} ${this.namaAkhir} <br>`);
    }
}

const orang1={
    namaAwal:"Faiz",
    namaAkhir:"Alamsyah"
}

orang.namaLengkap.call(orang1);