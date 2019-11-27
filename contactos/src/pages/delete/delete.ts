import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the DeletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html',
})
export class DeletePage {
  nombre = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeletePage');
  }
  addMovie() {
    console.log('addMovie');

    const movie = {
      nombre: this.nombre
    };
    console.log(JSON.stringify(movie));

    this.http.post('/contactos/contactos/', movie)
    .subscribe(data => {
      console.log(JSON.stringify(data));
      this.navCtrl.pop();
    }, error => {
      console.log(JSON.stringify(error));
      this.navCtrl.pop();
    });
  }

}
