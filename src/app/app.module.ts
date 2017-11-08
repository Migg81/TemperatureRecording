import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage, AddTemperaturePage, HomePage, TabsPage } from '../pages/pages';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TemperatureRepoProvider } from '../providers/temperature-repo/temperature-repo';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddTemperaturePage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddTemperaturePage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SQLite,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TemperatureRepoProvider
  ]
})
export class AppModule { }
