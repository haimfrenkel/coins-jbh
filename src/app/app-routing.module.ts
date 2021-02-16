import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CoinsListComponent } from './components/coins-list/coins-list.component';
import { HomeComponent } from './components/home/home.component';
import { RealTimeComponent } from './components/real-time/real-time.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'coinsList', component:CoinsListComponent},
  {path: 'realTime', component: RealTimeComponent },
  {path: 'about', component: AboutComponent }    
    
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
