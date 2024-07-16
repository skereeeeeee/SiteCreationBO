import { Component, OnInit } from '@angular/core';
import {
  faEraser,
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddAdminComponent } from '../modals/add-admin/add-admin.component';
import { AdminGet } from '../model/user.model';
import { LoginServiceService } from '../services/login/login-service.service';
import { ModalServiceService } from '../services/modal-service.service';
@Component({
  selector: 'app-gestione-admins',
  templateUrl: './gestione-admins.component.html',
  styleUrls: ['./gestione-admins.component.css']
})
export class GestioneAdminsComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private modal: NgbModal, private modalService: ModalServiceService) { }

  adminFiltered: AdminGet[] = []
  AllAdmin: AdminGet[] = []

  adminDaCercare: string = ""

  faRemove = faEraser
  faSearch = faMagnifyingGlass

  faEdit = faPenToSquare
  faTrash = faTrash

  async ngOnInit(): Promise<void> {
    this.adminFiltered = await this.loginService.GetUsers()
    this.AllAdmin = JSON.parse(JSON.stringify(this.adminFiltered))
  }

  modificaAdmin(item: AdminGet) {
    var modal = this.modal.open(AddAdminComponent, { centered: true })
    modal.componentInstance.Amministratore = JSON.parse(JSON.stringify(item))
    modal.result.then(x => {
      if (x) {
        this.modalService.openSuccessModal("Amministratore modificato con successo")
        this.ngOnInit()
      }
    })
  }

  removeAdmin(id: number) {
    this.modalService.openConfirmModal("Sicuro di voler eliminare questo utente?").then(x => {
      if (x) {
        this.loginService.DeleteAdmin(id).then(x => {
          this.ngOnInit()
          this.modalService.openSuccessModal("Utente rimosso con successo")
        })
      }
    })
  }

  cercaAdmin() {
    if (this.adminDaCercare == '') {
      this.adminFiltered = JSON.parse(JSON.stringify(this.AllAdmin));
    } else {
      this.adminFiltered = this.AllAdmin.filter((x) =>
        x.email.toLowerCase().includes(this.adminDaCercare.toLowerCase())
      );
    }
  }

  aggiungiAdmin() {
    var modal = this.modal.open(AddAdminComponent, { centered: true })
    modal.result.then(x => {
      if (x) {
        this.modalService.openSuccessModal("Amministratore aggiunto con successo")
        this.ngOnInit()
      }
    })
  }

}
