//#region types Cardapio 

export interface Categoria {
  id: string
  title: string
  description: string
  image: string
  icon: string
  stock: boolean
  sale: boolean
}

export interface Comida {
  id: string
  categoria_id: string
  title: string
  description: string
  price: number
  image: string
  stock: boolean
  sale: boolean
}

export interface Versao {
  id: string
  comida_id: string
  title: string
  description: string
  price: number
  image: string
  stock: boolean
  sale: boolean
}

export interface Ingrediente {
  id: string
  title: string
  description: string
  price: number
  image: string
  stock: boolean
  sale: boolean
}

export interface IngredientePorComida {
  comida_id: string
  ingrediente_id: string
}

export interface Complemento {
  id: string
  comida_base_id: string
  categoria_id: string
  comida_id: string
  versao_id: string | null
}

export interface Versao2 {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  stock: boolean;
  sale: boolean;
  free?: boolean | null;
}

export interface ComplementoComVersoes2 {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  stock: boolean;
  sale: boolean;
  free?: boolean | null;
  version: Versao2[];
}





//#endregion types Cardapio
