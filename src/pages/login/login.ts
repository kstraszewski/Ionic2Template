import { Component } from '@angular/core';
import {HomePage} from "../home/home";
import {LoadingController, AlertController, Loading, NavController} from "ionic-angular";
import {AuthService} from "../../providers/auth-service";

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: Loading;
  registerCredentials = {email: '', password: ''};

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

  public createAccount() {
    // this.nav.push(RegisterPage);
  }

  public login() {
    this.nav.setRoot(HomePage);
/*  this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
        if (allowed) {
          setTimeout(() => {
            this.loading.dismiss();
            this.nav.setRoot(HomePage)
          });
        } else {
          this.showError("Access Denied");
        }
      },
      error => {
        this.showError(error);
      });*/
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
