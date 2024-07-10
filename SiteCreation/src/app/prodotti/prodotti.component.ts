import { Component, OnInit } from '@angular/core';
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

  constructor(public modal: NgbModal, private gestioneProdottiService: GestioneProdottiService, private modalService: ModalServiceService) { }

  public prodotti: Array<prodotti> = []

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
      //TODO
      this.getProdotti();
    });
  }

  async getProdotti() {
    this.prodotti = await this.gestioneProdottiService.getProdotti();
    this.prodotti.forEach((x) => {
      if (!x.immagineB64.includes('data:image/png;base64,')) {
        x.immagineB64 = 'data:image/png;base64,' + x.immagineB64;
      }
    });
  }



  EliminaProdotto(prodotto: prodotti) {
    this.gestioneProdottiService.removeProdotto(prodotto.id).then(x => {
      this.getProdotti();
    });
  }

}


