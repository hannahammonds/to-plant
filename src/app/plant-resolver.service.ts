import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from './data-storage.service';
import { Plant } from './plant.service';

@Injectable({
  providedIn: 'root'
})
export class PlantResolverService implements Resolve<Plant[]> {

  constructor(private dataStorageService: DataStorageService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const plants = this.plantService.
      return this.dataStorageService.fetchBooks();
    }
}
