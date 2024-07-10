import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from 'src/app/model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(user: LoginUser): Promise<string>{
    return new Promise<string>((resolve, reject)=>{
      let header = new Headers({
        'Content-Type': 'application/json'
      });

      
      this.http.post("https://localhost:44394/Authenticate/Login", user, {responseType: 'text'}).subscribe({
        next: (x: any) =>{
          resolve(x.toString())
        },
        error: (x: any) =>{
          console.error(x)
          reject(x)
        }
      })
    })
  }
}
