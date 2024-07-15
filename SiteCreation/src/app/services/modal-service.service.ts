import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AggiungiModificaModalComponent } from '../modals/aggiungi-modifica-modal/aggiungi-modifica-modal.component';
import { ConfirmModalComponent } from '../modals/confirm-modal/confirm-modal.component';
import { ErrorModalComponent } from '../modals/error-modal/error-modal.component';
import { SuccessModalComponent } from '../modals/success-modal/success-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalServiceService {
  constructor(public modalService: NgbModal) { }

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
    var modal = this.modalService.open(ConfirmModalComponent, { centered: true });
    modal.componentInstance.message = message;

    return modal.result
  }

  openGestione(sezione: string, item: any = undefined) {
    var model = this.modalService.open(AggiungiModificaModalComponent, { centered: true })
    model.componentInstance.dati = item;
    model.componentInstance.sezione = sezione

    return model.result
  }
}
