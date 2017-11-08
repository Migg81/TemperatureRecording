import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { TemperatureRepoProvider } from '../../providers/temperature-repo/temperature-repo';

@Component({
  selector: 'page-contact',
  templateUrl: 'addTemperature.html'
})
export class AddTemperaturePage {
  today: any;
  time: string;
  tempurature: string;


  constructor(
    public navCtrl: NavController,
    public tempRepo: TemperatureRepoProvider,
    public viewCtrl:ViewController,
    private sqlite: SQLite) {
    this.today = new Date().toDateString();
  }

  addtempurature(): void {
    this.tempRepo.addTempurature(this.today, this.time, this.tempurature);
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
}
