import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GestioneMaterialiService {

  constructor(private http: HttpClient) { }

  getMateriali(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get(environment.url + 'GestioneShop/materiali').subscribe(x => {
        resolve(x)
      });
    })
  }

  removeMateriale(id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.delete(environment.url + 'GestioneShop/materiale/' + id).subscribe(x => {
        resolve(x)
      });
    })
  }

  addMateriale(item: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post(environment.url + 'GestioneShop/materiali', item).subscribe(x => {
        resolve(x)
      });
    })
  }

  editMateriale(item: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.put(environment.url + 'GestioneShop/materiale', item).subscribe(x => {
        resolve(x)
      });
    })
  }
}
