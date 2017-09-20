import { MyShopListPage } from '../my-shop-list/my-shop-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  usuario = "Ricardo Santiago"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario
  }

    irParaListas(){
    //Ir ate a pagina de criacao de item
    this.navCtrl.push(MyShopListPage)
  }

}
