import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() message: string = "Are you sure that you want to proceed?"

  constructor(public modal: NgbActiveModal) { }
  ngOnInit(): void {
  }

  confirm() {
    this.modal.close(true);
  }

  close() {
    this.modal.close(false);
  }

}
