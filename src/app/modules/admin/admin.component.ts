import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { StatisticsDto } from './common/dto/statisticsDto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isComplited = false;
  statistics!: StatisticsDto;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void { 
    this.update();
  }

  update(): void{
    this.isComplited = true;
    this.adminService.update()
    .subscribe(stats => {
      setTimeout(() => this.isComplited = false, 3000);
      this.statistics = stats;
    });
  }

}
