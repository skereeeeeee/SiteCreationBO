import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GestioneTipiService {
  constructor(private http: HttpClient) {}

  getTipi(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .get(environment.url + 'GestioneShop/Tipi')
        .subscribe((x) => {
          resolve(x);
        });
    });
  }
}
