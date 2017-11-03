import { Component } from '@angular/core';
import { AddTemperaturePage, AboutPage, HomePage } from '../pages';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = AddTemperaturePage;

  constructor() {

  }
}
