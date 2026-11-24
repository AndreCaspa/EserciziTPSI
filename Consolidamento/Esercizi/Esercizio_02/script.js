const resElem = document.getElementById("valore") // riferimento al tag con id valore
const avvisoElem = document.getElementById("avviso")

let counter = 0 

const MIN = 0 
const MAX = 100

// HOF funzione che restituisce una funzione
function cambiaDi(n){ 
    return () => {
        controllo(counter + n)
    }
}

function controllo (newValue){
    if(newValue < MIN || newValue > MAX){
        avvisoElem.textContent = "Limite raggiunto"
        return
    }
    counter = newValue
    resElem.textContent = counter;
    avvisoElem.textContent = ""
    
}

/*function azzera (){
    counter = 0
    resElem.textContent = counter
    avvisoElem.textContent = ""
}*/

//fa la stessa cosa del funzione azzera commentata solo scritto con meno codice e facendo riferimento allla funzione controllo
function azzera (){
    controllo(0)
}

const keyMap = {
    ArrowUp: cambiaDi(1),
    ArrowDown: cambiaDi(-1),
    PageUp: cambiaDi(+10),
    PageDown: cambiaDi(-10),
    Escape: azzera
}

//ArrowUp etc.. sono tutti predefiniti js anche il .key

function keyManager(keyMap){
    return (event) => { 
        const userAction = keyMap[event.key]
        if(userAction !== undefined) userAction()
    }
}

document.getElementById("meno10").addEventListener("click", cambiaDi(-10))
document.getElementById("piu10").addEventListener("click", cambiaDi(+10))
document.getElementById("meno1").addEventListener("click", cambiaDi(-1))
document.getElementById("piu1").addEventListener("click", cambiaDi(+1))
document.getElementById("azzera").addEventListener("click", azzera)

document.addEventListener("keydown", keyManager(keyMap))
