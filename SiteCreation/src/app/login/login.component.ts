import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { LoginUser } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   public user: LoginUser = new LoginUser();

  constructor(private auth: AuthServiceService) { }

  ngOnInit(): void {
    if(this.auth.isAuthenticated())
    {
      window.location.href = '/Home';
    }
  }

  Login(){
    this.auth.login(this.user);
  }

}
