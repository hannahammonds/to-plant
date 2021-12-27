import { Injectable } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_k } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from './data-storage.service';
import { Plant } from './plant.service';

@Injectable({
  providedIn: 'root'
})
export class PlantResolverService implements Resolve<Plant[]> {
  plantService: any;

  constructor(private dataStorageService: DataStorageService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const plants = this.plantService.setPlants();
      if(plants.length ==0){
        return this.dataStorageService.fetchPlants();
      } else {
        return plants
      }
      return this.dataStorageService.fetchPlants();
    }
}
