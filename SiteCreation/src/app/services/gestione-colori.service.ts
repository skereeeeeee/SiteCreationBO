import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GestioneColoriService {
  constructor(private http:HttpClient) {}

  getColori(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .get(environment.url + 'GestioneShop/Colore')
        .subscribe((x) => {
          resolve(x);
        });
    });
  }
}
