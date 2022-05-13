import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlantResolverService } from './shared/plant-resolver.service';
import { PlantedComponent } from './planted/planted.component';
import { ToPlantComponent } from './to-plant/to-plant.component';
import { AuthGaurd } from './auth/auth-gaurd';
import { SessionGuard } from './shared/auth/session.guard';

const routes: Routes = [
  {
    path: 'planted',
    component: PlantedComponent,
    canActivate: [AuthGaurd],
    children: [],
  },
  {
    path: 'to-plant',
    component: ToPlantComponent,
    canActivate: [AuthGaurd],
  },
  {
    path: 'nav-bar',
    component: NavBarComponent,
  },
  {
    path: 'auth',
    canActivate: [SessionGuard],
    component: AuthComponent
  },
  {
    path: 'id', component: ToPlantComponent,
    resolve: [PlantResolverService]
  },
  {
    path: 'id/edit',
    component: PlantedComponent,
    resolve: [PlantResolverService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
