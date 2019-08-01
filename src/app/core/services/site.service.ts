import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private API_URL = "https://umg-generic.firebaseio.com/surveys.json" 

  constructor( private http: HttpClient ) {} 

  saveOpinion( data : any  ) : Observable<any> {
    let body = JSON.stringify(data )
    return this.http.post( this.API_URL, body )
  }

}
