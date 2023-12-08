import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthServiceService) { }

  ngOnInit(): void {
    if(this.auth.isAuthenticated())
    {
      window.location.href = '/Home';
    }
  }

}
