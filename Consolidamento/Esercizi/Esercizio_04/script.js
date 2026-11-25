const casaElem = document.getElementById("casa")
const ospitiElem = document.getElementById("ospiti")
const avvisoElem = document.getElementById("avviso")
const casaBtn1 = document.getElementById("casa1")
const casaBtn2 = document.getElementById("casa2")
const casaBtn3 = document.getElementById("casa3")
const ospitiBtn1 = document.getElementById("ospiti1")
const ospitiBtn2 = document.getElementById("ospiti2")
const ospitiBtn3 = document.getElementById("ospiti3")
const annulaBtn = document.getElementById("annulla")


const punteggi = {
    casa : 0, 
    ospiti : 0
}


function punti (squadra, n){
    return () => {
        punteggi[squadra] += n
        casaElem.textContent = punteggi.casa
        ospitiElem.textContent = punteggi.ospiti

        //salviamo l'azione inversa nella cronologia (ci serve per la funzione annula punto B)
        cronologia.push(() => {
            punteggi[squadra] -= n
            casaElem.textContent = punteggi.casa
            ospitiElem.textContent = punteggi.ospiti
        })
    }
}

const cronologia = []

function annulla(){
    if(cronologia.length === 0 ){
        avvisoElem.textContent = "Niente da annullare"
        return
    }
    avvisoElem.textContent = ""
    const azioneInversa = cronologia.pop() // elimina l'ultima funzione dell'array e la esegue
    azioneInversa()
}

const keyMap = {
    "q" : punti("casa", +1),
    "w" : punti("casa", +2),
    "e" : punti("casa", +3), 
    "i" : punti("ospiti", +1),
    "o" : punti("ospiti", +2),
    "p" : punti("ospiti", +3),
}

function keyManager(keyMap){
    return (e) => {
        const UserUpPoint = keyMap[e.key]
        if(UserUpPoint !== undefined) UserUpPoint()
    }
}


casaBtn1.addEventListener("click", punti("casa", +1))
casaBtn2.addEventListener("click", punti("casa", +2))
casaBtn3.addEventListener("click", punti("casa", +3))

ospitiBtn1.addEventListener("click", punti("ospiti", +1))
ospitiBtn2.addEventListener("click", punti("ospiti", +2))
ospitiBtn3.addEventListener("click", punti("ospiti", +3))

annulaBtn.addEventListener("click", annulla)

addEventListener("keydown", keyManager(keyMap))
