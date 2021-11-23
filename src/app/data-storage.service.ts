import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClientModule) {}

  onPostPlant(postData: {
    seedname: string;
    amount: number;
    weeks: number;
    conditions: string;
    season: string;
  }) {
    this.http.post(
      'https://to-plant-default-rtdb.firebaseio.com/posts.json',
      postData
    ).subscribe(responseData => {
      console.log(responseData)
    });
  }
}
