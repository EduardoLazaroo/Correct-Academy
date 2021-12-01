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
  perna: string;
  costas: string;
  peito: string;
  aerobico: string;
  valores: TODO;

  constructor(
    private router: Router,
    public toastController: ToastController,
    private infoService: InfoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.perguntasForm = this.formBuilder.group({
      perna: [''],
      costas: [''],
      peito: [''],
      aerobico: [''],
    })
  }

  salvarPerguntas() {    
    this.perna = this.perguntasForm.get('perna').value; 
    this.costas = this.perguntasForm.get('costas').value; 
    this.peito = this.perguntasForm.get('peito').value; 
    this.aerobico = this.perguntasForm.get('aerobico').value;

    this.valores = {
      perna: this.perna,
      costas: this.costas,
      peito: this.peito,
      aerobico: this.aerobico
    }

    this.infoService.create(this.valores).then(() => {}).catch(error => console.log(error));
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
