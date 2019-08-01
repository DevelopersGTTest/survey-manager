import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public radarChartLabels: any[] = ['Training', 'Attention Changes', 'Designing Template', 'Development', 'Unit/Int Testing', 'Integrated Solutions'];

  public radarChartData: any[] = [
    { data: [59, 90, 81, 56, 55, 40], label: 'izquierda' },
    { data: [48, 40, 19, 96, 27, 100], label: 'centro' },
    { data: [20, 10, 19, 31, 8, 29], label: 'derecha' }
  ];

  public radarChartType: any = 'radar';

  constructor() { }

  ngOnInit() {
  }

}
