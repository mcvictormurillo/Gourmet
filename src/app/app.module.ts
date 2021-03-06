import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Home2Page } from '../pages/home2/home2';
import { CartaPage } from '../pages/carta/carta';
import { AcercaPage } from '../pages/acerca/acerca';
import { RecomendadosPage } from '../pages/recomendados/recomendados';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Home2Page,
    CartaPage,
    AcercaPage,
    RecomendadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Home2Page,
    CartaPage,
    AcercaPage,
    RecomendadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
