import { Component, OnInit } from '@angular/core';
import { faEraser, faMagnifyingGlass, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MarchiModel } from '../model/prodotti.modal';
import { GestioneMarchiService } from '../services/gestione-marchi.service';
import { ModalServiceService } from '../services/modal-service.service';

@Component({
  selector: 'app-marchi',
  templateUrl: './marchi.component.html',
  styleUrls: ['./marchi.component.css']
})
export class MarchiComponent implements OnInit {

  constructor(private gestioneMarchiService: GestioneMarchiService, private modalService: ModalServiceService) { }

  public allMarchi: Array<MarchiModel> = []
  public marchiFiltered: Array<MarchiModel> = []

  public marchioDaCercare: string = ""

  faRemove = faEraser
  faSearch = faMagnifyingGlass

  faEdit = faPenToSquare
  faTrash = faTrash


  async ngOnInit(): Promise<void> {
    this.allMarchi = await this.gestioneMarchiService.getMarchi()
    this.marchiFiltered = JSON.parse(JSON.stringify(this.allMarchi))
  }

  cercaMarchio() {
    if (this.marchioDaCercare == "") {
      this.marchiFiltered = JSON.parse(JSON.stringify(this.allMarchi))
    } else {
      this.marchiFiltered = this.allMarchi.filter(x => x.nomeMarchio.toLowerCase().includes(this.marchioDaCercare.toLowerCase()))
    }
  }

  modificaMarchio(item: MarchiModel) {
    this.modalService.openGestione("marchi", JSON.parse(JSON.stringify(item))).then(x => {
      this.modalService.openSuccessModal("Marchio modificato con successo")
      this.ngOnInit()
    })

  }

  aggiungiMarchio() {
    this.modalService.openGestione("marchi").then(x => {

      this.modalService.openSuccessModal("Marchio aggiunto con successo")
      this.ngOnInit()
    })
  }

  removeMarchio(id: number) {
    this.modalService.openConfirmModal("Sei sicuro di voler rimuovere questo marchio?").then(x => {
      if (x) {

        console.log(id);

        this.gestioneMarchiService.removeMarchio(id).then(x => {
          this.ngOnInit()
        })
      }
    })
  }

}
