import { Grid2, Typography, Radio } from "@/libs/mui";
import { estoqueItemCardapio } from "@/utils/function";
import stylesPerso from "@/styles/cardapio/options.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { Versao } from "@/types";

interface OptionsVersionProps {
  versoes: Versao[];
  selected: Versao | null;
  onSelect: (version: Versao) => void;
}

const OptionsVersion: React.FC<OptionsVersionProps> = ({ versoes, selected, onSelect }) => {
  const selectedId = selected?.id || "";

  const handleChange = (versao: Versao) => {
    onSelect(versao);
  };

  return (
    <>
      {versoes.map((versao) => (
        <Grid2
          className={stylesPerso["main-container"]}
          key={versao.id}
          onClick={() => versao.stock && handleChange(versao)}
          style={{ cursor: versao.stock ? "pointer" : "default" }}
        >
          <Grid2 className={stylesPerso["img-complemento-container"]}>
            {estoqueItemCardapio({
              image: versao.image,
              altImg: versao.title,
              stylesPerso: stylesPerso["img-complemento"],
              stock: versao.stock,
            })}
          </Grid2>
          <Grid2 className={stylesPerso["item"]}>
            <Typography className={stylesPerso["item-title"]}>{versao.title}</Typography>
            <Typography className={stylesPerso["item-title"]}>
              R$ {versao.price.toFixed(2).replace(".", ",")}
            </Typography>
          </Grid2>
          <Grid2 className={stylesPerso["select-container"]}>
            {versao.stock ? (
              <Radio
                className={stylesPerso["select"]}
                checked={selectedId === versao.id}
                onChange={() => handleChange(versao)}
                value={versao.id}
                name="radio-buttons"
              />
            ) : (
              <CloseIcon className={stylesPerso["select"]} />
            )}
          </Grid2>
        </Grid2>
      ))}
    </>
  );
};

export default OptionsVersion;
