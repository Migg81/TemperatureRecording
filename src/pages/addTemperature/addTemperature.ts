import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { TemperatureRepoProvider } from '../../providers/temperature-repo/temperature-repo';
import { HomePage,TabsPage } from '../pages';
import { ConverCTF, convertFTC } from '../../pipes/pipes';


@Component({
  selector: 'page-contact',
  templateUrl: 'addTemperature.html'
})
export class AddTemperaturePage {
  today: any;
  time: string;
  tempurature: string;
  tempuratureUnit: any;

  constructor(
    public navCtrl: NavController,
    public tempRepo: TemperatureRepoProvider,
    public tempconvertFTCr: convertFTC,
    public tempConverCTF: ConverCTF,
    public viewCtrl: ViewController,
    public loadingctrl: LoadingController,
    private sqlite: SQLite) {
    this.today = new Date().toDateString();
  }

  addtempurature(): void {


    this.tempurature = this.tempuratureUnit === "C" ? this.tempConverCTF.transform(this.tempurature) : this.tempurature;

    let loader = this.loadingctrl.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.tempRepo.addTempurature(this.today, this.time, this.tempurature)
        .then(response => {

          this.viewCtrl.dismiss();
          this.navCtrl.setRoot(TabsPage);
          loader.dismiss();

        }).catch((err) => {
          this.handleError(err);
          loader.dismiss();
        });
    });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  private handleError(error: any): void {

    // if (error === "Network Unavailable") {
    //   if (this.navCtrl.length() === 1) {
    //     this.navCtrl.setRoot(LearnPage);
    //   }
    //   else {
    //     this.navCtrl.pop();
    //   }
    //   this.navCtrl.push(ErrorPage);
    // }
    // else if (error === "Unauthorized") {
    //   this.errorMsg = "Unauthorized access!";
    // }
    // else {
    //   this.errorMsg = "Something went wront please try again."
    // }
  }
}
