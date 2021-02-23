import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AusessionListComponent } from '../ausession-list/ausession-list.component';
import { AusessionAddComponent } from '../ausession-add/ausession-add.component';
const appRouts : Routes = [
  {
    path:'list',
    component:AusessionListComponent,
  },
  {
    path:'add',
    component: AusessionListComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRouts)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
