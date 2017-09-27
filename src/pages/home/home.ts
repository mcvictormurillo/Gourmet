import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CartaPage } from '../carta/carta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToMenu(menuID){
    this.navCtrl.push(CartaPage,{menuID:menuID});

  }


}
