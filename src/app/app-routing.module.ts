import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherComponent } from './other/other.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NaviComponent } from './navi/navi.component';


const routes: Routes = [
  {path: 'other', component: OtherComponent},
  {path: '', component: NaviComponent},
  {path: 'error', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
