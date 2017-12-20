import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { EventsPage } from '../pages/events/events';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  obs: Observable<any>;
  eventos: Array<any>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private http: HttpClient) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages =  []
    /*[
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];*/

    this.obs = this.http.get('http://chameleondev.eastus2.cloudapp.azure.com/webapi/api/Categoria_Evento');
    this.obs
    .subscribe(data => {
      this.pages = data;
    })

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(categoria) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(EventsPage,{ ID_Categoria: categoria.ID_Categoria,Nombre_Categoria:categoria.Nombre_Categoria});
  }
}
