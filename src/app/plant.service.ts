import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlantService {
  private planted = [
    {
      seedname: 'garlic',
      amount: '40',
      weeks: '40',
      conditions: 'cool',
      season: 'Fall',
    },
    {
      seedname: 'kolhrabi',
      amount: '10',
      weeks: '12',
      conditions: 'cool',
      season: 'Spring',
    },
  ];

  getPlanted() {
    return this.planted.slice();
  }

  onPlant(plant) {
    this.planted.push(plant)
  }
}
