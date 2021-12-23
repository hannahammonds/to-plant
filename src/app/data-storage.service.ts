import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant, PlantService } from './plant.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private plantService: PlantService) {}

  storePlants() {
  }


  onPostPlant() {
    const plants = this.plantService.getPlanted()
    this.http.post(
      'https://to-plant-default-rtdb.firebaseio.com/posts.json',
      plants
    ).subscribe(responseData => {
      console.log(responseData)
    });
  }

  fetchPlants() {
    this.http.get<Plant[]>('https://to-plant-default-rtdb.firebaseio.com/posts.json')
    .subscribe(plants =>{
    this.plantService.setPlants(plants);
    })
  }
}
