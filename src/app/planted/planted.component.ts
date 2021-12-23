import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-planted',
  templateUrl: './planted.component.html',
  styleUrls: ['./planted.component.css']
})

export class PlantedComponent implements OnInit {
  hasBeenPlanted = [];

  constructor(private plantService: PlantService) {

   }

  ngOnInit() {

    this.hasBeenPlanted = this.plantService.getPlanted()
    this.plantService.plantedChanged.subscribe(newPlants => {
      this.hasBeenPlanted = newPlants
    });
  }

}

// private planted = [
//   {
//     seedname: 'garlic',
//     amount: '40',
//     weeks: '40',
//     conditions: 'cool',
//     season: 'summer',
//   },
//   {seedname: 'kolhrabi',
//    amount: '10',
//    weeks: '12',
//   conditions: 'cool',
//   season: 'spring',
// }
// ];
