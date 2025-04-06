import { Grid2, Typography, Radio } from "@/libs/mui";
import { estoqueItemCardapio, formatarValorR$ } from "@/utils/function";
import stylesPerso from "@/styles/cardapio/OptionsComplementosCategory.module.scss";
import { useMemo, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ComplementoComVersoes2, Versao2 } from "@/types";

interface OptionsComplementosCategoryProps {
  categoryName: string;
  items: ComplementoComVersoes2[];
  onSelect: (selection: { complemento: ComplementoComVersoes2; version: Versao2 }) => void;
  selected?: { complemento: ComplementoComVersoes2; version: Versao2 } | null;
  autoSelectDefault?: boolean;
}

type ComplementoOption = {
  id: string;
  title: string;
  price: number;
  image: string;
  stock: boolean;
  free?: boolean | null;
  data: { complemento: ComplementoComVersoes2; version: Versao2 };
};

const OptionsComplementosCategory: React.FC<OptionsComplementosCategoryProps> = ({
  categoryName,
  items,
  onSelect,
  selected = null,
  autoSelectDefault = false,
}) => {
  const options = useMemo<ComplementoOption[]>(() => {
    const opts: ComplementoOption[] = [
      {
        id: `no-option`,
        title: "Não obrigado",
        price: 0,
        image: "src/assets/img/Logo.png",
        stock: true,
        data: {
          complemento: {
            id: "no-option",
            title: "Não obrigado",
            description: "",
            price: 0,
            image: "src/assets/img/Logo.png",
            stock: true,
            sale: true,
            version: [],
          },
          version: {
            id: "no-option",
            title: "Não obrigado",
            description: "",
            price: 0,
            image: "src/assets/img/Logo.png",
            stock: true,
            sale: true,
          },
        },
      },
    ];

    items.forEach((item) => {
      if (item.version && item.version.length > 0) {
        item.version.forEach((ver) => {
          if (ver.sale) {
            opts.push({
              id: `${item.id}-${ver.id}`,
              title: `${item.title} (${ver.title})`,
              price: ver.price,
              image: ver.image,
              stock: ver.stock,
              free: ver.free,
              data: { complemento: item, version: ver },
            });
          }
        });
      } else {
        opts.push({
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
          stock: item.stock,
          free: item.free,
          data: {
            complemento: item,
            version: {
              id: item.id,
              title: item.title,
              description: item.description,
              price: item.price,
              image: item.image,
              stock: item.stock,
              free: item.free,
              sale: item.sale,
            },
          },
        });
      }
    });

    return opts;
  }, [items]);

  useEffect(() => {
    if (autoSelectDefault && !selected && options.length > 0) {
      onSelect(options[0].data);
    }
  }, [autoSelectDefault, selected, options, onSelect]);

  const computedSelectedId = selected
    ? selected.complemento.version && selected.complemento.version.length > 0
      ? `${selected.complemento.id}-${selected.version.id}`
      : selected.complemento.id
    : null;

  const handleChange = (optionId: string) => {
    const opt = options.find((o) => o.id === optionId);
    if (opt) {
      onSelect(opt.data);
    }
  };

  return (
    <div>
      <Typography variant="h6">{categoryName}</Typography>
      {options.map((option) => (
        <Grid2
          className={stylesPerso["main-container"]}
          key={option.id}
          onClick={() => option.stock && handleChange(option.id)}
          style={{ cursor: option.stock ? "pointer" : "default" }}
        >
          <Grid2 className={stylesPerso["img-complemento-container"]}>
            {estoqueItemCardapio({
              image: option.image,
              altImg: option.title,
              stylesPerso: stylesPerso["img-complemento"],
              stock: option.stock,
            })}
          </Grid2>
          <Grid2 className={stylesPerso["item"]}>
            <Typography className={stylesPerso["title"]}>{option.title}</Typography>
            {option.price > 0 && !option.free ? (
              <Typography className={stylesPerso["price"]}>
                {formatarValorR$(option.price)}
              </Typography>
            ) : (
              <Typography className={stylesPerso["price-free"]}>Grátis</Typography>
            )}
          </Grid2>
          <Grid2 className={stylesPerso["select-container"]}>
            {option.stock ? (
              <Radio
                className={stylesPerso["select"]}
                checked={computedSelectedId === option.id}
                onChange={() => handleChange(option.id)}
                value={option.id}
                name={`${categoryName}-radio-buttons`}
              />
            ) : (
              <CloseIcon className={stylesPerso["select"]} />
            )}
          </Grid2>
        </Grid2>
      ))}
    </div>
  );
};

export default OptionsComplementosCategory;
