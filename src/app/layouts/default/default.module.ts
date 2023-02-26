import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RiverComponent } from 'src/app/modules/river/river.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { RiverDetailsComponent } from 'src/app/modules/river-details/river-details.component';
import { RegionComponent } from 'src/app/modules/region/region.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from 'src/app/modules/user-list/user-list.component';
import { RiverStatisticsComponent } from 'src/app/modules/river-details/river-statistics/river-statistics.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    RiverComponent,
    RiverDetailsComponent,
    RegionComponent,
    UserListComponent,
    RiverStatisticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
