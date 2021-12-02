import { Component, OnInit } from '@angular/core';
import { InfoService} from 'src/app/services/info.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InfoServiceUsuarioDetail } from 'src/app/services/info.serviceUsuarioDetail';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

interface userDetail {
  email: string;
  nomeCompleto: string;
  altura: number;
  peso: number;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {
 /* perguntasForm: FormGroup;
  Tasks: TODO[];*/
  userLogged: userDetail;
  constructor(
    private router: Router,
    private infoServiceUsuarioDetail: InfoServiceUsuarioDetail,
    private storage: Storage,
    /*private infoService: InfoService,
    private formBuilder: FormBuilder*/
  ) { }

  dpsEuvejo(email){
    this.infoServiceUsuarioDetail.getUsuarioDetails()
    .subscribe((usersDetail) =>{
      return usersDetail.forEach((changes) =>{
        const changesMatch:any = changes.payload.doc.data();
        if(changesMatch.email == email){

          this.userLogged = {
            email: changesMatch.email,
            peso: changesMatch.peso,
            altura: changesMatch.altura,
            nomeCompleto: changesMatch.nomeCompleto,
            
          }
        }else{
          console.log('Nenhum detalhe de usuário encontrado.')
        }
      })
    });
  }
  async ngOnInit() {
    this.storage.create();
    await this.storage.get('email').then((val)=>{
      this.dpsEuvejo(val);
    });
  }
  
  /*todoList() {
    this.infoService.getTasks()
    .subscribe((data) => {
      console.log(data)
    })
  }

  remove(id) {
    console.log(id)
    if (window.confirm('Are you sure?')) {
      this.infoService.delete(id)
    }
  } */

}
