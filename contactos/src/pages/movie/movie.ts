import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {
  nombre = "";
  correo = "";
  telefono = "";
  facebook = "";
  twitter = "";
  instagram = "";
  img = "https://dce5jani6jm7e.cloudfront.net/images/elements/author.jpg";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviePage');
  }
  addMovie() {
    console.log('addMovie');

    const movie = {
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono,
      facebook: this.facebook,
      twitter: this.twitter,
      instagram: this.instagram,
      img: this.img

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
