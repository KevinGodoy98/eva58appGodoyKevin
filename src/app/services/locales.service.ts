import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Local } from '../domain/local';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  constructor(public afs: AngularFirestore) { }

  save(local: Local){
    const refContactos = this.afs.collection("locales");

    if(local.uid == null){
        local.uid = this.afs.createId();
        local.activo = true;
    }

    refContactos.doc(local.uid).set(Object.assign({}, local));
  }

  getLocales(): Observable<any[]>{
    return this.afs.collection("locales",
      ref => ref.where("activo", "==", true)
    ).valueChanges();
  }
}
