import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    MatBadgeModule,
    MatProgressBarModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    MatBadgeModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { } 