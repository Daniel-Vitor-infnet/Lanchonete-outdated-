import { useEffect, useState } from "react";

export function obterTamanhoTela(valor1?: any, valor2?: any, valor3?: any, valor4?: any): any {
    // Converte parâmetros não passados (undefined) em null
    let valores: any[] = [valor1, valor2, valor3, valor4].map(x => x === undefined ? null : x);
  
    // Se só passar um parâmetro, os outros assumem o mesmo valor
    if (arguments.length === 1) {
      valores = [valores[0], valores[0], valores[0], valores[0]];
    }
  
    // Se o primeiro for null, procura o primeiro valor não nulo nos próximos
    if (valores[0] === null) {
      for (let i = 1; i < valores.length; i++) {
        if (valores[i] !== null) {
          valores[0] = valores[i];
          break;
        }
      }
    }
  
    // Para os demais, se for null, pega o valor do anterior
    for (let i = 1; i < valores.length; i++) {
      if (valores[i] === null) {
        valores[i] = valores[i - 1];
      }
    }
  
    // Exemplo fixo de resolução – substitua conforme sua lógica
    const resuction = useWindowWidth();
    if (resuction >= 1366) return valores[0];
    if (resuction >= 1024) return valores[1];
    if (resuction >= 768)  return valores[2];
    if (resuction >= 576 || resuction < 576)  return valores[3];
  }
  


export function useWindowWidth(): number {
  // Define o estado inicial com a largura atual da tela
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    // Função que atualiza o estado somente quando a largura mudar
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Adiciona o listener para eventos de resize
    window.addEventListener("resize", handleResize);

    // Cleanup: remove o listener ao desmontar o componente
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Executa apenas uma vez ao montar o componente

  return width;
}


export function arroz() {
    return 'arroz'
}