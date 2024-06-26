import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageadminclearComponent } from './fullpageadminclear.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from 'src/app/modules/admin/admin-login/admin-login.component';

@NgModule({
  declarations: [
    FullpageadminclearComponent,
     AdminLoginComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class FullpageadminclearModule {}
