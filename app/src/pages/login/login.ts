import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  constructor(public navCtrl: NavController) { }

  login() {
    this.navCtrl.push(WeatherPage);
  }
}
