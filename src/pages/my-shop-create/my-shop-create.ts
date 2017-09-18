import { FirebaseListObservable } from 'angularfire2/database/firebase_list_observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { MyShopItem } from '../../models/myshop-item/shop-item.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-shop-create',
  templateUrl: 'my-shop-create.html'
})
export class MyShopCreatePage {

  //criando novo objeto de itens
  itemCompra = { } as MyShopItem

  itemCompraRef$: FirebaseListObservable<MyShopItem[]>

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private baseDados: AngularFireDatabase) 
    {
      this.itemCompraRef$ = this.baseDados.list('my-shop-list');
    }

  cadastrarItem(itemCompra: MyShopItem){
    //resultado do objeto criado anterior
     this.itemCompraRef$.push({
        nome: this.itemCompra.nome,
        quantidade: Number(this.itemCompra.quantidade),
        preco: Number(this.itemCompra.preco),
        dataCompra: this.itemCompra.dataCompra
     });

     this.itemCompra = {} as MyShopItem;

     //retornar a tela de listagem
     this.navCtrl.pop();
  }

}
