import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { TemperatureRepoProvider } from '../../providers/temperature-repo/temperature-repo';
import { TempRecorder, AVGTemperature } from '../../Model/Models';


@Component({
  selector: 'page-temperatureChart',
  templateUrl: 'temperatureChart.html'
})
export class TemperatureChartPage {

  @ViewChild('lineCanvas') lineCanvas;

  lineChart: any;
  avGTempratureRecordes: AVGTemperature[];

  constructor(
    public navCtrl: NavController,
    public tempRepo: TemperatureRepoProvider,
    public loadCtrl: LoadingController, ) {


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
            this.loadTemperaturelinechart();
            loader.dismiss();
            console.log(this.avGTempratureRecordes.length);
          }).catch(e => {
            console.log(e);
            loader.dismiss();
          });
        }

      });

    });
  }

  loadTemperaturelinechart(): void {

    var dates=this.avGTempratureRecordes.map(s=>s.temperaturelogDate);
    var avgTemperature=this.avGTempratureRecordes.map(s=>s.avgTemperature);

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      
            type: 'line',
            data: {
              labels: [97,98,99,100,102,103,104,105,106],
              datasets: [
                {
                  label: ["Temperature Chart"],
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: avgTemperature,
                  spanGaps: false,
                }
              ]
            }
      
          });
  }
}
