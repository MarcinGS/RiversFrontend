import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageadminComponent } from './fullpageadmin.component';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material.module';
import { AdminRiverComponent } from 'src/app/modules/admin/admin-river/admin-river.component';
import { AdminRiverUpdateComponent } from 'src/app/modules/admin/admin-river/admin-river-update/admin-river-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRiverAddComponent } from 'src/app/modules/admin/admin-river/admin-river-add/admin-river-add.component';
import { AdminRiverFormComponent } from 'src/app/modules/admin/admin-river/admin-river-form/admin-river-form.component';
import { AdminConfirmDialogComponent } from 'src/app/modules/admin/common/component/admin-confirm-dialog/admin-confirm-dialog.component';
import { AdminRegionComponent } from 'src/app/modules/admin/admin-region/admin-region.component';
import { AdminRegionUpdateComponent } from 'src/app/modules/admin/admin-region/admin-region-update/admin-region-update.component';
import { AdminRegionFormComponent } from 'src/app/modules/admin/admin-region/admin-region-form/admin-region-form.component';

@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminRiverComponent,
    AdminRiverUpdateComponent,
    AdminRiverAddComponent,
    AdminRiverFormComponent,
    AdminConfirmDialogComponent,
    AdminRegionComponent,
    AdminRegionUpdateComponent,
    AdminRegionFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class FullpageadminModule {}
