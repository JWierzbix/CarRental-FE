import { Component, Input } from '@angular/core';
import { CarDetails } from 'src/app/models/car-details.model';

@Component({
  selector: 'app-best-car',
  templateUrl: './best-car.component.html',
  styleUrls: ['./best-car.component.scss']
})
export class BestCarComponent {
  @Input() data: CarDetails;
}
