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

  onPostPlant(plant) {
    console.log("plant", plant)
    return this.http.post(
      'https://to-plant-api.herokuapp.com/api/v1/plants',
      plant
    ).subscribe((res: any) => {
      console.log(res)
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

  updatePlant(plant) {
    console.log("update plant", plant.id, plant);
    return this.http.put(`https://to-plant-api.herokuapp.com/api/v1/plants/${plant.id}`, plant)
  }

  deletePlant(id:number) {
    console.log(id)
    return this.http.delete(`https://to-plant-api.herokuapp.com/api/v1/plants/${id}`)
  }
}
