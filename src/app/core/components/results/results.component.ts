import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public numberPersons : number = 0;

  public radarChartLabels: any[] = ['Tradicionalista por la familia', 'Monopolios', 'Marcas', 'Opinion democratica'];

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
        console.log( data )
        this.numberPersons = Object.keys( data ).length
      })
  }

}
