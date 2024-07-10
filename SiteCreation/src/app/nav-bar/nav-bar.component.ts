import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  //icone
  faGear = faGear

  user: User | undefined = undefined

  constructor(public auth: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    if (this.user === undefined) {
      this.user = this.auth.user;
    }
  }

  navigate(value: number) {
    switch (value) {
      case 1:
        this.router.navigate(['ChiSiamo'])
        break
      case 2:
        this.router.navigate(['INostriMarchi'])
        break
      case 3:
        this.router.navigate(['INostriLavori'])
        break
      case 4:
        this.router.navigate(['DoveTrovarci'])
        break
      case 5:
        this.router.navigate(['Prodotti'])
        break
      case 6:
        this.router.navigate(['NewsLetter'])
        break
      case 6:
        this.router.navigate(['CodiciSconto'])
        break
    }
  }

}
