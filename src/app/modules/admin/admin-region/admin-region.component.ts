import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyTable as MatTable } from '@angular/material/legacy-table';
import { AdminConfirmDialogService } from '../common/service/admin-confirm-dialog.service';
import { AdminRegionNamesDto } from '../common/dto/adminRegionNameDto';
import { AdminRegionService } from './admin-region.service';

@Component({
  selector: 'app-admin-region',
  templateUrl: './admin-region.component.html',
  styleUrls: ['./admin-region.component.scss'],
})
export class AdminRegionComponent implements OnInit {
  dataSource: Array<AdminRegionNamesDto> = [];
  @ViewChild(MatTable) table!: MatTable<any>;

  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(
    private adminRegionService: AdminRegionService,
    private dialogService: AdminConfirmDialogService
  ) {}

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions() {
    this.adminRegionService
      .getRegions()
      .subscribe((regions) => (this.dataSource = regions));
  }

  confirmDelete(element: AdminRegionNamesDto) {
    this.dialogService
      .openConfirmDialog('Czy na pewno chcesz usunąć tą pozycje?')
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.adminRegionService.delete(element.id).subscribe(() => {
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
