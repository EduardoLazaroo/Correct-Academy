import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {};
  private loading: any;
  // private _storage: Storage | null = null;

  constructor(
    private router: Router,
    //implementado
    private loadingCtrl: LoadingController,
    private tostCtrl: ToastController,
    private authService: AuthService,
    private storage: Storage,
  ) { }

  ngOnInit() {
  }
  // inicio login
  async login() {
    await this.presentLoading();
    //try
    try {
      await this.authService.login(this.userLogin).then(response=>{
        this.storage.create();
        this.storage.set('email', response.user.email);
        const fonn = this.storage.get('email');
      });
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
    const toast = await this.tostCtrl.create({ message, duration: 5000 });
    toast.present();
  }
  // fim login

  cadastrar() {
    this.router.navigate(['cadastro']);
  }
  perna() {
    this.router.navigate(['perna']);
  }
}
