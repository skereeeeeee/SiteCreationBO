import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestoModalComponent } from '../modals/testo-modal/testo-modal.component';
import { ImageModalComponent } from '../modals/image-modal/image-modal.component';

@Component({
  selector: 'app-inostri-lavori',
  templateUrl: './inostri-lavori.component.html',
  styleUrls: ['./inostri-lavori.component.css']
})
export class INostriLavoriComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  testo: string = ''

  imageLink = ''

  ngOnInit(): void {

    this.testo = '<p>blah blah</p>'
  }

  openTestoModal(){
    var modal = this.modal.open(TestoModalComponent, {size: 'lg'})
    modal.componentInstance.sezione = 'I nostri lavori'
    modal.componentInstance.testo = this.testo
    modal.result.then(x=>{
      this.testo = x
    })
  }

  openImageModal(){
    var modal = this.modal.open(ImageModalComponent, {size: 'lg'})
    modal.componentInstance.sezione = 'I nostri lavori'
    modal.componentInstance.imageLink = this.imageLink
    modal.result.then(x=>{
      this.imageLink = x
    })
  }
}
