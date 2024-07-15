import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NewsLetterServiceService } from '../services/news-letter-service.service';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.css'],
})
export class NewsLetterComponent implements OnInit {
  constructor(private newsLetterService: NewsLetterServiceService) {}
  public Editor: any = ClassicEditor;
  messaggio: string = '';
  vediUtenti: boolean = false;

  newsLetter: Array<string> = [];

  async ngOnInit(): Promise<void> {
    this.newsLetter  = (await this.newsLetterService.getUsers()).map(
      (x) => x.email
    );
  }

  send() {
    var editor = this.Editor;
    debugger;
    console.log(this.messaggio);
  }
}
