const calcolaBtn = document.getElementById("calcola")
const sumBtn = document.getElementById("SumBtn")
const subBtn = document.getElementById("SubBtn")
const divBtn = document.getElementById("DivBtn")
const powBtn = document.getElementById("PowBtn")

const n1Elem = document.getElementById("n1")
const n2Elem = document.getElementById("n2")
const opElem = document.getElementById("operazione")
const resElem = document.getElementById("risultato")
const erroElem = document.getElementById("error")


function executeOperation(a, simbolo, b){
    try {
        valida(regole, a , b)
        const n1 = Number(n1Elem.value)
        const n2 = Number(n2Elem.value)

        const chosenOp = scegliOperazione(simbolo)
        const res = calcola(chosenOp, n1, n2)
        erroElem.textContent = " "
        resElem.textContent = format(n1, simbolo, n2, res)
    } catch (error) {
        erroElem.textContent = error.message
    }
}

function forOperation(sym) {
    return function(){
        executeOperation(n1Elem.value, sym, n2Elem.value)
    }
   
}

sumBtn.addEventListener("click", forOperation(sumBtn.textContent))
subBtn.addEventListener("click", forOperation(subBtn.textContent))
divBtn.addEventListener("click", forOperation(divBtn.textContent))
powBtn.addEventListener("click", forOperation(powBtn.textContent))

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => {
        if (b === 0) throw new Error("Div by zero")
        return a / b
    },
    '**': (a, b) => Math.pow(a, b),
    'min': (a, b) => Math.min(a, b),
    'max': (a, b) => Math.max(a, b)
}
const LIMIT = 100000 
const regole = [
    (a,b) => {
        if(a === "" || b === "") throw new Error("inserire entrambi i numeri")
    },
    (t1,t2) => {
        if(t1>LIMIT || t1 < -LIMIT || t2>LIMIT || t2 < -LIMIT )
            throw new Error("numeri troppo grandi")
    }
]

function format(a, simbolo, b, res){
    return a+" "+simbolo+" "+b+" = "+ res
}

function valida(regole, t1, t2){
    for (const regola of regole)
        regola(t1,t2)   
}

function scegliOperazione(simbolo){
    const v = operations[simbolo]
    if(v===undefined) throw new Error("operazione non supportata: " + simbolo)
    return v
}

function calcola(f, a, b) {
    return f(a, b)
}

function update () {
   executeOperation(n1Elem.value, opElem.value, n2Elem.value)
}

calcolaBtn.addEventListener("click", update)
opElem.addEventListener("change", update)
n1Elem.addEventListener("input", update)
n2Elem.addEventListener("input", update)