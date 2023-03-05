import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RiverComponent } from 'src/app/modules/river/river.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { RiverDetailsComponent } from 'src/app/modules/river-details/river-details.component';
import { RegionComponent } from 'src/app/modules/region/region.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from 'src/app/modules/user-list/user-list.component';
import { RiverStatisticsComponent } from 'src/app/modules/river-details/river-statistics/river-statistics.component';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';
import { UserItemdetailsComponent } from 'src/app/modules/user-list/user-itemdetails/user-itemdetails.component';
import { ShowRiverComponent } from 'src/app/modules/river/show-river/show-river.component';

@NgModule({
  declarations: [
    DefaultComponent,
    RiverComponent,
    RiverDetailsComponent,
    RegionComponent,
    UserListComponent,
    RiverStatisticsComponent,
    ProfileComponent,
    UserItemdetailsComponent,
    ShowRiverComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class DefaultModule {}
