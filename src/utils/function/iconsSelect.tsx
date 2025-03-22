import IconMdi from '@mdi/react';
import iconesMdi from '@/libs/mdi';
import iconesMUI from '@/libs/mui/icons';




export default function iconSelect(icon: string, tamanho?: any, cor?: string) {



    const [libs, categoria, item]: [string, string, string] = icon.split("-", 3) as [string, string, string];

    let IconeEscolhido = null;

    switch (libs) {
        case "mdi":
            IconeEscolhido = iconesMdi[categoria][item];
            return <IconMdi path={IconeEscolhido} size={tamanho} />
        case 'mui':
            IconeEscolhido = iconesMUI[categoria][item];
            return <IconeEscolhido sx={{ fontSize: String(tamanho) || "1.0", color: cor || "#666666" }}/>
        default:
            return null;
    }
}


