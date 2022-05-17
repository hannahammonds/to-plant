import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { PlantService } from './plant.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private plantService: PlantService,
  ) {}

  onPostPlant() {
    const plants = this.plantService.getPlants();
    return this.http.post(
      'https://to-plant-api.herokuapp.com/api/v1/plants',
      plants
    ).subscribe((res: any) => {
      this.plantService.onPlant(res.payload.plant)
    });
  }

  fetchPlants() {
        return this.http.get(
          "https://to-plant-api.herokuapp.com/api/v1/plants/get_plants", {
          } ).pipe (
            tap((res: any) => {
              console.log("Fetching plants", res);
              this.plantService.setPlants(res.payload)
            })
          )
  }
}
