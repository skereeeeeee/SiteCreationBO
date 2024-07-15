import { Component, OnInit } from '@angular/core';
import { faEraser, faMagnifyingGlass, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ColoriModel } from '../model/prodotti.modal';
import { GestioneColoriService } from '../services/gestione-colori.service';
import { ModalServiceService } from '../services/modal-service.service';

@Component({
  selector: 'app-colori',
  templateUrl: './colori.component.html',
  styleUrls: ['./colori.component.css']
})
export class ColoriComponent implements OnInit {

  constructor(private gestioneColoriService: GestioneColoriService, private modalService: ModalServiceService) { }

  public allColori: Array<ColoriModel> = []
  public coloriFiltered: Array<ColoriModel> = []

  public coloreDaCercare: string = ""

  faRemove = faEraser
  faSearch = faMagnifyingGlass

  faEdit = faPenToSquare
  faTrash = faTrash


  async ngOnInit(): Promise<void> {
    this.allColori = await this.gestioneColoriService.getColori()
    this.coloriFiltered = JSON.parse(JSON.stringify(this.allColori))
  }

  cercaColore() {
    if (this.coloreDaCercare == "") {
      this.coloriFiltered = JSON.parse(JSON.stringify(this.allColori))
    } else {
      this.coloriFiltered = this.allColori.filter(x => x.nomE_COLORE.toLowerCase().includes(this.coloreDaCercare.toLowerCase()))
    }
  }

  modificaColore(item: ColoriModel) {
    this.modalService.openGestione("colore", JSON.parse(JSON.stringify(item))).then(x => {
      this.modalService.openSuccessModal("Colore modificato con successo")
      this.ngOnInit()
    })

  }

  aggiungiColore() {
    this.modalService.openGestione("colore").then(x => {

      this.modalService.openSuccessModal("Colore aggiunto con successo")
      this.ngOnInit()
    })
  }

  removeColore(id: number) {
    this.modalService.openConfirmModal("Sei sicuro di voler rimuovere questo Colore?").then(x => {
      if (x) {

        console.log(id);

        this.gestioneColoriService.removeColore(id).then(x => {
          this.ngOnInit()
        })
      }
    })
  }

}
