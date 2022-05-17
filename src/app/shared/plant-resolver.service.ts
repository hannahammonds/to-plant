import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from './data-storage.service';
import { PlantService } from './plant.service';
import { Plant } from './plant.model';

@Injectable({
  providedIn: 'root'
})
export class PlantResolverService implements Resolve<Plant[]> {

  constructor(private dataStorageService: DataStorageService, private plantService: PlantService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const plants = this.plantService.getPlants()
      if(plants.length === 0){
        return this.dataStorageService.fetchPlants();
      } else {
        return plants
      }
    }
}
