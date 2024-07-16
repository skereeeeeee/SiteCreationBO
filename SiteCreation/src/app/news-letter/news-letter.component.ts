import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SendMailModel } from '../model/user.model';
import { ModalServiceService } from '../services/modal-service.service';
import { NewsLetterServiceService } from '../services/news-letter-service.service';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.css'],
})
export class NewsLetterComponent implements OnInit {
  constructor(private newsLetterService: NewsLetterServiceService, private modalService: ModalServiceService) { }
  public Editor: any = ClassicEditor;
  messaggio: string = '';
  vediUtenti: boolean = false;
  public subject: string = ""

  newsLetter: Array<string> = [];

  async ngOnInit(): Promise<void> {
    this.newsLetter = (await this.newsLetterService.getUsers()).map(
      (x) => x.email
    );
  }

  async send() {
    this.modalService.openConfirmModal("Sei sicuro di voler inviare la mail?").then(conf => {
      if (conf) {
        var message: SendMailModel = {
          body: this.messaggio,
          subject: this.subject
        }
        this.newsLetterService.sendEmai(message).then(x => {
          if (x) {
            this.modalService.openSuccessModal("Email inviata con successo")
          }
        })
      }
    })

  }
}
