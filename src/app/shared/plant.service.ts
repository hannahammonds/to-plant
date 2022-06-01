import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Plant } from './plant.model';


@Injectable({ providedIn: 'root' })
export class PlantService {

  public plantSubject: Subject<Plant[]> = new Subject();

  private plants: Plant[] = [];



  onPlant(plant) {
    this.plants.push(plant);
    this.plantSubject.next(this.plants.slice());

  }

  getPlants() {
    return this.plants.slice();
  }

  getPlantById(id) {
    return this.plants.find(plant => plant.id == id)
  }

  getToPlant() {
    return this.plants.filter((plant) => {
      return plant.has_been_planted == false;
    });
  }

  getPlanted() {
    return this.plants.filter((plant) => {
      return plant.has_been_planted === true;
    });
  }

  setPlants(plants: Plant[]) {
    this.plants = plants;
    this.plantSubject.next(this.plants.slice());
  }


  onRemovePlant(id){
    // execute code ot remove plant
    // use filter to remove plant by id
    // filter is a built in JavaScript method

    console.log("filtered remove plants", this.plants.filter((plant)=> {
      return plant.id!=id
    }))
    //new array with the id removed
    this.plants = this.plants.filter((plant)=> {
      return plant.id!=id
    })
    //subscribed to the plantSubject
    //passed in getPlants() to get new array
    //subject edits the view
    this.plantSubject.next(this.getPlants())
  }
}


