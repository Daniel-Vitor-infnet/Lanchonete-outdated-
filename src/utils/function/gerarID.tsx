function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
}

function gerarID(tipo?:string) {
    const data = Date.now();
    const numeroAleatorio1 = gerarNumeroAleatorio();
    const numeroAleatorio2 = gerarNumeroAleatorio();

    let resultadoID:any = "undefined";
    let resultadoID2 = "undefined";


    if (typeof tipo === "string") {
        resultadoID = Number(`${numeroAleatorio1}${data}${numeroAleatorio2}`)
        resultadoID2 = `${numeroAleatorio1}${tipo}${data}${numeroAleatorio2}`
    } else {
        resultadoID = Number(`${numeroAleatorio1}${data}${numeroAleatorio2}`)
    }

    return {
        id: resultadoID,
        id2: resultadoID2,
    }
    
}

