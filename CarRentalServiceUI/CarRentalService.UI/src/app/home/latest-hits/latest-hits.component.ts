import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-latest-hits',
  templateUrl: './latest-hits.component.html',
  styleUrls: ['./latest-hits.component.scss']
})
export class LatestHitsComponent {
  carData: Car = new Car(
    '5594f703-37c6-43df-b599-af54bc59d376',
    'M8 Competition',
    'BMw',
    2200,
    3.0,
    220,
    'Automat',
    2.3,
    ''
)
}
