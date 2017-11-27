import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemperatureDetailsPage } from './temperature-details';

@NgModule({
  declarations: [
    TemperatureDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TemperatureDetailsPage),
  ],
})
export class TemperatureDetailsPageModule {}
