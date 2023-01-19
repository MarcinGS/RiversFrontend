import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { RiverComponent } from './modules/river/river.component';

const routes: Routes = [
  {
    path:"", component: DefaultComponent, children:[
      {path:"", component: HomeComponent},
      {path:"rivers", component: RiverComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
