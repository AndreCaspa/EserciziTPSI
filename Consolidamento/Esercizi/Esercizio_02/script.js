const valElem = document.getElementById("valore") // riferimento al tag con id valore
const avvisoElem = document.getElementById("avviso")

let counter = 0; 

// HOF funzione che restituisce una funzione
function cambiaDi(n){
    return () => {
        controllo (counter += n)
        valElem.textContent = counter    
    }
}

function azzera(){
    counter = 0
    valElem.textContent = counter
}

function controllo(n2){
    if(n2 < 0 || n2 > 100){
        avvisoElem.textContent = "Limite raggiunto"
        return
    }
    counter = n2
    valElem.textContent = counter
    avvisoElem.textContent = " "
}

function gestoreTasti(mappa){
    return function (e){
        const azione = mappa[e.key]
        if(azione !== undefined) azione()
    }
}

const tasti = {
    ArrowUp: cambiaDi(1),
    ArrowDown: cambiaDi(-1),
    PageUp: cambiaDi(10),
    PageDown: cambiaDi(-10),
    Escape: azzera
}

document.getElementById("meno10").addEventListener("click", cambiaDi(-10))
document.getElementById("piu10").addEventListener("click", cambiaDi(+10))
document.getElementById("piu1").addEventListener("click", cambiaDi(+1))
document.getElementById("meno1").addEventListener("click", cambiaDi(-1))
document.getElementById("azzera").addEventListener("click", azzera)

document.addEventListener("keydown", gestoreTasti(tasti))
