function isNumeroValido(x){
    return typeof x === "number" && !Number.isNaN(x)
}

function sommaLetture(letture){
    let somma = 0
    for(let i=0; i<letture.length; i++){
        if(isNumeroValido(letture[i])){
        somma += letture[i]
        }   
    }
    return somma   
}

console.log(sommaLetture([10, 20, 30]));
console.log(sommaLetture([10, "20", 5, NaN, null, 7.5, true]));
console.log(sommaLetture(0));