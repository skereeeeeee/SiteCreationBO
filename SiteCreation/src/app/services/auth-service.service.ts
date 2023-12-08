import { Injectable } from '@angular/core';

@Injectable()

export class AuthServiceService {

  constructor() { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    //return !this.jwtHelper.isTokenExpired(token);
    return true
  }
}
