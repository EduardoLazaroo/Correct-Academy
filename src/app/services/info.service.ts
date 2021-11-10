import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Info } from '../interfaces/info';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private infoCollection: AngularFirestoreCollection<Info>;

  constructor(private afs: AngularFirestore) {
    this.infoCollection = this.afs.collection<Info>('Products');
  }

  getInfos() {
    return this.infoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        })
      })
    )
  }

  addInfo(info: Info) {

  }

  getInfo(id: string) {

  }

  updateInfo(id: string, info: Info) {

  }
  deleteInfo(id: string) {

  }


}
