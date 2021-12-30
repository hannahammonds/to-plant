import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Plant } from './plant.model';

@Injectable({ providedIn: 'root' })
export class PlantService {

  public plantSubject: Subject<Plant[]> = new Subject();

  private plants: Plant[] = [];

  onPlant(plant) {
    this.plants.push(plant);
    this.plantSubject.next(this.plants.slice());
  }

  getPlants() {
    return this.plants.slice();
  }

  getToPlant() {
    return this.plants.filter((plant) => {
      return plant.planted == false;
    });
  }

  getPlanted() {
    return this.plants.filter((plant) => {
      return plant.planted === true;
    });
  }

  setPlants(plants: Plant[]) {
    this.plants = plants;
    this.plantSubject.next(this.plants.slice());
  }
}


