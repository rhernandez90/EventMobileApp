import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EventsDetailPage } from '../events-detail/events-detail'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  films: Observable<any>;
  eventos: Array<any>;
  constructor(public navCtrl: NavController,private http: HttpClient) {
    let currentDate = new Date().toISOString().split('T')[0];
    this.films = this.http.get('http://chameleondev.eastus2.cloudapp.azure.com/webapi/api/eventos?fechafinal='+currentDate);
     this.films
    .subscribe(data => {
      this.eventos = data;
    })
  }

  eventDetail(evento) {
    this.navCtrl.push(EventsDetailPage,{ 
          ID_Evento:evento.ID_Evento
        });
  }

}
