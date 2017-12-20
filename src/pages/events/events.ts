import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { EventsDetailPage } from '../events-detail/events-detail'

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  @ViewChild(Nav) nav: Nav;

  categoriaId:string;
  nombreCategoria:string;
  eventos: Array<any>;
  obs: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
      this.categoriaId = navParams.get('ID_Categoria');
      this.nombreCategoria = navParams.get('Nombre_Categoria'); 
      let currentDate = new Date().toISOString().split('T')[0];
      this.obs = this.http.get(`http://chameleondev.eastus2.cloudapp.azure.com/webapi/api/Eventos?fechaFinal=${currentDate}&idCategoria=${this.categoriaId}`);
      this.obs.subscribe(data => {
        this.eventos = data;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');  
  }

  eventDetail(evento) {
    this.navCtrl.push(EventsDetailPage,{ 
          ID_Evento:evento.ID_Evento
        });
  }

}
