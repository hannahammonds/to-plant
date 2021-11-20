import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-to-plant',
  templateUrl: './to-plant.component.html',
  styleUrls: ['./to-plant.component.css']
})

export class ToPlantComponent implements OnInit {

  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
  }
  title = 'to-plant';
  @ViewChild('f') toPlantForm: NgForm;
  defaultSeason = 'Spring';
  plant = {
    seedname: '',
    amount: '',
    weeks: '',
    conditions: '',
    season: '',
  };
  plants = [
    {seedname: 'broccoli',
     amount: '10',
     weeks: '10',
    conditions: 'cool',
    season: 'Spring',
},
  {seedname: 'tomato',
    amount: '10',
    weeks: '20',
    conditions: 'hot',
    season: 'Summer',
},
  {seedname: 'pumpkin',
    amount: '10',
    weeks: '30',
    conditions: 'hot',
    season: 'Fall',
},
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

    this.plants.push(plant);
    console.log(this.plants);

    this.toPlantForm.reset();
    console.log(this.toPlantForm);
  }

  //send index position to planted.component - routing
   onMove(i) {
    // inject plant.service inside of to-plant x
    // define onPlanted in the service  x

    //call this code VV in the onMove method
    let plant = this.plants[i]
    this.plantService.onPlant(plant);
    this.onDelete(i)
    }

  onDelete(i) {
    this.plants.splice(i, 1);
  }

  onClear() {
    this.plants = []
  }

}
