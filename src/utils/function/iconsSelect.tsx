import IconMdi from '@mdi/react';
import iconesMdi from '@/libs/mdi';




export default function iconSelect(icon: any, tamanho: any) {

    const tamanhoMap: Record<string, [number, string]> = {
        pequeno: [1, "P"],
        medio: [2, "M"],
        grande: [3, "G"],
      };

    const [libs, categoria, item]: [string, string, string] = icon.split("-", 3) as [string, string, string];

    const tamanhoPerso = typeof tamanho === "number" ? tamanho : tamanhoMap[tamanho][0];


    switch (libs) {
        case "mdi":
            return <IconMdi path={iconesMdi[categoria][item]} size={tamanhoPerso} />
        case 'mui':
            return null;
        default:
            return null;
    }
}


