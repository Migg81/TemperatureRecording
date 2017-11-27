import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TemperatureChartPage, AddTemperaturePage, HomePage, TabsPage } from '../pages/pages';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TemperatureRepoProvider } from '../providers/temperature-repo/temperature-repo';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite';
import { HttpModule } from '@angular/http';
import {ConverCTF,convertFTC} from '../pipes/pipes'
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MyApp,
    TemperatureChartPage,
    AddTemperaturePage,
    HomePage,
    TabsPage,
    ConverCTF,
    convertFTC,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TemperatureChartPage,
    AddTemperaturePage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SQLite,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TemperatureRepoProvider,
    ConverCTF,
    convertFTC,
    
  ]
})
export class AppModule { }
