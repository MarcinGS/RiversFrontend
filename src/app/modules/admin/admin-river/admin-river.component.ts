import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { delay, startWith, switchMap } from 'rxjs';
import { AdminRiverService } from './admin-river.service';
import { AdminRiver } from './model/adminRiver';

@Component({
  selector: 'app-admin-river',
  templateUrl: './admin-river.component.html',
  styleUrls: ['./admin-river.component.scss']
})
export class AdminRiverComponent implements AfterViewInit {

 @ViewChild(MatPaginator) paginator!: MatPaginator;
 totalElements: number = 0;
 dataSource: AdminRiver[] = [];

  displayedColumns: string[] =[
    "stationId",
    "riverName",
    "stationName",
    "region",
    "actions"
  ];
  constructor(private adminRiverService: AdminRiverService) { }
  
  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.adminRiverService.getRivers(this.paginator.pageIndex, this.paginator.pageSize);
      }))
        .subscribe(data => {
          this.totalElements = data.totalElements;
          this.dataSource = data.content;
      });
  }

}
