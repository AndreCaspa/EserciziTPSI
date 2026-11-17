const convertiBtn = document.getElementById("converti")
const valoreBox = document.getElementById("valore")
const convMenu = document.getElementById("conversione")
const risultatoElem = document.getElementById("risultato")
const erroreBox = document.getElementById("errore")

const conversioni = {
    'km-m': (km) => km * 1000,
    'm-km': (m) => m / 1000,
    //a * 9 / 5 + 32 le parentesi non sono necessarie
    'C-F': (c) => ((c * 9) / 5) + 32,
    'F-C': (f) => ((f - 32)*5) / 9,
    'ore-min': (h) => h * 60,
    'day-ore': (d) => d * 24
}

function choose(map, key){
    if(map[key] === undefined) throw new Error("Not supported: " + key)
    return map[key]
}

function performConverstion(){
    try{     
        if(valoreBox.value === "") throw new Error("Inserire una valore")   
        const convToAply = choose(conversioni, convMenu.value)
        const res = convToAply(valoreBox.value)
        risultatoElem.textContent = ""
        risultatoElem.textContent = res
    }catch(error){
        risultatoElem.textContent = ""
        erroreBox.textContent = error.message
    }
}

valoreBox.addEventListener("input", performConverstion)
convMenu.addEventListener("change", performConverstion)
convertiBtn.addEventListener("click", performConverstion)

