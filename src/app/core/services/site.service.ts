import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor( private af: AngularFirestore ) {} 

  saveOpinion( data : any  ) {
    console.log(data)
    this.af.collection('opiniones').add( data )
  }

}
