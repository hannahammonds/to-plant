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
  //   conditions: '',
  //   season: '',
  //   planted: false,
  // };
  plants: Plant[] = [
  //   {
  //     seedname: 'broccoli',
  //     amount: '10',
  //     weeks: '10',
  //     conditions: 'cool',
  //     season: 'Spring',
  //     planted: false,
  //   },
  //   {
  //     seedname: 'tomato',
  //     amount: '10',
  //     weeks: '20',
  //     conditions: 'hot',
  //     season: 'Summer',
  //     planted: false,
  //   },
  //   {
  //     seedname: 'pumpkin',
  //     amount: '10',
  //     weeks: '30',
  //     conditions: 'hot',
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
    plant.conditions = this.toPlantForm.value.conditions;
    plant.season = this.toPlantForm.value.season;
    // {seedname: plant.seedname,.....planted:false}
    this.plantService.onPlant({
      seedname: plant.seedname,
      amount: plant.amount,
      weeks: plant.weeks,
      conditions: plant.conditions,
      season: plant.season,
      planted: false,
    });
    console.log(this.plants);

    this.toPlantForm.reset();
    console.log(this.toPlantForm);
  }

  onMove(i) {
    let plant = this.plants[i];
    plant.planted = true;
    console.log("planted", plant)
    this.plantService.onPlant(plant);
    this.onDelete(i);
  }

  onDelete(i) {
    this.plants.splice(i, 1);
  }

  onClear() {
    this.plants = [];
  }
}
