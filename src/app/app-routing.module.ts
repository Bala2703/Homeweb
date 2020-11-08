import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { title } from 'process';
import { FloornavComponent } from './floornav/floornav.component';
import { TitlesComponent } from './titles/titles.component';

const routes: Routes = [
  {path:'Home', component:TitlesComponent},
  {path:'HomeAutomation',component:FloornavComponent},
  {path:'',redirectTo:'/Home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[TitlesComponent,FloornavComponent]
