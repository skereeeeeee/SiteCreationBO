import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GestioneMarchiService {
  constructor(private http: HttpClient) { }

  getMarchi(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .get(environment.url + 'GestioneShop/marchi')
        .subscribe((x) => {
          resolve(x);
        });
    });
  }

  addMarchio(item: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .post(environment.url + 'GestioneShop/marchi', item)
        .subscribe((x) => {
          resolve(x);
        });
    });
  }

  editMarchio(item: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http
        .put(environment.url + 'GestioneShop/marchi', item)
        .subscribe((x) => {
          resolve(x);
        });
    });
  }

  removeMarchio(id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {

      this.http
        .delete(environment.url + 'GestioneShop/marchio/' + id)
        .subscribe((x) => {
          resolve(x);
        });
    });
  }
}
