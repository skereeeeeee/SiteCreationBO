import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GestioneColoriService {
  constructor(private http: HttpClient) { }

  getColori(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .get(environment.url + 'GestioneShop/Colore')
        .subscribe((x) => {
          resolve(x);
        });
    });
  }

  addColore(item: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .post(environment.url + 'GestioneShop/Colore', item)
        .subscribe((x) => {
          resolve(x);
        });
    });
  }

  editColore(item: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .put(environment.url + 'GestioneShop/Colore', item)
        .subscribe((x) => {
          resolve(x);
        });
    });
  }

  removeColore(id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {

      this.http
        .delete(environment.url + 'GestioneShop/Colore/' + id)
        .subscribe((x) => {
          resolve(x);
        });
    });
  }
}
