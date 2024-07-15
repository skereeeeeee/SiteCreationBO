import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GestioneColoriService } from 'src/app/services/gestione-colori.service';
import { GestioneMarchiService } from 'src/app/services/gestione-marchi.service';
import { GestioneMaterialiService } from 'src/app/services/gestione-materiali.service';
import { GestioneTipiService } from 'src/app/services/gestione-tipi.service';

@Component({
  selector: 'app-aggiungi-modifica-modal',
  templateUrl: './aggiungi-modifica-modal.component.html',
  styleUrls: ['./aggiungi-modifica-modal.component.css']
})
export class AggiungiModificaModalComponent implements OnInit {

  @Input() dati: any
  @Input() sezione: string = ""

  constructor(public activeModal: NgbActiveModal, private materialeService: GestioneMaterialiService, private marchiService: GestioneMarchiService, private coloreService: GestioneColoriService, private tipoService: GestioneTipiService) { }

  ngOnInit(): void {
    if (this.dati == undefined) {
      //colore
      switch (this.sezione) {
        case 'marchi':
          this.dati = {
            nomeMarchio: ''
          }
          break;
        case 'materiale':
          this.dati = {
            nomE_MATERIALE: ''
          }
          break;
        case 'colore':
          this.dati = {
            nomE_COLORE: ''
          }
          break;

        case 'tipo':
          this.dati = {
            tipo: ''
          }
          break;
      }
    }
  }

  salva() {

    switch (this.sezione) {
      case 'marchi': {
        if (this.dati.idMarchio == undefined) {
          this.dati.idMarchio = 0
          this.marchiService.addMarchio(this.dati).then(x => {
            this.activeModal.close(x)
          })
        } else {
          this.marchiService.editMarchio(this.dati).then(x => {
            this.activeModal.close(x)
          })
        }
        break;
      }
      case 'materiale': {
        if (this.dati.iD_MATERIALE == undefined) {
          this.dati.iD_MATERIALE = 0
          this.materialeService.addMateriale(this.dati).then(x => {
            this.activeModal.close(x)
          })
        } else {
          this.materialeService.editMateriale(this.dati).then(x => {
            this.activeModal.close(x)
          })
        }
        break;
      }
      case 'colore': {
        if (this.dati.iD_COLORE == undefined) {
          this.dati.iD_COLORE = 0
          this.coloreService.addColore(this.dati).then(x => {
            this.activeModal.close(x)
          })
        } else {
          this.coloreService.editColore(this.dati).then(x => {
            this.activeModal.close(x)
          })
        }
        break;
      }

      case 'tipo': {
        if (this.dati.iD_TIPO == undefined) {
          this.dati.iD_TIPO = 0
          this.tipoService.addTipo(this.dati).then(x => {
            this.activeModal.close(x)
          })
        } else {
          this.tipoService.editTipo(this.dati).then(x => {
            this.activeModal.close(x)
          })
        }
        break;
      }

    }

  }

}
