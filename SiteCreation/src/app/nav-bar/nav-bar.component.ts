import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { User } from '../model/user.model';
import { AuthServiceService } from '../services/auth-service.service';
import { ModalServiceService } from '../services/modal-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  //icone
  faGear = faGear

  user: User | undefined = undefined

  constructor(public auth: AuthServiceService, private router: Router, private modalService: ModalServiceService) { }

  ngOnInit(): void {
    if (this.user === undefined) {
      this.user = this.auth.user;
    }
  }

  navigate(value: number) {
    switch (value) {
      case 1:
        this.router.navigate(['Prodotti'])
        break
      case 2:
        this.router.navigate(['Marchi'])
        break
      case 3:
        this.router.navigate(['Materiali'])
        break
      case 4:
        this.router.navigate(['Colori'])
        break
      case 5:
        this.router.navigate(['Tipi'])
        break
      case 6:
        this.router.navigate(['NewsLetter'])
        break
      case 7:
        this.router.navigate(['CodiciSconto'])
        break
      case 8:
        this.router.navigate(['GestioneAdmins'])
        break
    }
  }

  Logout() {
    this.modalService.openConfirmModal("Sei sicuro di voler fare il logout?").then(x => {
      if (x) {
        localStorage.clear()
        location.reload()
      }
    })
  }

}
