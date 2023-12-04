import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarDetailComponent } from './car-detail/car-detail.component'; // Importez le composant CarDetailComponent
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '**', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'car-detail', component: CarDetailComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // Utilisez 'appRoutes' au lieu de 'routes'
  exports: [RouterModule]
})
export class AppRoutingModule { }
