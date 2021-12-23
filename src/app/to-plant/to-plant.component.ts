import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Plant, PlantService } from '../plant.service';

@Component({
  selector: 'app-to-plant',
  templateUrl: './to-plant.component.html',
  styleUrls: ['./to-plant.component.css'],
})
export class ToPlantComponent implements OnInit {
  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    this.plants = this.plantService.getToPlant()
    this.plantService.toPlantChanged.subscribe(plants => {
      this.plants = plants
    })
  }
  title = 'to-plant';
  @ViewChild('f') toPlantForm: NgForm;
  defaultSeason = 'Spring';
  // plant = {
  //   seedname: '',
  //   amount: '',
  //   weeks: '',
  //   season: '',
  //   planted: false,
  // };
  plants: Plant[] = [
  //   {
  //     seedname: 'broccoli',
  //     amount: '10',
  //     weeks: '10',
  //     season: 'Spring',
  //     planted: false,
  //   },
  //   {
  //     seedname: 'tomato',
  //     amount: '10',
  //     weeks: '20',
  //     season: 'Summer',
  //     planted: false,
  //   },
  //   {
  //     seedname: 'pumpkin',
  //     amount: '10',
  //     weeks: '30',
  //     season: 'Fall',
  //     planted: false,
  //   },
   ];

  submitted = false;
  onSubmit() {
    console.log(this.plants[0]);
    this.submitted = true;
    const plant: any = {};
    plant.seedname = this.toPlantForm.value.seedname;
    plant.amount = this.toPlantForm.value.amount;
    plant.weeks = this.toPlantForm.value.weeks;
    plant.season = this.toPlantForm.value.season;
    this.plantService.onPlant({
      seedname: plant.seedname,
      amount: plant.amount,
      weeks: plant.weeks,
      season: plant.season,
      planted: false,
    });
    this.toPlantForm.reset();
  }

  onMove(i) {
    let plant = this.plants[i];
    plant.planted = true;
    this.plantService.onPlanted(plant);
    this.onDelete(i);
  }

  onDelete(i) {
    this.plants.splice(i, 1);
  }

  onClear() {
    this.plants = [];
  }
}
