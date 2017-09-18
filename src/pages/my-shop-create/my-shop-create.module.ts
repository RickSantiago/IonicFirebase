import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyShopCreatePage } from './my-shop-create';

@NgModule({
  declarations: [
    MyShopCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(MyShopCreatePage),
  ],
})
export class MyShopCreatePageModule {}
