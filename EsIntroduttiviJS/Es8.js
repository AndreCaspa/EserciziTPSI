function critico(livello){
    if(livello < 20) return true;
}

function tieniSolo(lista, criterio){
    const risultato = []
    for(let i=0; i<lista.length; i++){
        if(criterio(lista[i])){
            risultato.push(lista[i])
        }
    }
    return risultato;
}

function isNumeroValido(x){
    return typeof x === "number" && !Number.isNaN(x)
}

function isStringaNonVuota(x){
    return typeof x === "string" && x.length > 0
}

console.log(tieniSolo([80, 15, 42, 3, 19, 20], critico));
console.log(tieniSolo([5, "a", 7, NaN, "", 2], isNumeroValido));
console.log(tieniSolo(["Vega", "", "Orione", 3], isStringaNonVuota));
