export class prodotti {
  id: number | undefined = undefined;
  marchio: string = '';
  nome: string = '';
  tipo: string = '';
  materiale: string = '';
  colore: string = '';
  prezzo: number = 0;
  descrizione: string = '';
  immagineB64: string = '';
  listaImmagini: Array<ImagesList> | undefined = [];
}

export class ImagesList {
  imageB64: string = ""
  id: number | undefined = undefined
}

export class MarchiModel {
  idMarchio: number = -1;
  nomeMarchio: string = ""
}

export class MaterialiModel {
  iD_MATERIALE: number = -1;
  nomE_MATERIALE: string = ""
}

export class ColoriModel {
  iD_COLORE: number = 0;
  nomE_COLORE: string = "Bianco"
}
export class TipiModel {
  iD_TIPO: number = 0;
  tipo: string = ""
}
