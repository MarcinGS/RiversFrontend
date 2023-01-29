import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';
import { FullpageadminComponent } from './layouts/fullpageadmin/fullpageadmin.component';
import { AdminRiverUpdateComponent } from './modules/admin/admin-river-update/admin-river-update.component';
import { AdminRiverComponent } from './modules/admin/admin-river/admin-river.component';
import { AdminComponent } from './modules/admin/admin.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RiverComponent } from './modules/river/river.component';

const routes: Routes = [
  {
    path:"", component: DefaultComponent, children:[
      {path:"", component: HomeComponent},
      {path:"rivers", component: RiverComponent}
    ]
  },
  {
    path:"", component: FullpageComponent, children:[
      {path:"login", component: LoginComponent}
    ]
  },
  {
    path:"", component: FullpageadminComponent, children:[
      {path:"admin", component: AdminComponent},
      {path:"admin/rivers", component: AdminRiverComponent},
      {path:"admin/rivers/update/:id", component: AdminRiverUpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
