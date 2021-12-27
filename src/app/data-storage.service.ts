import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Plant, PlantService } from './plant.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  fetchBooks() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient, private plantService: PlantService) {}


  onPostPlant() {
    const plants = this.plantService.getToPlant()
    this.http.post(
      'https://to-plant-default-rtdb.firebaseio.com/posts.json',
      plants
    ).subscribe(responseData => {
      console.log(responseData)
    });
  }

  fetchPlants() {
    return this.http.get<Plant[]>('https://to-plant-default-rtdb.firebaseio.com/posts.json')
    .pipe(tap(plants =>{
    this.plantService.setPlants(plants);
    }))
  }
}
