import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router,
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
    }).catch(error => console.log(error));
  */
 
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

  async menssageConfirm() {
    const toast = await this.toastController.create({
      message: 'Foi Registrado!',
      duration: 1000
    });
    toast.present();
    this.router.navigate(['home']);
  }
}
