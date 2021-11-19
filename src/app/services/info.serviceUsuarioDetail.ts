import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Info } from '../interfaces/info';
import { Router } from '@angular/router';

export class userDetail {
  email: string;
  nomeCompleto: string;
  altura: number;
  peso: number;
}

@Injectable({
  providedIn: 'root'
})
export class InfoServiceUsuarioDetail {
  private infoCollection: AngularFirestoreCollection<Info>;

  constructor(
    private afs: AngularFirestore,
    private router: Router) {
    this.infoCollection = this.afs.collection<Info>('Info');
  }

  create(todo: userDetail) {
    return this.afs.collection('usuarioDetail').add(userDetail);
  }

  getTasks() {
    return this.afs.collection('usuarioDetail').snapshotChanges();
  }
  
  getTask(id) {
    return this.afs.collection('usuarioDetail').doc(id).valueChanges();
  }

  update(id, userDetail: userDetail) {
    this.afs.collection('usuarioDetail').doc(id).update(userDetail)
      .then(() => {
        this.router.navigate(['/todo-list']);
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.afs.doc('usuarioDetail/' + id).delete();
  }

}