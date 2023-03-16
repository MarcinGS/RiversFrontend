import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';
import { FullpageadminComponent } from './layouts/fullpageadmin/fullpageadmin.component';
import { FullpageadminclearComponent } from './layouts/fullpageadminclear/fullpageadminclear.component';
import { AdminLoginComponent } from './modules/admin/admin-login/admin-login.component';
import { AdminRegionUpdateComponent } from './modules/admin/admin-region/admin-region-update/admin-region-update.component';
import { AdminRegionComponent } from './modules/admin/admin-region/admin-region.component';
import { AdminRiverAddComponent } from './modules/admin/admin-river/admin-river-add/admin-river-add.component';
import { AdminRiverUpdateComponent } from './modules/admin/admin-river/admin-river-update/admin-river-update.component';
import { AdminRiverComponent } from './modules/admin/admin-river/admin-river.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AdminAuthorizeGuard } from './modules/admin/common/guard/adminAuthorizeGuard';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RegionComponent } from './modules/region/region.component';
import { RiverDetailsComponent } from './modules/river-details/river-details.component';
import { RiverComponent } from './modules/river/river.component';
import { ShowRiverComponent } from './modules/river/show-river/show-river.component';
import { UserListComponent } from './modules/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'rivers', component: RiverComponent },
      { path: 'rivers/:id', component: RiverDetailsComponent },
      { path: 'regions/:name', component: RegionComponent },
      { path: 'userlist', component: UserListComponent },
      { path: 'showriver/:id', component: ShowRiverComponent }
    ],
  },
  {
    path: '',
    component: FullpageComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
    ],
  },
  {
    path: '',
    component: FullpageadminComponent,
    children: [
      { path: 'admin', component: AdminComponent, canActivate: [AdminAuthorizeGuard] },
      { path: 'admin/rivers', component: AdminRiverComponent,canActivate: [AdminAuthorizeGuard] },
      { path: 'admin/rivers/update/:id', component: AdminRiverUpdateComponent,canActivate: [AdminAuthorizeGuard] },
      { path: 'admin/rivers/add', component: AdminRiverAddComponent,canActivate: [AdminAuthorizeGuard] },
      { path: 'admin/region', component: AdminRegionComponent,canActivate: [AdminAuthorizeGuard] },
      {
        path: 'admin/region/update/:id',
        component: AdminRegionUpdateComponent,canActivate: [AdminAuthorizeGuard]
      }
    ],
  },
  {
    path: '',
    component: FullpageadminclearComponent,
    children: [
      { path: 'admin/login', component: AdminLoginComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
