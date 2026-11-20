function saluta(){
    return "Benvenuto a bordo"
}

const s1 = saluta;
const s2 = saluta();

console.log(typeof s1)
console.log(typeof s2)
console.log(s1())