import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminGet, AdminSend, AdminSendWMail } from 'src/app/model/user.model';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  @Input() Amministratore: AdminGet | undefined = undefined

  public password: string = ""
  public titolo: string = "Modifica admin"
  constructor(public activeModal: NgbActiveModal, private loginService: LoginServiceService, private modalService: ModalServiceService) { }

  ngOnInit(): void {
    if (this.Amministratore == undefined) {
      this.titolo = "Aggiungi admin"
      this.Amministratore = {
        cognome: "",
        email: "",
        id: -1,
        nome: ""
      }
    }
  }

  send() {
    if (this.Amministratore!.id == -1) {
      var toSend: AdminSend = {
        cognome: this.Amministratore!.cognome,
        nome: this.Amministratore!.nome,
        email: this.Amministratore!.email,
        password: this.password,
      }
      this.loginService.RegisterNew(toSend).then(x => {
        if (x) {
          this.activeModal.close(true)
        }
      })

    } else {
      var toSend2: AdminSendWMail = {
        id: this.Amministratore!.id,
        cognome: this.Amministratore!.cognome,
        nome: this.Amministratore!.nome,
        email: this.Amministratore!.email,
        password: this.password,
      }

      this.loginService.Edit(toSend2).then(x => {
        if (x) {
          this.activeModal.close(true)
        }
      })
    }
  }

}
