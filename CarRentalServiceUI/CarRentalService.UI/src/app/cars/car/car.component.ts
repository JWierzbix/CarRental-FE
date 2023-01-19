import { Component, Input } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() data: Car = new Car('default', 'default', 2137, 6.9, 420, 'default', 1.5);
}
