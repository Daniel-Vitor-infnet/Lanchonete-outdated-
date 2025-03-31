type Params = {
  image: string;
  altImg: string;
  stylesPerso: any;
  stock: boolean;
};


export function estoqueItemCardapio({ image, altImg, stylesPerso, stock }: Params) {



  if (stock) {
    return < img className={stylesPerso} src={image} alt={altImg} />

  } else {
    return (
      <>
        < img className={stylesPerso} src={image} alt={altImg} style={{ filter: "grayscale(100%)" }} />
        < img className={stylesPerso} src="src/assets/img/Esgotado.png" />
      </>
    )
  }

}

