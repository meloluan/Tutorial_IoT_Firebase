import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

declare var $: any;
declare var require: any;

let i = 0;

@Component({
  selector: 'app-home-cmp',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  ultimoDado = 0;
  media = 0;
  varAux = 0;
  public lineChartLabels: Array<any> = [];
  public lineChartData: Array<any> = [
    {data: [], label: 'Dados'}
  ];
  public lineChartDataTemp: Array<any> = [
    {data: []}
  ];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  constructor(public db: AngularFireDatabase) {
    }
public ngOnInit() {
  this.teste();
}
  public ngAfterViewInit() {
  }
  public ngOnDestroy() {
  }
  newDataPoint(dataArr = [100], label) {

  this.lineChartData.forEach((dataset, index) => {
    this.lineChartData[index] = Object.assign({}, this.lineChartData[index], {
      data: [...this.lineChartData[index].data, dataArr[index]]
    });
  });

  this.lineChartLabels = [...this.lineChartLabels, label];

}
    teste() {
       this.db.database.ref('valorADC/').on('child_added', (child) => {
         let query = this.db.database.ref('valorADC/' + child.key);
         query.once('value').then((snapshot) => {
           this.newDataPoint([snapshot.val()], i++);
           this.ultimoDado = snapshot.val();
           this.varAux = this.varAux + this.ultimoDado;
           this.media = Math.floor(this.varAux / i);
         });
       });
    }
  }
