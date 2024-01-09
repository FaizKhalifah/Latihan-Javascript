let promise = new Promise(function(resolve,reject){
    let x = 15;

    if(x>5){
        resolve("Nilai di atas 5");
    }else if(x<5){
        reject("Nilai di bawah 5");
    }
});

promise.then(
    function(value){
        document.writeln(value);
    },
    function(err){
        document.writeln(err);
    }
)