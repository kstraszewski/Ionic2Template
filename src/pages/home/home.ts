import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {Page2} from "../page2/page2";
import {Page1} from "../page1/page1";

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 },
      { title: 'Logowanie', component: LoginPage }
    ];
  }
  openPage(page) {
    this.navCtrl.setRoot(page.component);
  }

}
