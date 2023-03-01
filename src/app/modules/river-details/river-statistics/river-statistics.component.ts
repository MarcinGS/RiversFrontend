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
     borderColor: 'rgb(75, 192, 192)',
     tension: 0.1
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
            }
          }
        }
      });
    }
  }

  


