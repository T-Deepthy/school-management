import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EightComponent } from './eight/eight.component';
import {HomeComponent} from './home/home.component'
import { NineComponent } from './nine/nine.component';
import { TenComponent } from './ten/ten.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'eigth', component: EightComponent },
  { path: 'nines', component: NineComponent },
  { path: 'ten', component: TenComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
