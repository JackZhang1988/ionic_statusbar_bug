import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the Modal1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal1',
  templateUrl: 'modal1.html'
})
export class Modal1Page {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal1Page');
  }
  openModal2() {
    let curModal = this.modalCtrl.create('Modal2Page');
    curModal.present();
  }

  navModal2() {
    this.navCtrl.push('Modal2Page');
  }
}
