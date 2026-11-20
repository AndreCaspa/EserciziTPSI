function nomeOppureDefault(nome){
    return nome || "Sconosciuto"
}

console.log(nomeOppureDefault("Vega"));
console.log(nomeOppureDefault(""));
console.log(nomeOppureDefault(undefined));
console.log(nomeOppureDefault(0));