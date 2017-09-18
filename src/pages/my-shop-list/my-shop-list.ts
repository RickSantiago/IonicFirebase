import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateListShopPage } from '../create-list-shop/create-list-shop';

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
    this.navCtrl.push(CreateListShopPage)
  }

}
