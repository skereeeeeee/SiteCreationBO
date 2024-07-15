import { Component, OnInit } from '@angular/core';
import { NewsLetterModel } from '../model/user.model';
import {
  faEraser,
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { NewsLetterServiceService } from '../services/news-letter-service.service';

@Component({
  selector: 'app-codici-sconto',
  templateUrl: './codici-sconto.component.html',
  styleUrls: ['./codici-sconto.component.css'],
})
export class CodiciScontoComponent implements OnInit {
  newsLetter: Array<NewsLetterModel> = [];
  newsLetterSearch: Array<NewsLetterModel> = [];
  emailDaCercare: string = '';

  faRemove = faEraser;
  faSearch = faMagnifyingGlass;

  faEdit = faPenToSquare;
  faTrash = faTrash;

  constructor(private newsLetterService: NewsLetterServiceService) {}

  async ngOnInit(): Promise<void> {
    this.newsLetter = await this.newsLetterService.getUsers();
    this.newsLetterSearch = JSON.parse(JSON.stringify(this.newsLetter));
  }

  cercaEmail() {
    if (this.emailDaCercare == '') {
      this.newsLetterSearch = JSON.parse(JSON.stringify(this.newsLetter));
    } else {
      this.newsLetterSearch = this.newsLetter.filter((x) =>
        x.email.toLowerCase().includes(this.emailDaCercare.toLowerCase())
      );
    }
  }

  codiceScontoUtilizzato() {}
}
