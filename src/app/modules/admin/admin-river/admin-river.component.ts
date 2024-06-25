import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatLegacyTable as MatTable } from '@angular/material/legacy-table';
import { delay, startWith, switchMap } from 'rxjs';
import { AdminConfirmDialogService } from '../common/service/admin-confirm-dialog.service';
import { AdminRiverService } from './admin-river.service';
import { AdminRiver } from './model/adminRiver';

@Component({
  selector: 'app-admin-river',
  templateUrl: './admin-river.component.html',
  styleUrls: ['./admin-river.component.scss'],
})
export class AdminRiverComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;
  totalElements: number = 0;
  dataSource: AdminRiver[] = [];

  displayedColumns: string[] = [
    'image',
    'stationId',
    'riverName',
    'stationName',
    'region',
    'actions',
  ];

  constructor(
    private adminRiverService: AdminRiverService,
    private adminConfirmDialogService: AdminConfirmDialogService
  ) {}

  ngAfterViewInit(): void {
    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.adminRiverService.getRivers(
            this.paginator.pageIndex,
            this.paginator.pageSize
          );
        })
      )
      .subscribe((data) => {
        this.totalElements = data.totalElements;
        this.dataSource = data.content;
      });
  }

  confirmDelete(element: AdminRiver) {
    this.adminConfirmDialogService
      .openConfirmDialog('Czy na pewno chcesz usunąć tą pozycje?')
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.adminRiverService.delete(element.id).subscribe(() => {
            this.dataSource.forEach((value, index) => {
              if (element == value) {
                this.dataSource.splice(index, 1);
                this.table.renderRows();
              }
            });
          });
        }
      });
  }
}
