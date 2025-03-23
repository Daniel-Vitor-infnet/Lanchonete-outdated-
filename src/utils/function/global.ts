import { useEffect, useState } from "react";
import { useAppContext } from "@/Context";
import debounce from 'lodash.debounce';


export function obterTamanhoTela(valor1?: any, valor2?: any, valor3?: any, valor4?: any, valor5?: any): any {
  // Converte parâmetros não passados (undefined) em null
  let valores: any[] = [valor1, valor2, valor3, valor4, valor5].map(x => x === undefined ? null : x);

  // Se só passar um parâmetro, os outros assumem o mesmo valor
  if (arguments.length === 1) {
    valores = [valores[0], valores[0], valores[0], valores[0], valores[0]];
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
  if (resuction >= 768) return valores[2];
  if (resuction >= 576) return valores[3];
  if (resuction >= 400 || resuction < 400) return valores[4];
}


export const footerVisibility = (isVisible: boolean) => {
  const { setHideFooter } = useAppContext();

  useEffect(() => {
    setHideFooter(!isVisible);
    return () => setHideFooter(false);
  }, [isVisible, setHideFooter]);
};




export function useWindowWidth(): number {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWidth(window.innerWidth);
    }, 200);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel();
    };
  }, []);

  return width;
}

