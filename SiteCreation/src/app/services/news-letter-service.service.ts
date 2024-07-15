import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsLetterModel } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class NewsLetterServiceService {
  constructor(public http: HttpClient) {}

  getUsers(): Promise<NewsLetterModel[]> {
    return new Promise<NewsLetterModel[]>((resolve, reject) => {
      this.http
        .get(environment.url + 'NewsLetter/getNewsLetterUsers')
        .subscribe((x) => {
          resolve(x as NewsLetterModel[]);
        });
    });
  }
}
