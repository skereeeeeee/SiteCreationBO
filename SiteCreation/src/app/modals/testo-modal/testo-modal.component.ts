import { Component, Input, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-testo-modal',
  templateUrl: './testo-modal.component.html',
  styleUrls: ['./testo-modal.component.css']
})
export class TestoModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  @Input() sezione: string = ''
  @Input() testo: string = ''

  public Editor: any = ClassicEditor;

  ngOnInit(): void {
  }
  
  send(){
    this.activeModal.close(this.testo)
  }

}
