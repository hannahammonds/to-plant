import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantedComponent } from './planted/planted.component';
//localhost:4200
// app component
const routes: Routes = [
  { path: 'planted', component: PlantedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
