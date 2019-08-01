import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  private showInputOne : boolean = false

  constructor() { }

  ngOnInit() {
  }

  noTraditionalism(evt) {
    console.log('el evento es', evt.target.name );
    ( evt.target.checked === true && evt.target.id  == "notAgreed" ) 
      ? this.showInputOne = true 
      : this.showInputOne = false ;

  }

}
