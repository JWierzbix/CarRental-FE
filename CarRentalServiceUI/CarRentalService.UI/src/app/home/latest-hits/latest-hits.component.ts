import { Component, OnInit } from '@angular/core';
import { CarDetails } from 'src/app/models/car-details.model';
import { CarApiService } from 'src/app/services/car-api.service';

@Component({
  selector: 'app-latest-hits',
  templateUrl: './latest-hits.component.html',
  styleUrls: ['./latest-hits.component.scss']
})
export class LatestHitsComponent implements OnInit {
  popularCars: CarDetails[];

  constructor(
    private carService: CarApiService
  ) {}

  ngOnInit() {
    this.carService.getCarsByPopularity().subscribe((res) => {
      this.popularCars = res.slice(0, 3);
    })
  }
}
