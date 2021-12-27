import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlantResolverService } from './plant-resolver.service';
import { PlantedComponent } from './planted/planted.component';
import { ToPlantComponent } from './to-plant/to-plant.component';

const routes: Routes = [
  { path: 'planted', component: PlantedComponent },
  { path: 'to-plant', component: ToPlantComponent },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'id', component: ToPlantComponent, resolve: [PlantResolverService] },
  { path: 'id/edit', component: PlantedComponent, resolve: [PlantResolverService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
