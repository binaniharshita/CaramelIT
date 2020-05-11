import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts';
// import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './widget-area.component.html',
  styleUrls: ['./widget-area.component.css']
})
export class WidgetAreaComponent implements OnInit {
  chartOptions: {};

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'REPORTS'
      },
      subtitle: {
        text: 'Database'
      },
      tooltip: {
        split: true,
        valueSuffix: ' in numbers'
      },
      credits:{
        enabled: false
      },
      exporting: {
        enabled: true
      },
      series: [{
        name: 'Student',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
        name: 'Instructor',
        data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
        name: 'University',
        data: [163, 203, 276, 408, 547, 729, 628]
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
