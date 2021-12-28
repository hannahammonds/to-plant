import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataStorageService } from './data-storage.service';
import { Plant } from './plant.model';

@Injectable({ providedIn: 'root' })
export class PlantService {

  public plantSubject: Subject<Plant[]> = new Subject();

  private plants: Plant[] = [
    {
      seedname: 'broccoli',
      amount: 50,
      weeks: 30,
      season: 'spring',
      planted: false,
    },
    {
      seedname: 'potatoes',
      amount: 50,
      weeks: 30,
      season: 'spring',
      planted: true,
    },
    {
      seedname: 'hash browns',
      amount: 50,
      weeks: 30,
      season: 'spring',
      planted: false,
    },
  ];

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


