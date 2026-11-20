function raddoppia(n){
    return n*2;
}

function incrementa(n){
    return n+1
}


function applica(f, n){
    return f(n)
}

function applicaDueVolte(f,x){
    return f(f(x));
}   

console.log(applicaDueVolte(raddoppia, 5))
console.log(applicaDueVolte(incrementa, 5))
console.log(applicaDueVolte(raddoppia, "3"))
