import { Component, OnInit } from '@angular/core';
import { PlantService } from '../shared/plant.service';
import { Plant } from '../shared/plant.model';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-planted',
  templateUrl: './planted.component.html',
  styleUrls: ['./planted.component.css'],
})
export class PlantedComponent implements OnInit {
  
  constructor(private plantService: PlantService, private dataStorageService: DataStorageService) {}
  plants: Plant[] = [];

  ngOnInit() {
    this.dataStorageService.fetchPlants();
    this.plants = this.plantService.getPlanted();
    this.plantService.plantSubject.subscribe(() => {
      this.plants = this.plantService.getPlanted();
    });
  }
}

