import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';
import { Info } from 'src/app/interfaces/info';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private infos = new Array<Info>();
  private infosSubsccription: Subscription;

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
    private afa: AngularFireAuth,
    private infosServices: InfoService) {
    this.infosSubsccription = this.infosServices.getInfos().subscribe(data => {
      this.infos = data;
    })
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.infosSubsccription.unsubscribe();
  }

  logout(){
    this.afa.signOut();
  }
  
}
