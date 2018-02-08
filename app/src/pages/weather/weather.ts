import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
    selector: 'page-weather',
    templateUrl: 'weather.html'
})

export class WeatherPage {
    constructor(public navCtrl: NavController) { }

    toHome() {
        this.navCtrl.push(HomePage)
    }
    goBack(){
        this.navCtrl.pop()
    }
}
