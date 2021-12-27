import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { find } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PlantService {
  public toPlantChanged: Subject<Plant[]> = new Subject();
  public plantedChanged: Subject<Plant[]> = new Subject();

  private toPlant: Plant[] = [];

  private planted: Plant[] = [
    // {
    //   seedname: 'garlic',
    //   amount: '40',
    //   weeks: '40',
    //   season: 'Fall',
    // },
    // {
    //   seedname: 'kolhrabi',
    //   amount: '10',
    //   weeks: '12',
    //   season: 'Spring',
    // },
  ];

  getToPlant() {
    return this.toPlant.slice();
  }

  getPlanted() {
    return this.planted.slice();
  }

  onPlant(plant) {
    this.toPlant.push(plant);
    this.toPlantChanged.next(this.toPlant.slice());
  }
  onPlanted(plant) {
    this.planted.push(plant);
    this.toPlant.splice(
      this.toPlant.findIndex((p) => p === plant),
      1
    );
    /* this.toPlantChanged.next(this.toPlant.slice()) */
    this.plantedChanged.next(this.planted.slice());
  }

  setPlants(plants: Plant[]) {
    this.planted = plants;
    this.plantedChanged.next(this.planted.slice());
  }
}

export class Plant {
  constructor(
    public seedname: string,
    public amount: string,
    public weeks: string,
    public season: string,
    public planted?: boolean
  ) {}
}
