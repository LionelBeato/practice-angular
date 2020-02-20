import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherComponent } from './other/other.component';
import { NameComponent } from './name/name.component';


const routes: Routes = [
  {path: 'other', component: OtherComponent},
  {path: '', component: NameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
