import { useEffect, useState } from "react";
import { useAppContext } from "@/Context";
import debounce from 'lodash.debounce';

type Dispositivo = {
  desktop?: any;
  laptop?: any;
  tablet?: any;
  mobileLarge?: any;
  mobile?: any;
  mobileSmall?: any;
};

export function definirPorTamanhoTela({ desktop, laptop, tablet, mobileLarge, mobile, mobileSmall }: Dispositivo): any {
  const valores = [desktop, laptop, tablet, mobileLarge, mobile, mobileSmall];

  // Preencher valores nulos ou undefined
  const preenchidos: any[] = valores.map(x => x === undefined ? null : x);

  // Se só passou 1 valor, aplicar para todos
  const definidos = preenchidos.filter(v => v !== null);
  if (definidos.length === 1) {
    preenchidos.fill(definidos[0]);
  }

  // Propagar valores para frente
  for (let i = 0; i < preenchidos.length; i++) {
    if (preenchidos[i] === null && i > 0) {
      preenchidos[i] = preenchidos[i - 1];
    }
  }

  const width = useWindowWidth(); // hook customizado

  if (width >= 1366) return preenchidos[0]; // desktop
  if (width >= 1024) return preenchidos[1]; // laptop
  if (width >= 768) return preenchidos[2];  // tablet
  if (width >= 576) return preenchidos[3];  // mobileLarge
  if (width >= 400) return preenchidos[4];  // mobile
  return preenchidos[5];                    // mobileSmall
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

