import { Component, OnInit, ViewChild } from '@angular/core';
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
      console.log("plants from api", plants)
      console.log("filterplants by false", this.plantService.getToPlant())
    })
  }

  onSubmit() {
    console.log(this.plants[0]);
    this.submitted = true;
    const plant: any = {};
    plant.seed_name = this.toPlantForm.value.seed_name;
    plant.amount = this.toPlantForm.value.amount;
    plant.weeks_to_mature = this.toPlantForm.value.weeks_to_mature;
    plant.growing_season = this.toPlantForm.value.growing_season;
    plant.when_planted = this.toPlantForm.value.when_planted

    this.plantService.onPlant({
      seed_name: plant.seed_name,
      amount: plant.amount,
      weeks_to_mature: plant.weeks_to_mature,
      grwoing_season: plant.growing_season,
      has_been_planted: false,
      when_planted: plant.when_planted
    });

    this.toPlantForm.reset();
    this.dataStorageService.onPostPlant({
      seed_name: plant.seed_name,
      amount: plant.amount,
      weeks_to_mature: plant.weeks_to_mature,
      growing_season: plant.growing_season,
      has_been_planted: false,
      when_planted: plant.when_planted

    });
  }

  onMove(index) {
    this.plants[index].has_been_planted = true;
    //send update request
    this.dataStorageService.updatePlant(this.plants[index]).subscribe();
  }

  onDelete(id:number) {
    this.dataStorageService.deletePlant(id).subscribe((res)=>{
      console.log(res)
// call onRemovePlant to change the view
      this.plantService.onRemovePlant(id)
    });


  }

  onClear() {
    this.plants = [];
  }

}
