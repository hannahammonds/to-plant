import { Component, OnInit } from '@angular/core';
import { PlantService } from '../shared/plant.service';
import { Plant } from '../shared/plant.model';

@Component({
  selector: 'app-planted',
  templateUrl: './planted.component.html',
  styleUrls: ['./planted.component.css'],
})
export class PlantedComponent implements OnInit {
  constructor(private plantService: PlantService) {}
  plants: Plant[] = [];

  ngOnInit() {
    this.plants = this.plantService.getPlanted();
    this.plantService.plantSubject.subscribe(() => {
      this.plants = this.plantService.getPlanted();
    });
  }
}

