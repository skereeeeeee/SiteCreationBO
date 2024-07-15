import { Component, OnInit } from '@angular/core';
import { faEraser, faMagnifyingGlass, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MaterialiModel } from '../model/prodotti.modal';
import { GestioneMaterialiService } from '../services/gestione-materiali.service';
import { ModalServiceService } from '../services/modal-service.service';

@Component({
  selector: 'app-materiali',
  templateUrl: './materiali.component.html',
  styleUrls: ['./materiali.component.css']
})
export class MaterialiComponent implements OnInit {

  constructor(private gestioneMaterialiService: GestioneMaterialiService, private modalService: ModalServiceService) { }

  public allMateriali: Array<MaterialiModel> = []
  public materialiFiltered: Array<MaterialiModel> = []

  public materialeDaCercare: string = ""

  faRemove = faEraser
  faSearch = faMagnifyingGlass

  faEdit = faPenToSquare
  faTrash = faTrash


  async ngOnInit(): Promise<void> {
    this.allMateriali = await this.gestioneMaterialiService.getMateriali()
    this.materialiFiltered = JSON.parse(JSON.stringify(this.allMateriali))
  }

  cercaMateriale() {
    if (this.materialeDaCercare == "") {
      this.materialiFiltered = JSON.parse(JSON.stringify(this.allMateriali))
    } else {
      this.materialiFiltered = this.allMateriali.filter(x => x.nomE_MATERIALE.toLowerCase().includes(this.materialeDaCercare.toLowerCase()))
    }
  }

  modificaMarchio(item: MaterialiModel) {
    this.modalService.openGestione("materiale", JSON.parse(JSON.stringify(item))).then(x => {
      this.modalService.openSuccessModal("Marchio modificato con successo")
      this.ngOnInit()
    })

  }

  aggiungiMarchio() {
    this.modalService.openGestione("materiale").then(x => {

      this.modalService.openSuccessModal("Marchio aggiunto con successo")
      this.ngOnInit()
    })
  }

  removeMarchio(id: number) {
    this.modalService.openConfirmModal("Sei sicuro di voler rimuovere questo marchio?").then(x => {
      if (x) {

        console.log(id);

        this.gestioneMaterialiService.removeMateriale(id).then(x => {
          this.ngOnInit()
        })
      }
    })
  }

}
