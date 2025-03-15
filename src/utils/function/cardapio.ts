function limitarTexto(texto: string, limite = 48) {
    return texto.length > limite ? texto.slice(0, limite) + "...mais" : texto;
}

console.log(limitarTexto("Sorvete de pistache, sabor único e sofisticado."));
console.log(limitarTexto("Chocolate"));