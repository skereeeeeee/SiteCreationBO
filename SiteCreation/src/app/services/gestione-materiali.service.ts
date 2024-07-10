import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GestioneMaterialiService {

  constructor(private http: HttpClient) { }

  getMateriali(): Promise<any>{
    return new Promise<any>((resolve, reject)=>{
      this.http.get(environment.url + 'GestioneShop/materiali').subscribe(x=>{
        resolve(x)
      });
    })
  }
}
