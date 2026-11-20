function raddoppia(n){
    return n*2;
}

function incrementa(n){
    return n+1
}


function applica(f, n){
    return f(n)
}

console.log(applica(raddoppia, 21))
console.log(applica(incrementa, 41))
console.log(applica(raddoppia, applica(incrementa, 4)))