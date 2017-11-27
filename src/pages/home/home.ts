import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AddTemperaturePage } from '../pages';
import { TemperatureRepoProvider } from '../../providers/temperature-repo/temperature-repo';
import { TempRecorder,AVGTemperature } from '../../Model/Models';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tempratureRecordes: TempRecorder[];
  avGTempratureRecordes:AVGTemperature[];

  constructor(
    public navCtrl: NavController,
    public tempRepo: TemperatureRepoProvider,
    public loadCtrl: LoadingController,
    public modalCtrl: ModalController) {

  }

  public addTempurature(): void {
    let modal = this.modalCtrl.create(AddTemperaturePage);
    modal.present();
  }

  ionViewDidLoad() {
    this.getTempDetails();
  }

  getTempDetails(): void {

    let loader = this.loadCtrl.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {

      this.tempRepo.getDatabaseState().subscribe(rdy => {

        if (rdy) {
          this.tempRepo.getAVGTempurature().then(da => {
            this.avGTempratureRecordes = da;
            loader.dismiss();
            console.log(this.tempratureRecordes.length);
          }).catch(e => {
            console.log(e);
            loader.dismiss();
          });
        }

      });

    });
  }
}
