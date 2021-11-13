import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { InfoService, TODO } from 'src/app/services/info.service';
@Component({
  selector: 'app-prgprog',
  templateUrl: './prgprog.page.html',
  styleUrls: ['./prgprog.page.scss'],
})
export class PrgprogPage implements OnInit {
  perguntasForm: FormGroup;
  constructor(
    public toastController: ToastController,
    private infoService: InfoService,
    private formBuilder: FormBuilder,
  ) {
    /*const borba: TODO = {
      title: 'teste',
      description: 'teste2'
    }
    this.infoService.create(borba).then(() => {
      console.log('gravouu!')
    }).catch(error => console.log(error));*/
  }

  async menssageConfirm() {
    const toast = await this.toastController.create({
      message: 'Foi Registrado!',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.perguntasForm = this.formBuilder.group({
      perna: [''],
      costas: [''],
      peito: [''],
      aerobico: [''],
    })
  }
  salvarPerguntas() {
    console.log(this.perguntasForm.value)
  }
}
