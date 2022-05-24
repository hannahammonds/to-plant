import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlantService } from '../shared/plant.service';
import { Plant } from '../shared/plant.model';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-to-plant',
  templateUrl: './to-plant.component.html',
  styleUrls: ['./to-plant.component.css'],
})
export class ToPlantComponent implements OnInit {
  @ViewChild('f') toPlantForm: NgForm;
  defaultSeason = 'Spring';
  plants: Plant[] = [];
  submitted = false;

  constructor(private plantService: PlantService,
              private dataStorageService: DataStorageService) {}

  ngOnInit(): void {

    this.plants = this.plantService.getToPlant()
    this.plantService.plantSubject.subscribe(plants => {
      this.plants = this.plantService.getToPlant()
    })
  }

  onSubmit() {
    console.log(this.plants[0]);
    this.submitted = true;
    const plant: any = {};
    plant.seedname = this.toPlantForm.value.seedname;
    plant.amount = this.toPlantForm.value.amount;
    plant.weeks = this.toPlantForm.value.weeks;
    plant.season = this.toPlantForm.value.season;
    plant.whenplanted = this.toPlantForm.value.whenplanted

    this.plantService.onPlant({
      seedname: plant.seedname,
      amount: plant.amount,
      weeks: plant.weeks,
      season: plant.season,
      planted: false,
      whenplanted: plant.whenplanted 
    });

    this.toPlantForm.reset();
    this.dataStorageService.onPostPlant({
      seedname: plant.seedname,
      amount: plant.amount,
      weeks: plant.weeks,
      season: plant.season,
      planted: false,
      whenplanted: plant.whenplanted
    });
  }

  onMove(i) {
    let plant = this.plants[i];
    plant.planted = true;
    this.onDelete(i);
  }

  onDelete(i:number) {
    this.dataStorageService.deletePlant(i).subscribe();

  }

  onClear() {
    this.plants = [];
  }

}
