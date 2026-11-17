const convertiBtn = document.getElementById("converti")
const valoreLab = document.getElementById("valore")
const conversioneTab = document.getElementById("conversione")
const risultatoP = document.getElementById("risultato")
const erroreP = document.getElementById("errore")

const conversione = {
    'km-m': (a) => a * 1000,
    'm-km': (a) => a / 1000,
    //a * 9 / 5 + 32
    'C-F': (a) => ((a * 9) / 5) + 32,
    'F-C': (a) => ((a - 32)*5) / 9,
    'ore-min': (a) => a * 60
}

function risultato (f, a){
    return f(a)
}

convertiBtn.addEventListener("click", () => {
    const a = Number(valoreLab.value)
    const conversioneScelta = conversione [conversioneTab.value]
    const ris = risultato(conversioneScelta, a)
    risultatoP.textContent = ris   
})
