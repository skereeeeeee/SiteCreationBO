import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GestioneTipiService {
  constructor(private http: HttpClient) { }

  getTipi(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .get(environment.url + 'GestioneShop/Tipi')
        .subscribe((x) => {
          resolve(x);
        });
    });
  }

  addTipo(item: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .post(environment.url + 'GestioneShop/Tipi', item)
        .subscribe((x) => {
          resolve(x);
        });
    });
  }

  editTipo(item: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .put(environment.url + 'GestioneShop/Tipi', item)
        .subscribe((x) => {
          resolve(x);
        });
    });
  }

  removeTipo(id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {

      this.http
        .delete(environment.url + 'GestioneShop/Tipi/' + id)
        .subscribe((x) => {
          resolve(x);
        });
    });
  }
}
