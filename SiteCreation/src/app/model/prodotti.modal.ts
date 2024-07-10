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
  id: number|undefined = undefined
}
