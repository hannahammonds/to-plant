import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private plantsSub: Subscription;

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
    season: 'summer',
},
  {seedname: 'tomato',
    amount: '10',
    weeks: '20',
    conditions: 'hot',
    season: 'summer',
},
  {seedname: 'pumpkin',
    amount: '10',
    weeks: '30',
    conditions: 'hot',
    season: 'fall',
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

  onDelete(i) {
    this.plants.splice(i, 1);
  }

  onClear() {
    this.plants = []
  }

}

