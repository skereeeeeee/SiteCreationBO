import { Component, Input, OnInit } from '@angular/core';
import {
  faArrowDown,
  faArrowUp,
  faCross,
  faRemove,
} from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImagesList, prodotti } from 'src/app/model/prodotti.modal';
import { GestioneColoriService } from 'src/app/services/gestione-colori.service';
import { GestioneMarchiService } from 'src/app/services/gestione-marchi.service';
import { GestioneMaterialiService } from 'src/app/services/gestione-materiali.service';
import { GestioneProdottiService } from 'src/app/services/gestione-prodotti.service';
import { GestioneTipiService } from 'src/app/services/gestione-tipi.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
})
export class ProductModalComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private modalService: ModalServiceService,
    private tipiService: GestioneTipiService,
    private marchiService: GestioneMarchiService,
    private coloriService: GestioneColoriService,
    private materialiService: GestioneMaterialiService,
    private prodottiService: GestioneProdottiService
  ) { }

  faTop = faArrowUp;
  faDown = faArrowDown;
  remove = faRemove;

  @Input() sezione: string = '';
  @Input() prodotti: prodotti = {
    id: undefined,
    immagineB64: '',
    marchio: '',
    nome: '',
    tipo: '',
    materiale: '',
    colore: '',
    prezzo: 0,
    descrizione: '',
    listaImmagini: [],
  };
  @Input() index: number = -1;

  public materiali: any = [];
  public materialeSelected: any = -1;
  public marchioSelected: any = -1;
  public coloreSelected: any = -1;
  public tipoSelected: any = -1;

  public colori: any = [];
  public tipi: any = [];
  public marchi: any = [];

  async ngOnInit(): Promise<void> {
    console.log(this.prodotti);

    //materiali
    this.materiali = await this.materialiService.getMateriali();
    this.marchi = await this.marchiService.getMarchi();
    this.colori = await this.coloriService.getColori();
    this.tipi = await this.tipiService.getTipi();


    if (this.prodotti.id != undefined) {
      this.materialeSelected = this.materiali.find(
        (x: any) => x.nomE_MATERIALE == this.prodotti.materiale
      ).iD_MATERIALE;

      this.tipoSelected = this.tipi.find(
        (x: any) => x.tipo == this.prodotti.tipo
      ).iD_TIPO;

      this.coloreSelected = this.colori.find(
        (x: any) => x.nomE_COLORE == this.prodotti.colore
      ).iD_COLORE;

      this.marchioSelected = this.marchi.find(
        (x: any) => x.nomeMarchio == this.prodotti.marchio
      ).idMarchio;
    }

    console.log(this.coloreSelected);
    console.log(this.marchioSelected);
    console.log(this.tipoSelected);
    console.log(this.materialeSelected);

    this.images = this.prodotti.listaImmagini?.map((x) =>
      x.imageB64.includes('data:image/png;base64,')
        ? x.imageB64
        : 'data:image/png;base64,' + x.imageB64
    );
  }

  async send() {
    console.log(this.prodotti.id != 0 && this.prodotti.id != undefined);


    if (this.prodotti.id != 0 && this.prodotti.id != undefined) {
      this.updateProdotto();
    } else {
      this.createProdotto();
    }
  }

  createProdotto() {
    var listaImmagini = this.images.map((x: string) => { return { imageB64: x, id: 0 }; })
    var product = {
      id: 0,
      marchio: this.marchioSelected,
      nome: this.prodotti.nome,
      tipo: this.tipoSelected,
      materiale: this.materialeSelected,
      colore: this.coloreSelected,
      prezzo: this.prodotti.prezzo,
      descrizione: this.prodotti.descrizione,
      immagineB64: this.prodotti.immagineB64,
      info: false,
      listaImmagini: listaImmagini,
    };
    this.prodottiService.sendProdotto(product).then(x => {
      if (x != null) {
        this.modalService.openSuccessModal("Prodotto caricato!")
        this.activeModal.close()
      }
    });
  }

  updateProdotto() {
    var listaImmagini = this.images.map((x: string) => {
      return { imageB64: x, id: 0 };
    });
    var product = {
      id: this.prodotti.id,
      marchio: this.marchioSelected,
      nome: this.prodotti.nome,
      tipo: this.tipoSelected,
      materiale: this.materialeSelected,
      colore: this.coloreSelected,
      prezzo: this.prodotti.prezzo,
      descrizione: this.prodotti.descrizione,
      immagineB64: this.prodotti.immagineB64,
      info: false,
      listaImmagini: listaImmagini,
    };
    this.prodottiService.editProdotto(product).then((x) => {
      if (x != null) {
        this.modalService.openSuccessModal('Prodotto caricato!');
        this.activeModal.close();
      }
    });
  }

  leggiFileComeBase64(file: any) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();

      reader.onload = function () {
        var base64String = (reader.result as any).split(',')[1];
        resolve(base64String);
      };

      reader.onerror = function (error) {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  }

  images: any = [];

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.images.push(event.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  onFirstImageChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.prodotti.immagineB64 = event.target.result;
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  removeImage(index: number) {
    this.images.splice(index, 1);
  }

  moveUp(index: number) {
    if (index > 0) {
      let temp = this.images[index];
      this.images[index] = this.images[index - 1];
      this.images[index - 1] = temp;
    }
  }

  moveDown(index: number) {
    if (index < this.images.length - 1) {
      let temp = this.images[index];
      this.images[index] = this.images[index + 1];
      this.images[index + 1] = temp;
    }
  }
}
