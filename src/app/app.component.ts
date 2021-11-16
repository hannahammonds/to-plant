import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-plant';
  @ViewChild ('f') toPlantForm: NgForm
  defaultSeason = 'Spring'
  plant = {
    seedname: '',
    amount: '',
    weeks: '',
    conditions: '',
    season: '',
  }
  plants = []

submitted = false;
  onSubmit(){
    this.submitted = true;
    this.plant.seedname = this.toPlantForm.value.seedname;
    this.plant.amount = this.toPlantForm.value.amount;
    this.plant.weeks = this.toPlantForm.value.weeks;
    this.plant.conditions = this.toPlantForm.value.conditions;
    this.plant.season = this.toPlantForm.value.season;

    this.plants.push(this.plant);
    
    this.toPlantForm.reset();
    console.log(this.toPlantForm);

  }

}
