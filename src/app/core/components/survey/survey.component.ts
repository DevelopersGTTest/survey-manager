import { Component, OnInit } from '@angular/core';
import { Survey } from '../../models/survey';
import { SiteService } from '../../services/site.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  private showInputOne : boolean = false
  private showInputTwo : boolean = false
  private survey : Survey = new Survey()

  constructor(
    private siteService : SiteService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  noTraditionalism(evt) {
    console.log('this event is', evt.target.name );
    ( evt.target.checked === true 
      && evt.target.id  == "notAgreed" ) 
      ? this.showInputOne = true 
      : this.showInputOne = false ;

  }

  noDemocracyAply(evt){
    console.log('this event is', evt.target.id );
    ( evt.target.checked === true 
      && evt.target.id  == "notDemocracy" ) 
      ? this.showInputTwo = true 
      : this.showInputTwo = false ;
  }

  saveSurvey(){
    //console.log( this.survey )
    this.siteService.saveOpinion( this.survey )
      .subscribe( data => {
        console.log( data )
        Swal.fire(
          'Gracias!',
          'valoramos tu tiempo!',
          'success'
        )
      })
      this.router.navigate(['/results'])
  }

}
