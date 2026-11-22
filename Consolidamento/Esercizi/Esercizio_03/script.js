const parolaElem = document.getElementById("parola")
const LinguaBox = document.getElementById("lingua")
const TraduciBtn = document.getElementById("traduci")
const traduzioneElem = document.getElementById("traduzione")
const erroreElem = document.getElementById("errore")

const traduzioniEn = {
    ciao: "hello",
    casa: "house",
    gatto: "cat",
    cane: "dog",
    libro: "book"
}

const traduzioniSp = {
    ciao: "hola",
    casa: "casa",
    gatto: "gato",
    cane: "perro",
    libro: "libro"
}

const traduzioniFr = {
    ciao: "bonjour",
    casa: "maison",
    gatto: "chat",
    cane: "chien",
    libro: "livre"
}

const dizionari = {
    en : traduzioniEn,
    es : traduzioniSp,
    fr : traduzioniFr,
}

function Traduci() {
    let parola = parolaElem.value;
    let lingua = LinguaBox.value;

    if (!dizionari[lingua]) {
        traduzioneElem.textContent = "";
        erroreElem.textContent = "errore: Non supportato: " + lingua;
        return;
    }
    if (dizionari[lingua][parola]) {
        traduzioneElem.textContent = dizionari[lingua][parola];
        erroreElem.textContent = "";
    } else {
        traduzioneElem.textContent = "";
        erroreElem.textContent = "errore: Non supportato: " + parola;
    }
}

TraduciBtn.addEventListener("click", Traduci)
parolaElem.addEventListener("input", Traduci)
LinguaBox.addEventListener("change", Traduci)
