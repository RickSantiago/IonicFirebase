import { MyShopItem } from '../../models/myshop-item/shop-item.interface';
import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { CreateListShopPage } from '../create-list-shop/create-list-shop';
import { FirebaseListObservable } from 'angularfire2/database/firebase_list_observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { CreateShopList } from '../../models/create-shop/create-shop.interface';

@IonicPage()
@Component({
  selector: 'page-my-shop-list',
  templateUrl: 'my-shop-list.html',
})
export class MyShopListPage {

  shopListRef$: FirebaseListObservable<MyShopItem[]>
  
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private baseDados: AngularFireDatabase,
  private actionSheetController: ActionSheetController,
  public platform: Platform) {

    this.shopListRef$ = this.baseDados.list('my-shop-list');
    // this.shopListRef$.subscribe(data => console.log)
  }

  criarLista(){
    //Ir ate a pagina de criacao de item
    this.navCtrl.push(CreateListShopPage)
  }

  selecionaListaItem(listaItem: CreateShopList){
    
    this.actionSheetController.create({
      title: `${listaItem.nomeLista}`,
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Editar',
          icon: 'md-create',
          handler: () => {
            // Editar lista futuramente
            console.log("usuario clicou no botao editar")
          }
        },
        {
          text: 'Excluir',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            //deletar lista
            this.shopListRef$.remove(listaItem.$key)
            console.log("usuario clicou no botao excluir")
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            //deletar lista
            console.log("usuario clicou no botao cancelar")
          }
        }
      ]
    }).present();

  }


}
