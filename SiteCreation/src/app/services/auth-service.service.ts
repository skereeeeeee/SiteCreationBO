import { Injectable } from '@angular/core';
import { LoginUser, User } from '../model/user.model';

@Injectable()

export class AuthServiceService {

  user: User = new User();

  constructor() {
    if(this.isAuthenticated() && this.user.username =='' ){
      //TODO cambiare con local storage
      this.login({username: 'admin', password: 'admin'} as LoginUser);
      
    }
      
   }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    //return !this.jwtHelper.isTokenExpired(token);
    return true
  }

  public login(loginUser: LoginUser){

    this.user = {
      username: loginUser.username,
      azienda : '',	
      nome : '',
      cognome : '',
      sito : 'www.arcariGioielli.it',
      token : '1234567890'
    }
    //TODO: Call API to login
  }
}
