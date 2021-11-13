import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Info } from '../interfaces/info';
import { Router } from '@angular/router';

export class TODO {
  $key?: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private infoCollection: AngularFirestoreCollection<Info>;

  constructor(
    private afs: AngularFirestore,
    private router: Router) {
    this.infoCollection = this.afs.collection<Info>('Info');
  }

  create(todo: TODO) {
    return this.afs.collection('tasks').add(todo);
  }

  getTasks() {
    return this.afs.collection('tasks').snapshotChanges();
  }
  
  getTask(id) {
    return this.afs.collection('tasks').doc(id).valueChanges();
  }

  update(id, todo: TODO) {
    this.afs.collection('tasks').doc(id).update(todo)
      .then(() => {
        this.router.navigate(['/todo-list']);
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.afs.doc('tasks/' + id).delete();
  }

}