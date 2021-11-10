import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-prgprog',
  templateUrl: './prgprog.page.html',
  styleUrls: ['./prgprog.page.scss'],
})
export class PrgprogPage implements OnInit {

  constructor(public toastController: ToastController) { }
  async menssageConfirm() {
    const toast = await this.toastController.create({
      message: 'Foi Registrado!',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
