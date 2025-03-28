type Params = {
  image: string;
  altImg: string;
  stylesPerso: any;
  status: boolean;
};


export function statusItensCardapio({ image, altImg, stylesPerso, status }: Params) {



  if (status) {
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

