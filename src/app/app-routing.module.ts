import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';
import { FullpageadminComponent } from './layouts/fullpageadmin/fullpageadmin.component';
import { AdminRegionUpdateComponent } from './modules/admin/admin-region/admin-region-update/admin-region-update.component';
import { AdminRegionComponent } from './modules/admin/admin-region/admin-region.component';
import { AdminRiverAddComponent } from './modules/admin/admin-river/admin-river-add/admin-river-add.component';
import { AdminRiverUpdateComponent } from './modules/admin/admin-river/admin-river-update/admin-river-update.component';
import { AdminRiverComponent } from './modules/admin/admin-river/admin-river.component';
import { AdminComponent } from './modules/admin/admin.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RegionComponent } from './modules/region/region.component';
import { RiverDetailsComponent } from './modules/river-details/river-details.component';
import { RiverComponent } from './modules/river/river.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'rivers', component: RiverComponent },
      { path: 'rivers/:stationId', component: RiverDetailsComponent },
      { path: 'regions/:name', component: RegionComponent },
    ],
  },
  {
    path: '',
    component: FullpageComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
  {
    path: '',
    component: FullpageadminComponent,
    children: [
      { path: 'admin', component: AdminComponent },
      { path: 'admin/rivers', component: AdminRiverComponent },
      { path: 'admin/rivers/update/:id', component: AdminRiverUpdateComponent },
      { path: 'admin/rivers/add', component: AdminRiverAddComponent },
      { path: 'admin/region', component: AdminRegionComponent },
      {
        path: 'admin/region/update/:id',
        component: AdminRegionUpdateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
