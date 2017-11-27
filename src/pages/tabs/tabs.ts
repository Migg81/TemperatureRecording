import { Component } from '@angular/core';
import { AddTemperaturePage, TemperatureChartPage, HomePage } from '../pages';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TemperatureChartPage;
  tab3Root = AddTemperaturePage;

  constructor() {

  }
}
