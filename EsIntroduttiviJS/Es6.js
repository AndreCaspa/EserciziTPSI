function isFunzione(x) {
    return typeof x === "function";
}

function isNumeroValido(x) {
    return typeof x === "number" && !Number.isNaN(x);
}

// Esercizio 6
function applicaSicuro(f, x) {
    if (!isFunzione(f)) {
        return "ERRORE: non è una funzione"; 
    }
    if (!isNumeroValido(x)) {
        return "ERRORE: valore non numerico";
    }

    return f(x);
}

console.log(applicaSicuro(raddoppia, 4));
console.log(applicaSicuro(raddoppia(4), 4));
console.log(applicaSicuro(raddoppia, "4"));
console.log(applicaSicuro(incrementa, NaN));