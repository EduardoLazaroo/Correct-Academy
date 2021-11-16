import { Component, OnInit } from '@angular/core';
import { InfoService} from 'src/app/services/info.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
/*
export class TODO {
  $key: string;
  title: string;
  description: string;
}*/

export class PerfilPage implements OnInit {
 /* perguntasForm: FormGroup;
  Tasks: TODO[];*/

  constructor(
    private router: Router
    /*private infoService: InfoService,
    private formBuilder: FormBuilder*/
  ) { }

  ngOnInit() {
   /* this.infoService.getTasks().subscribe((res) => {
      this.Tasks = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as TODO
        };
      })
    });*/
  }/*

  todoList() {
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
