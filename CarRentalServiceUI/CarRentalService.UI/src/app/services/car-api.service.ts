import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarDetails } from '../models/car-details.model';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  BASE_URL: string = 'http://carrentalservice-001-site1.atempurl.com/api/'
  GET_CARS: string = 'cars'
  GET_CAR: string = 'car?carId='

  constructor(
    private http: HttpClient
  ) { }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.BASE_URL + this.GET_CARS);
  }

  getCarDetails(id: string): Observable<CarDetails> {
    const url = this.BASE_URL + this.GET_CAR + id;
    return this.http.get<CarDetails>(url);
  }
}
