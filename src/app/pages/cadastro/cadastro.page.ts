import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { InfoServiceUsuarioDetail, userDetail } from 'src/app/services/info.serviceUsuarioDetail';
import { LoadingController, ToastController } from '@ionic/angular';
import { InfoService, TODO } from 'src/app/services/info.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public userRegister: User = {};
  private loading: any;
  email: string;
  nomeCompleto: string;
  altura: number;
  peso: number;
  userDetail: userDetail;

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private tostCtrl: ToastController,
    private authService: AuthService,
    private InfoServiceUsuarioDetail: InfoServiceUsuarioDetail,
    private infoService: InfoService,

  ) { }

  ngOnInit() {
  }
  // inicio registro - cadastro
  async register() {

    this.userDetail = {
      email: this.userRegister.email,
      nomeCompleto: this.userRegister.nomeCompleto,
      altura: this.userRegister.altura,
      peso: this.userRegister.peso
    }
    await this.presentLoading();

    try {

      await this.authService.register(this.userRegister).then((response)=>{
        if(response.additionalUserInfo.isNewUser == true){
          this.InfoServiceUsuarioDetail.create(this.userDetail).then((response) => {
          }).catch(error => console.log(error));
        }
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
    const toast = await this.tostCtrl.create({ message, duration: 6000 });
    toast.present();
  }

  pageInitial() {
    this.router.navigate(['login']);
  }

}
