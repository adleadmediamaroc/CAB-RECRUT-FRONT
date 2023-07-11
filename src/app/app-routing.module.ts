import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importez les composants nécessaires pour les routes

import { StaffComponent } from './staff/staff.component';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
// Importez d'autres composants et créez des routes supplémentaires selon vos besoins

const routes: Routes = [
   // Route pour la page d'accueil
  { path: 'staff', component: StaffComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // Route pour la page du personnel
  // Ajoutez d'autres routes ici
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
