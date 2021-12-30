import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantService } from './shared/plant.service';
import { PlantedComponent } from './planted/planted.component';
import { ToPlantComponent } from './to-plant/to-plant.component';
import { AuthComponent } from './auth/auth.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthInceptorService } from './auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    PlantedComponent,
    ToPlantComponent,
    AuthComponent,
    NavBarComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
