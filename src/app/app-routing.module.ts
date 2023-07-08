import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importez les composants nécessaires pour les routes

import { StaffComponent } from './staff/staff.component';
// Importez d'autres composants et créez des routes supplémentaires selon vos besoins

const routes: Routes = [
   // Route pour la page d'accueil
  { path: 'staff', component: StaffComponent }, // Route pour la page du personnel
  // Ajoutez d'autres routes ici
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
