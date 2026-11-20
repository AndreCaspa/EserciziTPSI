function celsiustoKelvin(c){
    return c + 273.15
}

function applicaATutti (lista, f){
    const risultato = []
    for(let i=0; i<lista.length; i++){
       risultato.push(f(lista[i]))
    }
    return risultato
}

function raddoppia(n) {
    return n * 2;
}

function incrementa(n) {
    return n + 1;
}

console.log(applicaATutti([1, 2, 3], raddoppia));
console.log(applicaATutti([-270, -100, 0, 25], celsiustoKelvin));
console.log(applicaATutti([], incrementa));