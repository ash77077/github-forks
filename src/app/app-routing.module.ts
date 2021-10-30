import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SingleListComponent } from './single-list/single-list.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent, pathMatch:'full'},
  { path: 'list', component: ListComponent, pathMatch:'full'},
  { path: 'single-list', component: SingleListComponent, pathMatch:'full'},
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
