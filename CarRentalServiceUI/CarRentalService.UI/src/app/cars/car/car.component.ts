import { Component, Input } from '@angular/core';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() data: Car;
}
