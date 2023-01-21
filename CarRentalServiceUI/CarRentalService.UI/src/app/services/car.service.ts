import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Car } from '../models/car.model';
import * as temporary from '../models/cars-temporary-data';
import { CarDetails } from '../models/car-details.model';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getAllCars(): Observable<Car[]> {
    return new Observable((observer: Observer<Car[]>) => {
      setTimeout(() => {
        observer.next(temporary.cars);
      }, 200)
    });
  }

  getCarDetails(id: string): Observable<CarDetails> {
    return new Observable((observer: Observer<CarDetails>) => {
      setTimeout(() => {
        if(id === 'bmw-m8-competition'){
          observer.next(temporary.carDetail);
        }
        else {
          observer.error('BMW  ssie');
        }   
      }, 200)
    });
  }
}
