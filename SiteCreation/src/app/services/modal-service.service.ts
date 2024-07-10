import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SuccessModalComponent } from '../modals/success-modal/success-modal.component';
import { ErrorModalComponent } from '../modals/error-modal/error-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalServiceService {
  constructor(public modalService: NgbModal) {}

  openSuccessModal(message: string) {
    var modal = this.modalService.open(SuccessModalComponent, {
      centered: true,
    });
    modal.componentInstance.message = message;
  }

  openErrorModal(message: string) {
    var modal = this.modalService.open(ErrorModalComponent, { centered: true });
    modal.componentInstance.message = message;
  }

  openConfirmModal(message: string) {
    var modal = this.modalService.open(ErrorModalComponent, { centered: true });
    modal.componentInstance.message = message;
  }
}
