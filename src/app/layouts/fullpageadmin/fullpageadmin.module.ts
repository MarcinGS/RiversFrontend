import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageadminComponent } from './fullpageadmin.component';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material.module';
import { AdminRiverComponent } from 'src/app/modules/admin/admin-river/admin-river.component';
import { AdminRiverUpdateComponent } from 'src/app/modules/admin/admin-river-update/admin-river-update.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminRiverComponent,
    AdminRiverUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FullpageadminModule { }
