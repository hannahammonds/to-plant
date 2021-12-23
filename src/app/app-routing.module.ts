import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlantedComponent } from './planted/planted.component';
import { ToPlantComponent } from './to-plant/to-plant.component';

const routes: Routes = [
  { path: 'planted', component: PlantedComponent },
  { path: 'to-plant', component: ToPlantComponent },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
