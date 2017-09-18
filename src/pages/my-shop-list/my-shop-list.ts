import { MyShopCreatePage } from './../my-shop-create/my-shop-create';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-shop-list',
  templateUrl: 'my-shop-list.html',
})
export class MyShopListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  criarLista(){
    //Ir ate a pagina de criacao de item
    this.navCtrl.push(MyShopCreatePage)
  }

}
