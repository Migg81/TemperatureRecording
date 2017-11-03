import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AddTemperaturePage } from '../pages';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) {

  }

  public addTempurature():void{
    let modal = this.modalCtrl.create(AddTemperaturePage);
    modal.present();
  }

}
