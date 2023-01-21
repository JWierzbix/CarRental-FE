import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  carsObservable: Observable<Car[]>;
  cars: Car[];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carsObservable = this.carService.getAllCars()

    this.carsObservable.subscribe((cars) => {
      this.cars = cars;
    });
  }
}
