import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TemperatureDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-temperature-details',
  templateUrl: 'temperature-details.html',
})
export class TemperatureDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemperatureDetailsPage');
  }

  // getTempDetails(): void {
    
  //       let loader = this.loadCtrl.create({
  //         content: 'Getting data...'
  //       });
    
  //       loader.present().then(() => {
    
  //         this.tempRepo.getDatabaseState().subscribe(rdy => {
    
  //           if (rdy) {
  //             this.tempRepo.getTempurature().then(da => {
  //               this.tempratureRecordes = da;
  //               loader.dismiss();
  //               console.log(this.tempratureRecordes.length);
  //             }).catch(e => {
  //               console.log(e);
  //               loader.dismiss();
  //             });
  //           }
    
  //         });
    
  //       });
  //     }

}
