import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaust, exhaustMap, take, tap } from 'rxjs/operators';
import { PlantService } from './plant.service';
import { Plant } from './plant.model';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private plantService: PlantService,
    private authService: AuthService
  ) {}

  onPostPlant() {
    const plants = this.plantService.getPlants();
    return this.http.put(
      'https://to-plant-default-rtdb.firebaseio.com/posts.json',
      plants
    ).subscribe();
  }

  fetchPlants() {
        return this.http.get<Plant[]>(
          'https://to-plant-default-rtdb.firebaseio.com/posts.json', {
          } ).pipe (
            tap(plants => {
              this.plantService.setPlants(plants)
            })
          )
  }
}
