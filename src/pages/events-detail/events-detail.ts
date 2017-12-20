import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
//import { NavParams } from 'ionic-angular';
/**
 * Generated class for the EventsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events-detail',
  templateUrl: 'events-detail.html',
})
export class EventsDetailPage {
  evento:any = {};
  obs: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    let ID_Evento = navParams.get('ID_Evento'); 
    console.log(ID_Evento);
    this.obs = this.http.get(`http://chameleondev.eastus2.cloudapp.azure.com/webapi/api/eventos?id_evento=${ID_Evento}&dirtyBit=a`);
    this.obs.subscribe(data => {
      this.evento = data[0];
      console.log(this.evento);
    })

  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad EventsDetailPage');
  }

}
