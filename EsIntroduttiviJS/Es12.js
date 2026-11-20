function componi(f,g){
    return (x) => {
        return f(g(x))
    }
}

function raddoppia(n) {
    return n * 2;
}

function incrementa(n) {
    return n + 1;
}

const incPoiRaddoppia = componi(raddoppia, incrementa)
const raddoppiaPoilnc = componi(incrementa, raddoppia)

console.log(typeof incPoiRaddoppia);
console.log(incPoiRaddoppia(5));
console.log(raddoppiaPoilnc(5));
console.log(componi(raddoppia, raddoppia)(3));