import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RiverComponent } from 'src/app/modules/river/river.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { RiverDetailsComponent } from 'src/app/modules/river-details/river-details.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    RiverComponent,
    RiverDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }
