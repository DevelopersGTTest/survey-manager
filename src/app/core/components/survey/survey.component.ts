import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  private showInputOne : boolean = false
  private showInputTwo : boolean = false

  constructor() { }

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

}
