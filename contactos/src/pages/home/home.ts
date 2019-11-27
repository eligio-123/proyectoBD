import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MoviePage } from '../movie/movie';
import { ContactoPage } from '../contacto/contacto';
import { DeletePage } from '../delete/delete';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies :any=[];
  moviePage = MoviePage;
  contacto = ContactoPage;
  delete = DeletePage;


  constructor(public navCtrl: NavController, public http: HttpClient, ) {
  //  this.http.get('/peliculas/peliculas/')
  //  .subscribe(data => {
  //    this.movies = data
  //    console.log(JSON.stringify(data));
  //  }, error => {
  //    console.log(JSON.stringify(error));
  //  });

  }
  ionViewWillEnter(){
    this.http.get('/contactos/contactos/')
    .subscribe(data => {
      this.movies = data;
      console.log(JSON.stringify(data));
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  clickAdd() {
    console.log('clickAdd');
    this.navCtrl.push(this.moviePage);
  }

  clickAdd2() {
    console.log('clickAdd');
    this.navCtrl.push(this.delete);
  }


  clickInfo(nombre, correo, telefono, facebook, twitter, instagram, img){
    this.navCtrl.push(this.contacto,{nombre:nombre, correo:correo, telefono:telefono, facebook:facebook, twitter:twitter, instagram:instagram, img:img});
  }
}