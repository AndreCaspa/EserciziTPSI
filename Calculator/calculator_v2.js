const calcolaBtn = document.getElementById("calcola")
const n1Elem= document.getElementById("n1")
const n2Elem= document.getElementById("n2")
const operazioneElem= document.getElementById("Operazione")
const resElem = document.getElementById("risultato")

const operation =  {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '**': (a, b) => a ** b,
    '/': (a,b) => {
        if(b===0) throw new Error("Div by zero")    
        return a/b    
    } 
}

function calcola(f,a,b){
    return f(a,b)
}

calcolaBtn.addEventListener("click", function(){
    const a = Number(n1Elem.value)
    const b = Number(n2Elem.value)

    const chosenOp = operation[operazioneElem.value]

    try{    
        const res = calcola(chosenOp, a,b)
        resElem.textContent = res

    }catch(error){
         resElem.textContent = error.message
    }
})