import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthServiceService } from '../services/auth-service.service';
import { faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  //icone
  faGear = faGear

  user: User|undefined = undefined

  constructor(public auth: AuthServiceService) { }

  ngOnInit(): void {

    

    if(this.user === undefined)
    {
      this.user = this.auth.user;
    }
  }

}
