import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  @Input() sezione: string = ''
  @Input() link: string = ''
  imageTEst: any 

  ngOnInit(): void {
  }
  
  async send(){
    var fileInput = document.getElementById('fileInput');
    var file = (fileInput as any).files[0];

    if (file) {
      try {
        var base64String = await this.leggiFileComeBase64(file);
        console.log('Base64:', base64String);
        this.activeModal.close(base64String)
        // Ora puoi utilizzare la stringa Base64 come desideri
      } catch (error) {
        console.error('Errore durante la conversione:', error);
      }
    } else {
      console.error('Nessun file selezionato.');
    }

    
  }

  leggiFileComeBase64(file: any) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();

      reader.onload = function () {
        var base64String = (reader.result as any).split(',')[1];
        resolve(base64String);
      };

      reader.onerror = function (error) {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  }


}
