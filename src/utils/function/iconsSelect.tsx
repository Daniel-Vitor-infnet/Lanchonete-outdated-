import IconMdi from '@mdi/react';
import iconesMdi from '@/libs/mdi';
import iconesMUI from '@/libs/mui/icons';




export default function iconSelect(icon: string, tamanho?: any, cor?: any, stylesPerson?: any) {



    const [libs, categoria, item]: [string, string, string] = icon.split("-", 3) as [string, string, string];

    let IconeEscolhido = null;

    switch (libs) {
        case "mdi":
            IconeEscolhido = iconesMdi[categoria][item];
            return <IconMdi path={IconeEscolhido} size={tamanho || 1.0} color={cor || "#000000"} />
        case 'mui':
            IconeEscolhido = iconesMUI[categoria][item];
            return <IconeEscolhido className={stylesPerson} sx={{ fontSize: `${String(tamanho)}rem` || "1.0rem", color: cor || "#000000" }}/>
        default:
            return null;
    }
}


