function raddoppia(n){
     return n*2;
}

function incrementa(n){
     return n+1
}

function applica(f, n){
    return f(n)
}

function applicaNVolte(f,n,x){
    let risultato = x;

    for(let i=0; i<n; i++){
        risultato= f(risultato)
    }
    return risultato
}

console.log(applicaNVolte(raddoppia, 10, 1))
console.log(applicaNVolte(incrementa, 3, 7))
console.log(applicaNVolte(incrementa, 0, 7))