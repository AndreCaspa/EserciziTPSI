function positivo(x){
    return x > 0
}

function sottoMille(x){
    return x < 1000
}

function verificatTutti(valore, controlli){
    for(let i=0; i<valore.length; i++){
        if(!controlli[i](valore))
            return false
    }
    return true
}

function isNumeroValido(x){
    return typeof x === "number" && !Number.isNaN(x)
}

const controlliCarburante = [isNumeroValido, positivo, sottoMille];

console.log(verificaTutti(450, controlliCarburante));
console.log(verificaTutti(-3, controlliCarburante));
console.log(verificaTutti("450", controlliCarburante));
console.log(verificaTutti(NaN, controlliCarburante));
console.log(verificaTutti(5000, controlliCarburante));
console.log(verificaTutti(450, []));