import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminGet, AdminSend, AdminSendWMail, LoginUser } from 'src/app/model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(user: LoginUser): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let header = new Headers({
        'Content-Type': 'application/json'
      });


      this.http.post(environment.url + "Authenticate/Login", user, { responseType: 'text' }).subscribe({
        next: (x: any) => {
          resolve(x.toString())
        },
        error: (x: any) => {
          console.error(x)
          reject(x)
        }
      })
    })
  }

  public GetUsers(): Promise<Array<AdminGet>> {
    return new Promise<Array<AdminGet>>((resolve, reject) => {
      this.http.get(environment.url + "Authenticate/GetAllAdmins").subscribe(x => {
        resolve(x as Array<AdminGet>)
      })
    })
  }

  public RegisterNew(utente: AdminSend): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.http.post(environment.url + "Authenticate/Subscribe", utente).subscribe(x => {
        resolve(true)
      })
    })
  }

  public Edit(utente: AdminSendWMail): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.http.put(environment.url + "Authenticate/Subscribe", utente).subscribe(x => {
        resolve(true)
      })
    })
  }

  public DeleteAdmin(id: Number): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.http.delete(environment.url + "Authenticate/RemoveAdmins/" + id).subscribe(x => {

        resolve(true)
      })
    })
  }
}
