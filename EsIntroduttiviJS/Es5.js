function isNumeroValido(x){
    return typeof x === "number" && !Number.isNaN(x)
}

function isStringaNonVuota(x){
    return typeof x === "string" && x.length > 0 
}

function isFunzione(x){
    return typeof x === "function" 
}

function raddoppia(n){
    return n*2;
}

console.log(isNumeroValido(3));
console.log(isNumeroValido("3"));
console.log(isNumeroValido(NaN));
console.log(isStringaNonVuota("Orione"));
console.log(isStringaNonVuota(""));
console.log(isStringaNonVuota(5));
console.log(isFunzione(raddoppia));
console.log(isFunzione(raddoppia(2)));