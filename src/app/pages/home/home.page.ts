import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Info } from 'src/app/interfaces/info';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private infos = new Array<Info>();

slideOpts = {
    slidesPerview: 1,
    centerSlides: true,
    loop: true,
    spaceBetween: 10,
    initialSlide: 0,
    speed: 2000,
    autoplay: true,
  };
  constructor(
    private afa: AngularFireAuth) {
   }

  ngOnInit() {
  }

  logout(){
    this.afa.signOut();
  }
  
}
