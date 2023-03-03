import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubuserdashboardComponent } from './subuserdashboard/subuserdashboard.component';

const routes: Routes = [
  {path:'subuser/subuserdashboard', component:SubuserdashboardComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubuserRoutingModule { }
