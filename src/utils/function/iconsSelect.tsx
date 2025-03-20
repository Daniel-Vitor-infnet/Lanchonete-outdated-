import IconMdi from '@mdi/react';
import iconesMdi from '@/libs/mdi';




export default function iconSelect(icon: any, tamanho: any) {

    const tamanhoMap: Record<string, [number, string]> = {
        muitoPequeno: [0.8, "P"],
        pequeno: [1, "P"],
        medio: [2, "M"],
        grande: [3, "G"],
      };

    const [libs, categoria, item]: [string, string, string] = icon.split("-", 3) as [string, string, string];

    switch (libs) {
        case "mdi":
            return <IconMdi path={iconesMdi[categoria][item]} size={tamanhoMap[tamanho][0]} />
        case 'mui':
            return null;
        default:
            return null;
    }
}


