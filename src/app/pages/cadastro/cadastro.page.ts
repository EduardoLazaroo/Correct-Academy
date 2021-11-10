import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public userRegister: User = {};
  private loading: any;

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private tostCtrl: ToastController,
    private authService: AuthService
    
  ) { }

  ngOnInit() {
  }
  // inicio registro - cadastro
  async register() {
    await this.presentLoading();
    // try
    try {
      await this.authService.register(this.userRegister);
      this.router.navigate(['home']);
    } catch (error) {
      console.error(error);
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por Favor aguarde...' });
    return this.loading.present();
  }
 
  async presentToast(message: string) {
    const toast = await this.tostCtrl.create({ message, duration: 6000 });
    toast.present();
  }
  
  pageInitial() {
    this.router.navigate(['login']);
  }

}
