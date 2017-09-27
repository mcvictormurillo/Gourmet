import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',

})
export class Home2Page {
  public menuID: number;
  public plato: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.menuID = this.navParams.get('menuID');
      switch(this.menuID){
        case 1: this.plato="Parrilla";
        break;
        case 2: this.plato="Bisteck";
        break;
        case 3: this.plato="Pasta";
        break;
        case 4: this.plato="Pescados y Mariscos";
        break;
      }    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Home2Page');
  }

}
