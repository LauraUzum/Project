import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: string | undefined;
  @Input() total: string | undefined;
  @Input() percentage: string | undefined;

  Highcharts = Highcharts;
  ChartOptions = {}
  chartOptions: any;

  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions =  {
      
      chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth: 0,
          margin:[2, 2, 2, 2],
          height: 60,
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      tooltip: {
          shared: true,
          outside: true,
      },
      legend: {
          enabled: false,
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOnOptions: []
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOnOptions: []
      },
      series: [{
        data: this.data,
      }]
  };

  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
    },300);
  }
}

