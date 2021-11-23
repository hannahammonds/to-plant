import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantService } from './plant.service';
import { PlantedComponent } from './planted/planted.component';
import { ToPlantComponent } from './to-plant/to-plant.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantedComponent,
    ToPlantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PlantService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
