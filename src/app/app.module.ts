import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile'
import { RegisterPage } from '../pages/register/register';
import { BrowsePage } from '../pages/browse/browse';
import { CharityPage } from '../pages/charity/charity';
import { DonationsPage } from '../pages/donations/donations';
import { PaymentPage } from '../pages/payment/payment';
import { TutorialPage } from '../pages/tutorial/tutorial';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    RegisterPage,
    BrowsePage,
    CharityPage,
    PaymentPage,
    DonationsPage,
    TutorialPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    RegisterPage,
    BrowsePage,
    CharityPage,
    PaymentPage,
    DonationsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
