import { Component, OnInit } from '@angular/core';
import { faEraser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from '../modals/product-modal/product-modal.component';
import { prodotti } from '../model/prodotti.modal';
import { GestioneProdottiService } from '../services/gestione-prodotti.service';
import { ModalServiceService } from '../services/modal-service.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  faRemove = faEraser
  faSearch = faMagnifyingGlass

  prodottoDaCercare: string = ""

  constructor(public modal: NgbModal, private gestioneProdottiService: GestioneProdottiService, private modalService: ModalServiceService) { }

  public prodotti: Array<prodotti> = []
  public allProdotti: Array<prodotti> = []

  async ngOnInit(): Promise<void> {
    this.getProdotti();
  }

  aggiungiProdotto() {
    var modal = this.modal.open(ProductModalComponent, { size: 'lg' })
    modal.componentInstance.sezione = 'Aggiungi prodotto'
    modal.result.then(x => {
      this.getProdotti();
    })
  }

  modificaProdotto(prodotto: prodotti) {
    var prodottoIndex = this.prodotti.findIndex(x => x.nome == prodotto.nome)
    var modal = this.modal.open(ProductModalComponent, { size: 'lg' })
    modal.componentInstance.sezione = 'Aggiungi prodotto'
    modal.componentInstance.prodotti = JSON.parse(JSON.stringify(prodotto))
    modal.componentInstance.index = prodottoIndex

    modal.result.then((x) => {
      this.getProdotti();
    });
  }
  async getProdotti() {
    this.prodotti = await this.gestioneProdottiService.getProdotti();
    this.allProdotti = JSON.parse(JSON.stringify(this.prodotti))
    this.prodotti.forEach((x) => {
      if (!x.immagineB64.includes('data:image/png;base64,')) {
        x.immagineB64 = 'data:image/png;base64,' + x.immagineB64;
      }
    });
  }



  EliminaProdotto(prodotto: prodotti) {
    this.modalService.openConfirmModal("Sei sicuro di voler eliminare questo prodotto?").then(x => {
      this.gestioneProdottiService.removeProdotto(prodotto.id).then(x => {
        this.getProdotti();
      });
    })
  }

  cercaProdotto() {
    if (this.prodottoDaCercare == "") {
      this.prodotti = JSON.parse(JSON.stringify(this.allProdotti))
    } else {
      this.prodotti = this.allProdotti.filter(x =>
        x.colore.toLowerCase().includes(this.prodottoDaCercare.toLowerCase()) ||
        x.descrizione.toLowerCase().includes(this.prodottoDaCercare.toLowerCase()) ||
        x.marchio.toLowerCase().includes(this.prodottoDaCercare.toLowerCase()) ||
        x.materiale.toLowerCase().includes(this.prodottoDaCercare.toLowerCase()) ||
        x.materiale.toLowerCase().includes(this.prodottoDaCercare.toLowerCase()) ||
        x.nome.toLowerCase().includes(this.prodottoDaCercare.toLowerCase()) ||
        x.tipo.toLowerCase().includes(this.prodottoDaCercare.toLowerCase())
      )
    }
  }

}


