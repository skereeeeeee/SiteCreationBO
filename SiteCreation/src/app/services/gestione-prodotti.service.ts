import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { prodotti } from '../model/prodotti.modal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GestioneProdottiService {
  constructor(private http: HttpClient) {}

  getProdotti(): Promise<prodotti[]> {
    return new Promise<prodotti[]>((resolve, reject) => {
      this.http
        .get(environment.url + 'GestioneShop/Products')
        .subscribe((x) => {
          resolve(x as prodotti[]);
        });
    });
  }

  sendProdotto(product: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .post(environment.url + 'GestioneShop/Products', product)
        .subscribe((x) => {
          resolve(x as any);
        });
    });
  }

  editProdotto(product: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .put(environment.url + 'GestioneShop/Products', product)
        .subscribe({
          next: (x) => {
            resolve(x as any);
          },
          error: (x) => {
            resolve(-1);
          },
        });
    });
  }

  removeProdotto(idProdotto: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .delete(environment.url + 'GestioneShop/Products/' + idProdotto)
        .subscribe({
          next: (x) => {
            resolve(x as any);
          },
          error: (x) => {
            resolve(-1);
          },
        });
    });
  }
}
