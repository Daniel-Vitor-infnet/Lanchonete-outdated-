import { Card, CardContent, Typography, Grid2 } from "@/libs/mui";
import { obterTamanhoTela } from "@/utils/function";
import stylesPerso from "@/styles/cardapio/menu.module.scss";

interface MenuItensProps {
  menuCardapio?: any;
}


const MenuItens: React.FC<MenuItensProps> = ({menuCardapio}) => {




  return (
    <Grid2 >
      {/* {menuCardapio.map((item: any) => {
        return (
          <Grid2 key={item.id}>
            
          </Grid2>
        );
      })} */}
      <div className={stylesPerso['main-container']}>
        {menuCardapio.title}
      </div>
      
    </Grid2>
  );
};

export default MenuItens;
