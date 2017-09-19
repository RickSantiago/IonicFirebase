
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateShopList } from '../../models/create-shop/create-shop.interface';
import { FirebaseListObservable } from 'angularfire2/database/firebase_list_observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { MyShopItem } from '../../models/myshop-item/shop-item.interface';

/**
 * Generated class for the CreateListShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-list-shop',
  templateUrl: 'create-list-shop.html',
})
export class CreateListShopPage {

  itemLista = { } as CreateShopList
  itemListaRef$: FirebaseListObservable<CreateShopList[]>

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     private baseDados: AngularFireDatabase) 
     {
       this.itemListaRef$ = this.baseDados.list('my-shop-list');
     }


 cadastrarLista(itemLista: CreateShopList){
   this.itemListaRef$.push({
     nomeLista: this.itemLista.nomeLista,
     nomeMercado: this.itemLista.nomeMercado,
     dataLista: this.itemLista.dataLista
   });

   this.itemLista = {} as CreateShopList;

   this.navCtrl.pop();
 }

}
