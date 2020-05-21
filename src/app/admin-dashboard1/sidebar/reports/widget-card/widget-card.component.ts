import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.css']
})
export class WidgetCardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;

  Highcharts = Highcharts;
  chartOptions= {};

  constructor() { }

  ngOnInit(): void {


    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        margin:[2,2,2,2]
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        valueSuffix: ' in numbers'
      },
      legend:{
        enabled:true
      },
      credits:{
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'Student',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      }
    ]

    };
    HC_exporting(Highcharts);
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
