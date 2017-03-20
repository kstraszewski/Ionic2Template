import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from "../pages/login/login";
import {HomePage} from "../pages/home/home";
import {AuthService} from "../providers/auth-service";
import {nvD3} from "ng2-nvd3";

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    HomePage,
    nvD3
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    HomePage,

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
