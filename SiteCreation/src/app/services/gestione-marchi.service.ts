import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GestioneMarchiService {
  constructor(private http: HttpClient) {}

  getMarchi(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .get(environment.url + 'GestioneShop/marchi')
        .subscribe((x) => {
          resolve(x);
        });
    });
  }
}
