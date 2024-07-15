import { Component, OnInit } from '@angular/core';
import { faEraser, faMagnifyingGlass, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TipiModel } from '../model/prodotti.modal';
import { GestioneTipiService } from '../services/gestione-tipi.service';
import { ModalServiceService } from '../services/modal-service.service';

@Component({
  selector: 'app-tipi',
  templateUrl: './tipi.component.html',
  styleUrls: ['./tipi.component.css']
})
export class TipiComponent implements OnInit {

  constructor(private gestioneTipiService: GestioneTipiService, private modalService: ModalServiceService) { }

  public allTipi: Array<TipiModel> = []
  public tipiFiltered: Array<TipiModel> = []

  public tipoDaCercare: string = ""

  faRemove = faEraser
  faSearch = faMagnifyingGlass

  faEdit = faPenToSquare
  faTrash = faTrash


  async ngOnInit(): Promise<void> {
    this.allTipi = await this.gestioneTipiService.getTipi()
    this.tipiFiltered = JSON.parse(JSON.stringify(this.allTipi))
  }

  cercaTipo() {
    if (this.tipoDaCercare == "") {
      this.tipiFiltered = JSON.parse(JSON.stringify(this.allTipi))
    } else {
      this.tipiFiltered = this.allTipi.filter(x => x.tipo.toLowerCase().includes(this.tipoDaCercare.toLowerCase()))
    }
  }

  modificaTipo(item: TipiModel) {
    this.modalService.openGestione("tipo", JSON.parse(JSON.stringify(item))).then(x => {
      this.modalService.openSuccessModal("Tipo modificato con successo")
      this.ngOnInit()
    })

  }

  aggiungiTipo() {
    this.modalService.openGestione("tipo").then(x => {

      this.modalService.openSuccessModal("Tipo aggiunto con successo")
      this.ngOnInit()
    })
  }

  removeTipo(id: number) {
    this.modalService.openConfirmModal("Sei sicuro di voler rimuovere questo Tipo?").then(x => {
      if (x) {

        console.log(id);

        this.gestioneTipiService.removeTipo(id).then(x => {
          this.ngOnInit()
        })
      }
    })
  }

}
