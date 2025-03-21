export function redimencionarTexto(texto: string, limite: number, tipo?: string) {
    if (texto.length >= limite) {
      return {
        texto: texto.slice(0, limite),
        sufixo: tipo === "pontos+" ? "...mais" : "...",
      };
    }
    return {
      texto,
      sufixo: "",
    };
  }
  