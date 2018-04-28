import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(
    public modalCtrl: ModalController,
  ) {}

  openModal() {
    let curModal = this.modalCtrl.create("Modal1Page");
    curModal.present();
  }
}
