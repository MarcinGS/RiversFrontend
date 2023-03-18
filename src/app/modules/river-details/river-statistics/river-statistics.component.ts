import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartData, registerables } from 'chart.js';
import { RiverDetails } from '../model/riverDetails';
import 'chartjs-adapter-date-fns';


@Component({
  selector: 'app-river-statistics',
  templateUrl: './river-statistics.component.html',
  styleUrls: ['./river-statistics.component.scss']
})
export class RiverStatisticsComponent implements AfterViewInit {

  @ViewChild("stats") private stats!: ElementRef;
  chart!: Chart;

  @Input() 
  river!: RiverDetails;
 
  private data = {
    labels: [],
    datasets: [{
     label: 'Poziom wody',
     data: [],
     fill: false,
     borderColor: '#673ab7',
     tension: 0.1,
     order: 1,
     yAxisID: 'y'
    },
    {
      label: 'Temperatura wody',
      data: [],
      fill: false,
      borderColor: '#ffd740',
      tension: 0.1,
      order: 0,
      yAxisID: 'y1'
     }]
    }as ChartData;

  constructor() {
    Chart.register(...registerables);
   }

  ngAfterViewInit(): void {
    this.setupChart();
    this.setData();
    
  }
  
  setData() {
    let levels = this.river.measurements.map(r =>r.waterLevel);
    this.data.datasets[0].data = levels;
    let temperature = this.river.measurements.map(r =>r.waterTemp);
    this.data.datasets[1].data = temperature;
    let dats = this.river.measurements.map(r => r.waterDate);
    this.data.labels = dats;
   }

  
   setupChart() {
    this.chart = new Chart(this.stats.nativeElement, {
        type: 'line',
        data: this.data,
        options:{
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day'
              }
            },
            y: {
              type: 'linear',
              display: true,
              position: 'left',
            
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              grid: {
                drawOnChartArea: false, 
              },
          }
        }
      }});
    }
  }

  


