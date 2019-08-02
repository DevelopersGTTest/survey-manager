import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public numberPersons : number = 0;
  public arrDegub : any[] = []

  public radarChartLabels: any[] = ['Tradicionalista por la familia', 'Monopolios', 'Marcas', 'Opinion democratica'];

  private dataArray: any[] =[
    { id : 1 , family: "si", age: 20 , mark : "Coca-Cola", democracy: "no" },
    { id : 2,  family: "si", age: 19 , mark : "Coca-Cola", democracy: "si" },
    { id : 3,  family: "si", age: 19 , mark : "Coca-Cola", democracy: "no" },
    { id : 4,  family: "no", age: 19 , mark : "Coca-Cola", democracy: "si" },
    { id : 5, family: "si", age: 28 , mark : "Coca-Cola", democracy: "si" },
    { id : 6, family: "si", age: 50 , mark : "Coca-Cola", democracy: "si" },
    { id : 7, family: "no", age: 18 , mark : "Coca-Cola", democracy: "si" },
    { id : 8,  family: "si", age: 20 , mark : "Coca-Cola", democracy: "si" },

  ] 

  public radarChartData: any[] = [
    { data: [59, 90, 81, 56 ], label: 'izquierda' },
    { data: [48, 40, 19, 96 ], label: 'centro' },
    { data: [20, 10, 19, 31 ], label: 'derecha' }
  ];   

  public radarChartType: any = 'radar';

  constructor(private siteService : SiteService ) { }

  ngOnInit() {
    this.siteService.recoverOpinions()
      .subscribe( data =>{
        //console.log( data )
        this.arrDegub = data
        this.numberPersons = Object.keys( data ).length
       
      })
    
  }

  calculate(){
    //building
  }

}
