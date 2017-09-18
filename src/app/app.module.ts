
import { AngularFireDatabaseModule } from 'angularfire2/database/database.module';
import { MyShopCreatePage } from './../pages/my-shop-create/my-shop-create';
import { MyShopListPage } from './../pages/my-shop-list/my-shop-list';
import { FIREBASE_CREDENCIAIS } from './firebase.credenciais';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import {AngularFireModule} from 'angularfire2'

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CreateListShopPage } from '../pages/create-list-shop/create-list-shop';


@NgModule({
  declarations: [
    MyApp,
    MyShopListPage,
    MyShopCreatePage,
    CreateListShopPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Inicializando angular fire credenciais para dashboard
    AngularFireModule.initializeApp(FIREBASE_CREDENCIAIS),
    //Importar angularfirebase para iteração com a base de dados
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyShopListPage,
    MyShopCreatePage,
    CreateListShopPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
