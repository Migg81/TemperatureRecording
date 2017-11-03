import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'addTemperature.html'
})
export class AddTemperaturePage {
  today: any;
  constructor(public navCtrl: NavController) {
    this.today = new Date().toISOString();

  }

}
