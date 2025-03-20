import { useEffect, useState } from "react";

interface Valores {
    valor1: any;
    valor2?: any;
    valor3?: any;
    valor4?: any;
}


export function obterTamanhoTela(
    valor1: any,
    valor2: any = valor1,
    valor3: any = valor1,
    valor4: any = valor1
): Valores {

    const resuction = useWindowWidth();

    switch (true) {
        case resuction >= 1366:
            return valor1
        case resuction >= 1024:
            return valor2
        case resuction >= 768:
            return valor3
        case resuction >= 576:
            return valor4
        default:
            return valor1
    }

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